# 期刊会议影响力图谱 · SCI Impact Atlas

> [English](./README.md) | 简体中文

一个学术数据报告风格的单页可视化：在 **SCI 分区**（一~四区 · 影响因子 IF）与 **CCF 等级**（A/B/C · h5-index）之间切换，把每个期刊 / 会议用水平柱状条按分级排列展示。

技术栈：**TypeScript + React + Vite**。

## 开发

```bash
npm install
npm run dev      # 本地开发，热更新
npm run build    # 类型检查 + 生产构建到 dist/
npm run preview  # 预览构建产物
```

## 更新数据（你最常做的事）

所有期刊 / 会议数据集中在 **`src/data.ts`**。直接改 `v`（IF / h5-index）、增删条目即可：

```ts
{ name: "CVPR", full: "IEEE/CVF Conf. on ...", field: "CV", v: 440 },
```

- `v` 是影响力数值：SCI 视图为影响因子 IF（保留一位小数），CCF 视图为 h5-index（整数）。
- `field` 只能是已定义的领域代码（`AI/CV/NLP/DM/IP/TH`）。
- 文件末尾 `satisfies Dataset` 会在你编辑时做**类型校验**——数值写成字符串、领域代码拼错、漏字段，都会立刻在编辑器里报错，而不是等运行时页面坏掉。
- **新增一个领域**：先到 `src/types.ts` 的 `Field` 联合类型里加代码，再到 `src/data.ts` 的 `FIELD_LABELS` 加对应中文名——TypeScript 会提示所有需要补充的地方。

## 调整外观

样式与展示配置：

- `src/styles.css` — 全部视觉样式（从设计原型 1:1 移植）。
- `src/config.ts` — 配色主题、横条基准（全局统一 / 各区独立）、默认排序方向、是否显示全称 / 领域标签。这些原本是设计工具里的「Tweaks」面板，现已固化为常量。

## 目录结构

```
src/
  main.tsx              入口
  App.tsx               页面装配 + 视图/排序/动画状态
  types.ts              数据模型（Dataset / Tier / VenueItem / Field ...）
  data.ts               ★ 数据集（持续更新这里）
  config.ts             配色与展示默认值
  utils.ts              数值格式化
  styles.css            样式
  components/
    Masthead.tsx        标题 + SCI/CCF 切换
    MetaBar.tsx         指标说明 + 计数 + 排序按钮
    CcfNote.tsx         CCF 视图的指标说明
    TierSection.tsx     单个分级（标题 + 行）
    BarRow.tsx          单条柱状条
    Colophon.tsx        页脚图例 + 免责声明
    SortIcon.tsx        排序图标
```

## 数据说明

数据为约 2023–2024 年的代表性数值，仅供示意，可能与最新官方数据存在出入。**两个视图的数值不可直接横向比较**：SCI 用期刊影响因子，CCF 以会议为主、采用 h5-index。原始设计原型保留在 `design_pkg/`（已 gitignore）。
