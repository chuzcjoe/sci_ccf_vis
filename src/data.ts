// 代表性数据集 — 计算机 / 人工智能 期刊与会议
//
// 维护说明：
//   - 这是唯一需要持续更新的文件。直接改 `v`（IF / h5-index）、增删条目即可。
//   - `satisfies Dataset` 会在编辑时做类型校验：`v` 必须是数字、`field` 只能是
//     已定义的领域代码、必填字段不能漏。打错字会立刻报错，而不是等运行时页面坏掉。
//   - 新增领域：先到 types.ts 的 `Field` 里加代码，再到下面 FIELD_LABELS 加中文名。
//
// 注意：影响因子(IF)、h5-index、分区/等级均为近年(约 2023–2024)的代表性数值，
// 仅供可视化参考，可能与最新官方数据存在出入。
// 字段(field): AI=人工智能/机器学习, CV=计算机视觉, NLP=自然语言处理,
//              DM=数据挖掘/数据库, IP=图像处理, TH=理论/算法

import type { Dataset, Field } from "./types";

export const VENUE_DATA = {
  // ===================== SCI 视图（中科院分区 · 影响因子 IF）=====================
  sci: {
    metricKey: "IF",
    metricLabel: "影响因子",
    metricSub: "Journal Impact Factor",
    tiers: [
      {
        id: "q1",
        name: "一区",
        en: "Q1 · Top",
        items: [
          { name: "IEEE TPAMI", full: "IEEE Trans. on Pattern Analysis and Machine Intelligence", field: "AI", v: 20.8 },
          { name: "Nature Machine Intelligence", full: "Nature Machine Intelligence", field: "AI", v: 18.8 },
          { name: "Information Fusion", full: "Information Fusion", field: "AI", v: 14.7 },
          { name: "IEEE TEVC", full: "IEEE Trans. on Evolutionary Computation", field: "AI", v: 11.7 },
          { name: "IJCV", full: "International Journal of Computer Vision", field: "CV", v: 11.6 },
          { name: "IEEE TFS", full: "IEEE Trans. on Fuzzy Systems", field: "AI", v: 10.7 },
          { name: "Medical Image Analysis", full: "Medical Image Analysis", field: "IP", v: 10.7 },
          { name: "IEEE TIP", full: "IEEE Trans. on Image Processing", field: "IP", v: 10.6 },
          { name: "IEEE TNNLS", full: "IEEE Trans. on Neural Networks and Learning Systems", field: "AI", v: 10.2 },
          { name: "IEEE TCYB", full: "IEEE Trans. on Cybernetics", field: "AI", v: 9.4 },
          { name: "IEEE TKDE", full: "IEEE Trans. on Knowledge and Data Engineering", field: "DM", v: 8.9 },
          { name: "IEEE TMM", full: "IEEE Trans. on Multimedia", field: "IP", v: 8.4 },
        ],
      },
      {
        id: "q2",
        name: "二区",
        en: "Q2",
        items: [
          { name: "ACM TOG", full: "ACM Trans. on Graphics", field: "CV", v: 7.8 },
          { name: "Expert Systems with Applications", full: "Expert Systems with Applications", field: "AI", v: 7.5 },
          { name: "Pattern Recognition", full: "Pattern Recognition", field: "CV", v: 7.5 },
          { name: "Engineering Appl. of AI", full: "Engineering Applications of Artificial Intelligence", field: "AI", v: 7.5 },
          { name: "Knowledge-Based Systems", full: "Knowledge-Based Systems", field: "AI", v: 7.2 },
          { name: "Applied Soft Computing", full: "Applied Soft Computing", field: "AI", v: 7.2 },
          { name: "Information Sciences", full: "Information Sciences", field: "DM", v: 6.8 },
          { name: "Neural Networks", full: "Neural Networks", field: "AI", v: 6.0 },
          { name: "Neurocomputing", full: "Neurocomputing", field: "AI", v: 5.5 },
          { name: "Artificial Intelligence", full: "Artificial Intelligence", field: "AI", v: 5.1 },
        ],
      },
      {
        id: "q3",
        name: "三区",
        en: "Q3",
        items: [
          { name: "Machine Learning", full: "Machine Learning", field: "AI", v: 4.3 },
          { name: "Cognitive Computation", full: "Cognitive Computation", field: "AI", v: 4.3 },
          { name: "CVIU", full: "Computer Vision and Image Understanding", field: "CV", v: 4.3 },
          { name: "Image and Vision Computing", full: "Image and Vision Computing", field: "CV", v: 4.2 },
          { name: "Data Mining and Knowledge Disc.", full: "Data Mining and Knowledge Discovery", field: "DM", v: 4.0 },
          { name: "Pattern Recognition Letters", full: "Pattern Recognition Letters", field: "CV", v: 3.9 },
          { name: "Pattern Analysis and Appl.", full: "Pattern Analysis and Applications", field: "CV", v: 3.7 },
          { name: "The Visual Computer", full: "The Visual Computer", field: "CV", v: 3.5 },
        ],
      },
      {
        id: "q4",
        name: "四区",
        en: "Q4",
        items: [
          { name: "Applied Intelligence", full: "Applied Intelligence", field: "AI", v: 3.4 },
          { name: "Soft Computing", full: "Soft Computing", field: "AI", v: 3.1 },
          { name: "Multimedia Tools and Appl.", full: "Multimedia Tools and Applications", field: "IP", v: 3.0 },
          { name: "Neural Processing Letters", full: "Neural Processing Letters", field: "AI", v: 2.6 },
          { name: "JVCIR", full: "J. of Visual Communication and Image Representation", field: "IP", v: 2.6 },
          { name: "IET Image Processing", full: "IET Image Processing", field: "IP", v: 2.0 },
          { name: "J. of Electronic Imaging", full: "Journal of Electronic Imaging", field: "IP", v: 1.0 },
          { name: "IJPRAI", full: "Int. J. of Pattern Recognition and Artificial Intelligence", field: "TH", v: 1.0 },
        ],
      },
    ],
  },

  // ===================== CCF 视图（推荐目录等级 · h5-index）=====================
  ccf: {
    metricKey: "h5",
    metricLabel: "h5-index",
    metricSub: "Google Scholar 五年影响力指标",
    tiers: [
      {
        id: "a",
        name: "CCF-A",
        en: "A 类 · 顶级",
        items: [
          { name: "CVPR", full: "IEEE/CVF Conf. on Computer Vision and Pattern Recognition", field: "CV", v: 440 },
          { name: "NeurIPS", full: "Conf. on Neural Information Processing Systems", field: "AI", v: 337 },
          { name: "ICML", full: "Int. Conf. on Machine Learning", field: "AI", v: 268 },
          { name: "ICCV", full: "IEEE/CVF Int. Conf. on Computer Vision", field: "CV", v: 239 },
          { name: "IEEE TPAMI", full: "IEEE Trans. on Pattern Analysis and Machine Intelligence", field: "AI", v: 231 },
          { name: "AAAI", full: "AAAI Conf. on Artificial Intelligence", field: "AI", v: 197 },
          { name: "ACL", full: "Annual Meeting of the Assoc. for Computational Linguistics", field: "NLP", v: 191 },
          { name: "KDD", full: "ACM SIGKDD Conf. on Knowledge Discovery and Data Mining", field: "DM", v: 142 },
          { name: "IJCAI", full: "Int. Joint Conf. on Artificial Intelligence", field: "AI", v: 135 },
          { name: "IJCV", full: "International Journal of Computer Vision", field: "CV", v: 130 },
          { name: "JMLR", full: "Journal of Machine Learning Research", field: "AI", v: 110 },
        ],
      },
      {
        id: "b",
        name: "CCF-B",
        en: "B 类 · 知名",
        items: [
          { name: "ECCV", full: "European Conf. on Computer Vision", field: "CV", v: 213 },
          { name: "EMNLP", full: "Conf. on Empirical Methods in Natural Language Processing", field: "NLP", v: 165 },
          { name: "ICRA", full: "IEEE Int. Conf. on Robotics and Automation", field: "AI", v: 151 },
          { name: "IEEE TIP", full: "IEEE Trans. on Image Processing", field: "IP", v: 148 },
          { name: "NAACL", full: "Conf. of the North American Chapter of the ACL", field: "NLP", v: 132 },
          { name: "Pattern Recognition", full: "Pattern Recognition", field: "CV", v: 130 },
          { name: "IEEE TNNLS", full: "IEEE Trans. on Neural Networks and Learning Systems", field: "AI", v: 120 },
          { name: "IEEE TKDE", full: "IEEE Trans. on Knowledge and Data Engineering", field: "DM", v: 110 },
          { name: "CIKM", full: "ACM Int. Conf. on Information and Knowledge Management", field: "DM", v: 90 },
          { name: "Neural Networks", full: "Neural Networks", field: "AI", v: 95 },
          { name: "ICDM", full: "IEEE Int. Conf. on Data Mining", field: "DM", v: 70 },
        ],
      },
      {
        id: "c",
        name: "CCF-C",
        en: "C 类 · 入选",
        items: [
          { name: "ICASSP", full: "IEEE Int. Conf. on Acoustics, Speech and Signal Processing", field: "IP", v: 130 },
          { name: "Neurocomputing", full: "Neurocomputing", field: "AI", v: 110 },
          { name: "Knowledge-Based Systems", full: "Knowledge-Based Systems", field: "AI", v: 110 },
          { name: "Applied Soft Computing", full: "Applied Soft Computing", field: "AI", v: 95 },
          { name: "Pattern Recognition Letters", full: "Pattern Recognition Letters", field: "CV", v: 85 },
          { name: "IJCNN", full: "Int. Joint Conf. on Neural Networks", field: "AI", v: 70 },
          { name: "ICPR", full: "Int. Conf. on Pattern Recognition", field: "CV", v: 60 },
          { name: "BMVC", full: "British Machine Vision Conference", field: "CV", v: 55 },
          { name: "ACCV", full: "Asian Conference on Computer Vision", field: "CV", v: 45 },
          { name: "The Visual Computer", full: "The Visual Computer", field: "CV", v: 45 },
          { name: "PRICAI", full: "Pacific Rim Int. Conf. on Artificial Intelligence", field: "AI", v: 25 },
        ],
      },
    ],
  },
} satisfies Dataset;

/** 领域代码 → 中文名，用于领域标签的 tooltip。新增领域时同步更新这里和 types.ts。 */
export const FIELD_LABELS: Record<Field, string> = {
  AI: "人工智能/机器学习",
  CV: "计算机视觉",
  NLP: "自然语言处理",
  DM: "数据挖掘/数据库",
  IP: "图像处理",
  TH: "理论/算法",
};
