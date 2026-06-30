(function () {
  const utils = window.GreenTreeUtils;
  const DEV_TYPES = utils.DEV_TYPES;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderList(items, emptyText) {
    if (!items || items.length === 0) return `<p>${escapeHtml(emptyText)}</p>`;
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderSourceList(sources) {
    const visibleSources = sources || [];
    if (visibleSources.length === 0) return "<p>暂无外部来源链接。</p>";
    return `<ul class="source-list">${visibleSources
      .map((source) => {
        const title = escapeHtml(source.title || source.url);
        const url = escapeHtml(source.url || "#");
        return `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></li>`;
      })
      .join("")}</ul>`;
  }

  function renderTagList(tags) {
    if (!tags || tags.length === 0) return "—";
    return tags.map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("");
  }

  function renderNode(panel, node, index, options = {}) {
    if (!node) {
      renderEmpty(panel);
      return;
    }

    const dev = DEV_TYPES[node.devType] || DEV_TYPES.content;
    const parentId = index.parents.get(node.id);
    const parentPath = utils.getPathNames(index, node.id).join(" → ");
    const children = (node.children || []).map((child) => child.name);
    const related = (node.relatedIds || [])
      .map((id) => index.nodes.get(id))
      .filter(Boolean)
      .map((item) => `${item.stage || "项目"} → ${item.name}`);

    const lockText = options.locked ? "已锁定节点" : "节点说明";

    panel.innerHTML = `
      <button id="closePanelBtn" class="panel-close" type="button" aria-label="关闭说明">×</button>
      <div class="panel-eyebrow">
        <span class="status-dot" style="background:${dev.color}"></span>
        <span>${escapeHtml(lockText)}</span>
      </div>
      <h2>${escapeHtml(node.name)}</h2>
      <p class="summary">${escapeHtml(node.summary || node.detail || "")}</p>

      <dl class="meta-grid">
        <dt>所属环节</dt>
        <dd>${escapeHtml(node.stage || "项目总览")}</dd>
        <dt>开发属性</dt>
        <dd><span class="dev-pill" style="background:${dev.color}">${escapeHtml(dev.shortLabel)}</span></dd>
        <dt>上级来源</dt>
        <dd>${escapeHtml(parentId ? parentPath : "项目总节点")}</dd>
        <dt>下级支撑</dt>
        <dd>${children.length ? escapeHtml(children.join("、")) : "无下级节点"}</dd>
        <dt>关键词</dt>
        <dd>${renderTagList(node.tags)}</dd>
      </dl>

      <section class="panel-section">
        <h3>建设说明</h3>
        <p>${escapeHtml(node.detail || node.summary || "待补充。")}</p>
      </section>

      <section class="panel-section">
        <h3>关联节点</h3>
        ${renderList(related, "暂无跨环节关联节点。")}
      </section>

      <section class="panel-section">
        <h3>成果文件</h3>
        ${renderList(node.outputs || [], "无单独成果文件。")}
      </section>

      <section class="panel-section">
        <h3>来源链接</h3>
        ${renderSourceList(node.sources || [])}
      </section>
    `;
  }

  function renderEmpty(panel) {
    panel.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>绿色勘查实训室建设项目</h2>
          <p class="summary">点击树图节点，查看所属环节、开发属性、建设说明、成果文件与关联关系。</p>
        </div>
      </div>
    `;
  }

  function renderSearchResults(panel, results, index, onSelect) {
    if (panel.classList.contains("search-results")) {
      renderSearchResultsOnly(panel, results, index, onSelect);
      return;
    }

    const resultHtml = results.length
      ? `<div class="result-list">${results
          .slice(0, 18)
          .map((node) => {
            const dev = DEV_TYPES[node.devType] || DEV_TYPES.content;
            return `<button class="result-pill" type="button" data-node-id="${escapeHtml(node.id)}" style="box-shadow: inset 4px 0 0 ${dev.color}">${escapeHtml(node.stage || "项目")} → ${escapeHtml(node.name)}</button>`;
          })
          .join("")}</div>`
      : "<p>没有找到匹配节点。</p>";

    const current = panel.innerHTML;
    const section = `
      <section class="panel-section" id="searchResultsSection">
        <h3>搜索结果</h3>
        ${resultHtml}
      </section>
    `;

    const oldSection = panel.querySelector("#searchResultsSection");
    if (oldSection) {
      oldSection.outerHTML = section;
    } else {
      panel.innerHTML = current + section;
    }

    panel.querySelectorAll("[data-node-id]").forEach((button) => {
      button.addEventListener("click", () => onSelect(button.dataset.nodeId));
    });
  }

  function renderSearchResultsOnly(container, results, index, onSelect) {
    if (!results || results.length === 0) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = `
      <h3>搜索结果</h3>
      <div class="result-list">${results
        .slice(0, 18)
        .map((node) => {
          const dev = DEV_TYPES[node.devType] || DEV_TYPES.content;
          return `<button class="result-pill" type="button" data-node-id="${escapeHtml(node.id)}" style="box-shadow: inset 4px 0 0 ${dev.color}">${escapeHtml(node.stage || "项目")} → ${escapeHtml(node.name)}</button>`;
        })
        .join("")}</div>
    `;

    container.querySelectorAll("[data-node-id]").forEach((button) => {
      button.addEventListener("click", () => onSelect(button.dataset.nodeId));
    });
  }

  window.GreenPanel = {
    renderNode,
    renderEmpty,
    renderSearchResults,
    renderSearchResultsOnly
  };
})();
