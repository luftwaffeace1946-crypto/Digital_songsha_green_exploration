(function () {
  const DEV_TYPES = {
    project: { label: "项目总节点", shortLabel: "项目", color: "#2ee6b7" },
    newDev: { label: "绿色勘查综合实训操作台", shortLabel: "实训操作台", color: "#35baff" },
    retrofit: { label: "微型钻探终端交互", shortLabel: "微型钻探终端", color: "#ff9d2e" },
    physical: { label: "线下实物或工具包", shortLabel: "线下实物", color: "#2ee6b7" },
    content: { label: "内容资源", shortLabel: "内容资源", color: "#b78cff" },
    platform: { label: "平台集成", shortLabel: "平台集成", color: "#24d6ff" },
    reuse: { label: "内容资源", shortLabel: "内容资源", color: "#b78cff" }
  };

  const FILTER_GROUPS = {
    greenSystem: ["newDev", "retrofit", "content", "platform"]
  };

  function walk(node, visitor, parent = null, depth = 0, path = []) {
    const currentPath = path.concat(node.id);
    visitor(node, parent, depth, currentPath);
    (node.children || []).forEach((child) => walk(child, visitor, node, depth + 1, currentPath));
  }

  function createIndex(root) {
    const nodes = new Map();
    const parents = new Map();
    const depths = new Map();
    const paths = new Map();
    const children = new Map();

    walk(root, (node, parent, depth, path) => {
      nodes.set(node.id, node);
      parents.set(node.id, parent ? parent.id : null);
      depths.set(node.id, depth);
      paths.set(node.id, path);
      children.set(node.id, (node.children || []).map((item) => item.id));
    });

    return { root, nodes, parents, depths, paths, children };
  }

  function getAncestorIds(index, id) {
    const path = index.paths.get(id) || [];
    return path.slice(0, -1);
  }

  function getPathNames(index, id) {
    const path = index.paths.get(id) || [];
    return path.map((pathId) => index.nodes.get(pathId)?.name).filter(Boolean);
  }

  function getDescendantIds(node) {
    const ids = [];
    (node.children || []).forEach((child) => {
      ids.push(child.id);
      ids.push(...getDescendantIds(child));
    });
    return ids;
  }

  function getNeighborhood(index, id) {
    const node = index.nodes.get(id);
    if (!node) return new Set();

    const ids = new Set([id]);
    getAncestorIds(index, id).forEach((ancestorId) => ids.add(ancestorId));
    (index.children.get(id) || []).forEach((childId) => ids.add(childId));
    (node.relatedIds || []).forEach((relatedId) => ids.add(relatedId));
    return ids;
  }

  function getExpandedPathIds(index, ids) {
    const expanded = new Set();
    ids.forEach((id) => getAncestorIds(index, id).forEach((ancestorId) => expanded.add(ancestorId)));
    return expanded;
  }

  function normalizeText(value) {
    return String(value || "").toLocaleLowerCase("zh-CN");
  }

  function search(index, query) {
    const q = normalizeText(query).trim();
    if (!q) return [];

    const results = [];
    index.nodes.forEach((node) => {
      const haystack = [
        node.name,
        node.stage,
        node.summary,
        node.detail,
        ...(node.tags || []),
        ...(node.outputs || [])
      ]
        .map(normalizeText)
        .join(" ");
      if (haystack.includes(q)) results.push(node);
    });

    return results;
  }

  function countLeaves(node) {
    if (!node.children || node.children.length === 0) return 1;
    return node.children.reduce((sum, child) => sum + countLeaves(child), 0);
  }

  function maxDepth(node, depth = 0) {
    if (!node.children || node.children.length === 0) return depth;
    return Math.max(...node.children.map((child) => maxDepth(child, depth + 1)));
  }

  function createDisplayTree(root, index, state) {
    const activeIds = state.activeId ? getNeighborhood(index, state.activeId) : new Set();
    const searchIds = new Set(state.searchResultIds || []);
    const expandedIds = state.expandedIds || new Set();
    const collapsedIds = state.collapsedIds || new Set();
    const relatedIds = state.activeId ? new Set(index.nodes.get(state.activeId)?.relatedIds || []) : new Set();
    const pathIds = state.activeId ? new Set(index.paths.get(state.activeId) || []) : new Set();
    const selectedFilters =
      state.filters && typeof state.filters.has === "function" ? state.filters : new Set(state.filter && state.filter !== "all" ? [state.filter] : ["all"]);
    const filterTypes = new Set();
    selectedFilters.forEach((filter) => {
      (FILTER_GROUPS[filter] || [filter]).forEach((devType) => filterTypes.add(devType));
    });
    const hasSearchFocus = searchIds.size > 0;
    const hasFilterFocus = !selectedFilters.has("all") && selectedFilters.size > 0;
    const hasPersistentFocus = hasSearchFocus || hasFilterFocus;

    function cloneNode(node, depth) {
      const children = node.children || [];
      const hasChildren = children.length > 0;
      const dev = DEV_TYPES[node.devType] || DEV_TYPES.content;
      const matchesFilter = !hasFilterFocus || filterTypes.has(node.devType);
      const matchesSearch = searchIds.has(node.id);
      const isActive = activeIds.has(node.id);
      const isPath = pathIds.has(node.id);
      const isRelated = relatedIds.has(node.id);
      let collapsed = false;

      if (collapsedIds.has(node.id)) {
        collapsed = true;
      } else if (state.collapseMode === "stages" && depth >= 1) {
        collapsed = !expandedIds.has(node.id);
      } else if (state.collapseMode === "default" && depth >= 1 && !expandedIds.has(node.id)) {
        collapsed = true;
      }

      if (expandedIds.has(node.id)) collapsed = false;

      let opacity = 1;
      if (hasFilterFocus && !matchesFilter) opacity = 0.46;
      if (hasSearchFocus && !(matchesSearch || isPath || isRelated)) opacity = Math.min(opacity, 0.48);

      const borderColor = matchesSearch ? "#ff9d2e" : isPath ? "#2ee6b7" : isRelated ? "#35baff" : dev.color;
      const borderWidth = matchesSearch || isPath || isRelated ? 2.2 : 1.4;

      const cloned = {
        ...node,
        hasChildren,
        collapsed,
        itemStyle: {
          color: dev.color,
          borderColor,
          borderWidth,
          opacity
        },
        lineStyle: {
          color: isPath ? "#ff9d2e" : "rgba(143, 215, 255, 0.42)",
          width: isPath ? 2.2 : 1.2,
          opacity: hasPersistentFocus ? Math.max(opacity, isPath ? 1 : 0.52) : 0.78
        },
        label: {
          color: opacity < 0.6 ? "rgba(234, 242, 255, 0.48)" : "#eaf2ff",
          fontWeight: isActive || matchesSearch ? 700 : 500
        },
        symbolSize: isActive || matchesSearch ? 10 : 8
      };
      delete cloned.children;

      if (hasChildren && !collapsed) {
        cloned.children = children.map((child) => cloneNode(child, depth + 1));
      }

      if (hasChildren && collapsed) {
        cloned.label = {
          ...cloned.label,
          position: "left",
          verticalAlign: "middle",
          align: "right"
        };
      }

      return cloned;
    }

    return cloneNode(root, 0);
  }

  function downloadDataUrl(dataUrl, filename) {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  window.GreenTreeUtils = {
    DEV_TYPES,
    FILTER_GROUPS,
    walk,
    createIndex,
    getAncestorIds,
    getPathNames,
    getDescendantIds,
    getNeighborhood,
    getExpandedPathIds,
    search,
    countLeaves,
    maxDepth,
    createDisplayTree,
    downloadDataUrl
  };
})();
