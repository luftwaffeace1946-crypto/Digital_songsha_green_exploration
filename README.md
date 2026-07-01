# 绿色勘查实训室建设图谱

## 两个入口

本图谱采用 ECharts From Left to Right Tree 左到右树形图，视觉参考 ECharts tree-basic 示例。根节点位于最左侧，七个建设环节位于第二列，各模块和任务向右逐级展开。

1. `index.html`

   极简树图展示版，视觉和交互参考 Apache ECharts tree-basic 示例。默认只显示根节点和七个环节，悬停使用 ECharts 原生 tooltip 和 emphasis，点击节点展开或折叠。该页面无右侧说明框、无搜索筛选、无自定义 hover 重绘，适合甲方快速查看整体结构。

2. `index-full.html`

   完整功能版，保留搜索、筛选、说明面板、关联节点和完整内容查看。

   完整功能版采用“三段式固定布局”：顶部操作区；中部左侧树图 + 右侧节点说明；底部开发属性筛选按钮。右侧说明框和底部筛选框都通过 CSS Grid 占位，不覆盖主树图。

   开发属性筛选按钮内置颜色点，并支持复选筛选，包括：全部、实训操作台、微型钻探终端、绿色勘查系统、线下实物、内容资源、平台集成。其中“绿色勘查系统”为组合筛选，覆盖实训操作台、微型钻探终端、内容资源和平台集成。

中文入口 `绿色勘查实训室建设图谱.html` 与 `index.html` 使用同一套极简展示逻辑，便于本地直接打开演示。

## Word 方案使用规则

Word 方案原件只作为本地只读资料来源，不上传到 GitHub，不进入 GitHub Pages 发布内容，也不在页面提供下载链接。

当前新版正式稿为本地私有资料，仅用于内容审阅和数据更新，不作为仓库文件或页面资源发布。

项目 `.gitignore` 已排除 `*.doc`、`*.docx`、`*.docm`、`*.dotx`、`*.wps` 以及 `docs/` 下的 Word/WPS 文件，防止误提交。

## 本地打开方式

直接双击：

`index.html`

或：

`绿色勘查实训室建设图谱.html`

也可以在项目目录执行：

```bash
python3 -m http.server 8080
```

然后访问：

`http://localhost:8080`

## GitHub Pages 发布方式

1. 将“树形图”文件夹作为 GitHub 仓库根目录。
2. 推送到 GitHub。
3. 打开仓库 `Settings → Pages`。
4. Source 选择 `main` 分支和 `/root`。
5. 保存后使用 GitHub Pages 生成的访问链接。

## 数据维护方式

主要数据在：

`data/treeData.js`

主展示页只读取 `window.GREEN_TREE_DATA`，并把第二层七个环节设置为默认折叠。节点字段包括：

```js
{
  id: "唯一ID",
  name: "图中短标签",
  devType: "project | newDev | retrofit | physical | content | platform | reuse",
  stage: "所属环节",
  summary: "节点简要说明",
  outputs: ["成果文件1", "成果文件2"],
  children: []
}
```

## ECharts 本地文件

当前项目已放置：

`vendor/echarts.min.js`

主展示页加载：

```html
<script src="vendor/echarts.min.js"></script>
<script src="data/treeData.js"></script>
<script src="assets/js/tree-basic-page.js"></script>
```

完整功能版加载：

```html
<script src="vendor/echarts.min.js"></script>
<script src="data/treeData.js"></script>
<script src="assets/js/tree-utils.js"></script>
<script src="assets/js/panel.js"></script>
<script src="assets/js/app.js"></script>
```

## 文件结构

```text
树形图/
├── index.html
├── index-full.html
├── 绿色勘查实训室建设图谱.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── tree-basic.css
│   └── js/
│       ├── app.js
│       ├── app-full.js
│       ├── panel.js
│       ├── tree-basic-page.js
│       └── tree-utils.js
├── data/
│   └── treeData.js
├── docs/
│   └── 本地资料目录（Word/WPS 原件不发布）
└── vendor/
    └── echarts.min.js
```
