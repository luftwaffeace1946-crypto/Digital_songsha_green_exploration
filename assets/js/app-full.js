(function () {
  const CDN_URL = "https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js";
  const chartDom = document.getElementById("chart");
  const chartScroll = document.getElementById("chartScroll");
  const panel = document.getElementById("infoPanel");
  const searchInput = document.getElementById("searchInput");
  const searchCount = document.getElementById("searchCount");
  const filterGroup = document.getElementById("filterGroup");
  const legend = document.getElementById("legend");
  const searchResults = document.getElementById("searchResults");
  const utils = window.GreenTreeUtils;
  const panelApi = window.GreenPanel;
  const root = window.GREEN_TREE_DATA;
  const index = utils.createIndex(root);

  let chart = null;
  let resizeTimer = null;
  let emphasisTimers = [];

  const state = {
    filters: new Set(["all"]),
    activeId: null,
    locked: false,
    mode: "idle",
    collapseMode: "default",
    expandedIds: new Set(),
    collapsedIds: new Set(),
    searchQuery: "",
    searchResultIds: []
  };

  function ensureEcharts() {
    if (window.echarts) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = CDN_URL;
      script.onload = resolve;
      script.onerror = () => reject(new Error("ECharts 加载失败"));
      document.head.appendChild(script);
    });
  }

  function init() {
    renderLegend();
    panelApi.renderNode(panel, root, index, { locked: false });
    chart = window.echarts.init(chartDom, null, { renderer: "canvas" });
    bindChartEvents();
    bindUiEvents();
    renderChart(true);
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => renderChart(false), 120);
    });
  }

  function renderLegend() {
    if (!legend) return;
    legend.innerHTML = Object.entries(utils.DEV_TYPES)
      .map(([key, value]) => {
        return `<span class="legend-item" data-dev-type="${key}"><span class="legend-swatch" style="background:${value.color}"></span>${value.shortLabel}</span>`;
      })
      .join("");
  }

  function bindUiEvents() {
    panel.addEventListener("click", (event) => {
      if (event.target.closest("#closePanelBtn")) {
        clearSelection();
      }
    });

    searchInput.addEventListener("input", () => {
      state.searchQuery = searchInput.value.trim();
      const results = utils.search(index, state.searchQuery);
      state.searchResultIds = results.map((node) => node.id);
      state.expandedIds = utils.getExpandedPathIds(index, state.searchResultIds);
      searchCount.textContent = String(results.length);
      if (!state.locked && results.length === 1) {
        state.activeId = results[0].id;
        state.mode = "search";
      } else if (!state.locked && state.activeId && !state.searchResultIds.includes(state.activeId)) {
        state.activeId = null;
      }
      panelApi.renderSearchResultsOnly(searchResults, results, index, selectNode);
      renderChart(false);
    });

    filterGroup.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-filter]");
      if (!button) return;
      updateFilters(button.dataset.filter);
      renderChart(false);
    });

    document.getElementById("expandAllBtn").addEventListener("click", () => {
      state.collapseMode = "all";
      state.expandedIds = new Set(index.nodes.keys());
      state.collapsedIds = new Set();
      renderChart(false);
    });

    document.getElementById("resetBtn").addEventListener("click", resetView);
  }

  function bindChartEvents() {
    chart.on("click", { seriesType: "tree" }, (params) => {
      const id = params.data && params.data.id;
      if (id) selectNode(id, { toggleExpansion: true });
    });

    chart.on("mouseout", { seriesType: "tree" }, () => {
      setTimeout(clearChartEmphasis, 0);
    });

    chart.getZr().on("click", (event) => {
      if (!event.target) clearSelection();
    });

    chart.getZr().on("globalout", clearChartEmphasis);
  }

  function selectNode(id, options = {}) {
    if (!index.nodes.has(id)) return;
    if (options.toggleExpansion) toggleExpansion(id);
    state.activeId = id;
    state.locked = true;
    state.mode = "click";
    utils.getAncestorIds(index, id).forEach((ancestorId) => state.expandedIds.add(ancestorId));
    panelApi.renderNode(panel, index.nodes.get(id), index, { locked: true });
    showInfoPanel();
    renderChart(false);
  }

  function toggleExpansion(id) {
    const node = index.nodes.get(id);
    if (!node || !node.children || node.children.length === 0) return;
    if (isCollapsed(id)) {
      state.expandedIds.add(id);
      state.collapsedIds.delete(id);
    } else {
      state.expandedIds.delete(id);
      state.collapsedIds.add(id);
    }
  }

  function isCollapsed(id) {
    const depth = index.depths.get(id) || 0;
    if (state.collapsedIds.has(id)) return true;
    if (state.expandedIds.has(id)) return false;
    if (state.collapseMode === "stages" && depth >= 1) return true;
    if (state.collapseMode === "default" && depth >= 1) return true;
    return false;
  }

  function clearSelection() {
    state.activeId = null;
    state.locked = false;
    state.mode = "idle";
    panelApi.renderNode(panel, root, index, { locked: false });
    renderChart(false);
  }

  function resetView() {
    state.filters = new Set(["all"]);
    state.activeId = null;
    state.locked = false;
    state.mode = "idle";
    state.collapseMode = "default";
    state.expandedIds = new Set();
    state.collapsedIds = new Set();
    state.searchQuery = "";
    state.searchResultIds = [];
    searchInput.value = "";
    searchCount.textContent = "0";
    searchResults.innerHTML = "";
    updateFilterButtons();
    panelApi.renderNode(panel, root, index, { locked: false });
    renderChart(true);
  }

  function updateFilters(filter) {
    if (filter === "all") {
      state.filters = new Set(["all"]);
      updateFilterButtons();
      return;
    }

    const nextFilters = new Set(state.filters || ["all"]);
    nextFilters.delete("all");

    if (nextFilters.has(filter)) {
      nextFilters.delete(filter);
    } else {
      nextFilters.add(filter);
    }

    state.filters = nextFilters.size > 0 ? nextFilters : new Set(["all"]);
    updateFilterButtons();
  }

  function updateFilterButtons() {
    filterGroup.querySelectorAll("button[data-filter]").forEach((button) => {
      const active = state.filters.has(button.dataset.filter);
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function showInfoPanel() {
    panel.hidden = false;
  }

  function hideInfoPanel() {
    panelApi.renderNode(panel, root, index, { locked: false });
  }

  function exportPng() {
    if (!chart) return;
    const dataUrl = chart.getDataURL({
      type: "png",
      pixelRatio: 2,
      backgroundColor: "#05070d"
    });
    utils.downloadDataUrl(dataUrl, "绿色勘查实训室建设图谱.png");
    showToast("PNG 图片已导出");
  }

  function resizeSurface() {
    chartDom.style.width = `${Math.max(chartScroll.clientWidth, 1)}px`;
    chartDom.style.height = `${Math.max(chartScroll.clientHeight, 1)}px`;
    chart.resize();
  }

  function renderChart(resetTransform) {
    if (!chart) return;
    const displayTree = utils.createDisplayTree(root, index, state);
    resizeSurface();
    const option = getOption(displayTree);
    chart.setOption(option, { notMerge: false, lazyUpdate: false });
    if (!resetTransform) scheduleEmphasisClear();
  }

  function clearChartEmphasis() {
    if (!chart) return;
    chart.dispatchAction({
      type: "downplay",
      seriesIndex: 0
    });
  }

  function scheduleEmphasisClear() {
    emphasisTimers.forEach((timer) => clearTimeout(timer));
    emphasisTimers = [0, 80, 560].map((delay) => setTimeout(clearChartEmphasis, delay));
  }

  function getOption(displayTree) {
    return {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        borderColor: "rgba(72,164,255,0.34)",
        backgroundColor: "rgba(11,18,32,0.96)",
        textStyle: { color: "#eaf2ff", fontSize: 12 },
        formatter(params) {
          const d = params.data || {};
          const dev = utils.DEV_TYPES[d.devType] || utils.DEV_TYPES.content;
          return [
            `<strong>${escapeHtml(d.name || "")}</strong>`,
            d.stage ? `所属环节：${escapeHtml(d.stage)}` : "",
            dev ? `开发属性：${escapeHtml(dev.shortLabel)}` : "",
            d.summary ? `<br/>${escapeHtml(d.summary)}` : ""
          ]
            .filter(Boolean)
            .join("<br/>");
        }
      },
      series: [
        {
          type: "tree",
          data: [displayTree],
          orient: "LR",
          layout: "orthogonal",
          top: 20,
          left: 220,
          bottom: 20,
          right: 180,
          symbol: "circle",
          symbolSize: 8,
          expandAndCollapse: true,
          initialTreeDepth: 2,
          roam: true,
          zoom: 1,
          scaleLimit: { min: 0.55, max: 1.6 },
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 12,
            lineHeight: 18,
            overflow: "truncate",
            width: 160,
            color: "#eaf2ff",
            backgroundColor: "transparent",
            padding: 0
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
              width: 160
            }
          },
          emphasis: {
            focus: "descendant",
            lineStyle: {
              width: 2.4
            }
          },
          lineStyle: {
            color: "rgba(143, 215, 255, 0.42)",
            width: 1.2,
            curveness: 0.48
          },
          animationDuration: 420,
          animationDurationUpdate: 520
        }
      ]
    };
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1800);
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureEcharts()
      .then(init)
      .catch((error) => {
        panel.innerHTML = `<div class="empty-state"><div><h2>图谱加载失败</h2><p class="summary">${escapeHtml(error.message)}</p></div></div>`;
      });
  });
})();
