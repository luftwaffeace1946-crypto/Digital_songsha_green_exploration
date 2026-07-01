(function () {
  const chartDom = document.getElementById("chart");
  const chart = echarts.init(chartDom);
  const rawData = window.GREEN_TREE_DATA;

  const DEV_COLORS = {
    project: "#0b4d43",
    newDev: "#2563eb",
    retrofit: "#e87917",
    physical: "#1f8f55",
    content: "#7c3aed",
    platform: "#0f766e",
    reuse: "#6b7280"
  };

  const DEV_LABELS = {
    project: "项目",
    newDev: "实训操作台",
    retrofit: "微型钻探终端",
    physical: "线下实物",
    content: "内容资源",
    platform: "平台集成",
    reuse: "内容资源"
  };

  const expandedIds = new Set();

  function cloneForTree(node, depth) {
    const devType = node.devType || "content";
    const color = DEV_COLORS[devType] || "#555";
    const hasChildren = Boolean(node.children && node.children.length);
    const expanded = depth === 0 || expandedIds.has(node.id);

    const cloned = {
      id: node.id,
      name: node.name,
      devType: node.devType,
      stage: node.stage,
      summary: node.summary,
      outputs: node.outputs,
      hasChildren: hasChildren,
      itemStyle: {
        color: color,
        borderColor: color
      }
    };

    if (hasChildren && expanded) {
      cloned.children = node.children.map(function (child) {
        return cloneForTree(child, depth + 1);
      });
    }

    if (hasChildren && !expanded) {
      cloned.label = {
        position: "left",
        verticalAlign: "middle",
        align: "right",
        color: "#333"
      };
    }

    return cloned;
  }

  function findRawNodeById(id, node) {
    if (!node) {
      return null;
    }

    if (node.id === id) {
      return node;
    }

    for (const child of node.children || []) {
      const found = findRawNodeById(id, child);
      if (found) {
        return found;
      }
    }

    return null;
  }

  function collapseDescendants(node) {
    (node.children || []).forEach(function (child) {
      expandedIds.delete(child.id);
      collapseDescendants(child);
    });
  }

  function toggleNode(data) {
    if (!data || !data.hasChildren || data.id === rawData.id) {
      return false;
    }

    const rawNode = findRawNodeById(data.id, rawData);
    if (!rawNode) {
      return false;
    }

    if (expandedIds.has(data.id)) {
      expandedIds.delete(data.id);
      collapseDescendants(rawNode);
    } else {
      expandedIds.add(data.id);
    }

    renderTree();
    return true;
  }

  function getOption(displayTree) {
    return {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        formatter: function (params) {
          const d = params.data || {};
          const devLabel = DEV_LABELS[d.devType] || "内容";
          const lines = [
            "<strong>" + escapeHtml(d.name || "") + "</strong>",
            d.stage ? "所属环节：" + escapeHtml(d.stage) : "",
            "开发属性：" + escapeHtml(devLabel),
            d.summary ? "<br/>" + escapeHtml(d.summary) : ""
          ];

          if (d.outputs && d.outputs.length) {
            lines.push("<br/>成果：" + escapeHtml(d.outputs.slice(0, 3).join("、")));
          }

          return lines.filter(Boolean).join("<br/>");
        }
      },
      series: [
        {
          id: "green-tree-basic",
          type: "tree",
          data: [displayTree],
          top: "4%",
          left: "7%",
          bottom: "4%",
          right: "18%",
          symbol: "circle",
          symbolSize: 7,
          orient: "LR",
          layout: "orthogonal",
          edgeShape: "curve",
          edgeForkPosition: "50%",
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 9,
            color: "#333",
            backgroundColor: "transparent",
            padding: 0
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
              color: "#333"
            }
          },
          lineStyle: {
            color: "#cfd8d3",
            width: 1.2,
            curveness: 0.45
          },
          expandAndCollapse: true,
          initialTreeDepth: -1,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };
  }

  function renderTree() {
    chart.setOption(getOption(cloneForTree(rawData, 0)));
  }

  renderTree();
  bindLabelHoverFade();

  window.addEventListener("resize", function () {
    chart.resize();
  });

  const exportBtn = document.getElementById("exportBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", function () {
      const url = chart.getDataURL({
        type: "png",
        pixelRatio: 2,
        backgroundColor: "#fff"
      });

      const link = document.createElement("a");
      link.href = url;
      link.download = "绿色勘查实训室建设图谱.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function bindLabelHoverFade() {
    let clearTimer = null;
    const normalOpacity = 1;
    const dimOpacity = 0.18;

    function isLabelTarget(event) {
      const target = event && event.target;
      return Boolean(target && target.type === "tspan" && target.style && target.style.text);
    }

    function collectNames(node, names) {
      if (!node) {
        return;
      }

      if (node.name) {
        names.add(node.name);
      }

      (node.children || []).forEach(function (child) {
        collectNames(child, names);
      });
    }

    function getLabelElements() {
      return chart
        .getZr()
        .storage.getDisplayList()
        .filter(function (el) {
          return el.type === "tspan" && el.style && typeof el.style.text === "string" && el.style.text.trim();
        });
    }

    function setLabelOpacity(el, opacity) {
      if (typeof el.setStyle === "function") {
        el.setStyle("opacity", opacity);
      } else {
        el.style.opacity = opacity;
      }

      if (typeof el.dirtyStyle === "function") {
        el.dirtyStyle();
      } else if (typeof el.dirty === "function") {
        el.dirty();
      }
    }

    function refreshLabels() {
      chart.getZr().refresh();
    }

    function clearLabelFade() {
      clearTimeout(clearTimer);
      getLabelElements().forEach(function (el) {
        setLabelOpacity(el, normalOpacity);
      });
      refreshLabels();
    }

    function scheduleClearLabelFade() {
      clearTimeout(clearTimer);
      clearTimer = setTimeout(clearLabelFade, 0);
    }

    function applyLabelFade(data) {
      const visibleNames = new Set();
      collectNames(data, visibleNames);

      getLabelElements().forEach(function (el) {
        const opacity = visibleNames.has(el.style.text) ? normalOpacity : dimOpacity;
        setLabelOpacity(el, opacity);
      });

      refreshLabels();
    }

    chart.on("mouseover", { seriesType: "tree" }, function (params) {
      if (!isLabelTarget(params.event)) {
        scheduleClearLabelFade();
        return;
      }

      clearTimeout(clearTimer);
      applyLabelFade(params.data);
    });

    chart.on("mouseout", { seriesType: "tree" }, scheduleClearLabelFade);

    chart.on("click", { seriesType: "tree" }, function (params) {
      clearLabelFade();
      toggleNode(params.data);
      setTimeout(clearLabelFade, 0);
      setTimeout(clearLabelFade, 80);
      setTimeout(clearLabelFade, 760);
    });

    chart.getZr().on("mousemove", function (event) {
      if (!isLabelTarget(event)) {
        scheduleClearLabelFade();
      }
    });

    chart.getZr().on("globalout", clearLabelFade);
  }
})();
