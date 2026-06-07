// 代表性数据集 — 计算机 / 人工智能 期刊与会议
//
// 数据时点与来源（2026-06-06 更新）：
//   - SCI 影响因子 = 2024 JCR（2025 年 6 月发布，基于 2024 年引用数据），逐刊核实自
//     BioxBio（https://www.bioxbio.com/journal/<SLUG>，镜像 Clarivate JCR）。
//   - CCF h5-index = 2025 Google Scholar Metrics（2025 年 7 月更新），取自各学科
//     top-venues 榜单（scholar.google.com/citations?view_op=top_venues）。
//   - 标注 [估算] 的少数条目低于 Scholar Metrics 公开榜单（前 20）阈值，无法取得权威
//     2025 h5，沿用旧值，建议手动核实后替换。
//   - url = 官网地址：期刊用出版商刊物主页（IEEE Xplore / Springer / Elsevier
//     ScienceDirect / Wiley / SPIE / World Scientific / ACM DL / Nature）；会议用
//     主办机构的会议系列页（年度站点每年更换，故用系列页以保持稳定）。
//   两个视图的数值不可横向比较（IF vs h5-index）。
//
// 维护说明：
//   - 直接改 `v`、`url`、增删条目即可。结尾 `satisfies Dataset` 会在编辑时做类型校验：
//     `v` 必须是数字、`field` 只能是已定义的领域代码、必填字段不能漏。
//   - 新增领域：先到 types.ts 的 `Field` 里加代码，再到下面 FIELD_LABELS 加中文名。
//
// 字段(field): AI=人工智能/机器学习, CV=计算机视觉, NLP=自然语言处理,
//              DM=数据挖掘/数据库, IP=图像处理, TH=理论/算法

import type { Dataset, Field } from "./types";

export const VENUE_DATA = {
  // ===================== SCI 视图（中科院分区 · 影响因子 IF）=====================
  // IF 为 2024 JCR（2025 年发布）。分区沿用既有划分，未随 IF 重新分区。
  sci: {
    metricKey: "IF",
    metricLabel: "影响因子",
    metricSub: "Journal Impact Factor · 2024 JCR",
    tiers: [
      {
        id: "q1",
        name: "一区",
        en: "Q1 · Top",
        items: [
          // Nature MI 无 BioxBio 页，2024 JIF 交叉核实自 wos-journal.info + resurchify
          { name: "Nature Machine Intelligence", full: "Nature Machine Intelligence", field: "AI", v: 23.9, url: "https://www.nature.com/natmachintell/" },
          { name: "IEEE TPAMI", full: "IEEE Trans. on Pattern Analysis and Machine Intelligence", field: "AI", v: 18.6, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34" },
          { name: "Information Fusion", full: "Information Fusion", field: "AI", v: 15.5, url: "https://www.sciencedirect.com/journal/information-fusion" },
          { name: "IEEE TIP", full: "IEEE Trans. on Image Processing", field: "IP", v: 13.7, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=83" },
          { name: "IEEE TEVC", full: "IEEE Trans. on Evolutionary Computation", field: "AI", v: 12.0, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4235" },
          { name: "IEEE TFS", full: "IEEE Trans. on Fuzzy Systems", field: "AI", v: 11.9, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=91" },
          { name: "Medical Image Analysis", full: "Medical Image Analysis", field: "IP", v: 11.8, url: "https://www.sciencedirect.com/journal/medical-image-analysis" },
          { name: "IEEE TCYB", full: "IEEE Trans. on Cybernetics", field: "AI", v: 10.5, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6221036" },
          { name: "IEEE TKDE", full: "IEEE Trans. on Knowledge and Data Engineering", field: "DM", v: 10.4, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=69" },
          { name: "IEEE TMM", full: "IEEE Trans. on Multimedia", field: "IP", v: 9.7, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6046" },
          { name: "IJCV", full: "International Journal of Computer Vision", field: "CV", v: 9.3, url: "https://link.springer.com/journal/11263" },
          { name: "IEEE TNNLS", full: "IEEE Trans. on Neural Networks and Learning Systems", field: "AI", v: 8.9, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385" },
        ],
      },
      {
        id: "q2",
        name: "二区",
        en: "Q2",
        items: [
          { name: "ACM TOG", full: "ACM Trans. on Graphics", field: "CV", v: 9.5, url: "https://dl.acm.org/journal/tog" },
          { name: "Engineering Appl. of AI", full: "Engineering Applications of Artificial Intelligence", field: "AI", v: 8.0, url: "https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence" },
          { name: "Pattern Recognition", full: "Pattern Recognition", field: "CV", v: 7.6, url: "https://www.sciencedirect.com/journal/pattern-recognition" },
          { name: "Knowledge-Based Systems", full: "Knowledge-Based Systems", field: "AI", v: 7.6, url: "https://www.sciencedirect.com/journal/knowledge-based-systems" },
          { name: "Expert Systems with Applications", full: "Expert Systems with Applications", field: "AI", v: 7.5, url: "https://www.sciencedirect.com/journal/expert-systems-with-applications" },
          { name: "Information Sciences", full: "Information Sciences", field: "DM", v: 6.8, url: "https://www.sciencedirect.com/journal/information-sciences" },
          { name: "Applied Soft Computing", full: "Applied Soft Computing", field: "AI", v: 6.6, url: "https://www.sciencedirect.com/journal/applied-soft-computing" },
          { name: "Neurocomputing", full: "Neurocomputing", field: "AI", v: 6.5, url: "https://www.sciencedirect.com/journal/neurocomputing" },
          { name: "Neural Networks", full: "Neural Networks", field: "AI", v: 6.3, url: "https://www.sciencedirect.com/journal/neural-networks" },
          { name: "Artificial Intelligence", full: "Artificial Intelligence", field: "AI", v: 4.6, url: "https://www.sciencedirect.com/journal/artificial-intelligence" },
        ],
      },
      {
        id: "q3",
        name: "三区",
        en: "Q3",
        items: [
          { name: "Cognitive Computation", full: "Cognitive Computation", field: "AI", v: 4.3, url: "https://link.springer.com/journal/12559" },
          { name: "Data Mining and Knowledge Disc.", full: "Data Mining and Knowledge Discovery", field: "DM", v: 4.3, url: "https://link.springer.com/journal/10618" },
          { name: "Image and Vision Computing", full: "Image and Vision Computing", field: "CV", v: 4.2, url: "https://www.sciencedirect.com/journal/image-and-vision-computing" },
          { name: "CVIU", full: "Computer Vision and Image Understanding", field: "CV", v: 3.5, url: "https://www.sciencedirect.com/journal/computer-vision-and-image-understanding" },
          { name: "Pattern Recognition Letters", full: "Pattern Recognition Letters", field: "CV", v: 3.3, url: "https://www.sciencedirect.com/journal/pattern-recognition-letters" },
          { name: "Machine Learning", full: "Machine Learning", field: "AI", v: 2.9, url: "https://link.springer.com/journal/10994" },
          { name: "The Visual Computer", full: "The Visual Computer", field: "CV", v: 2.9, url: "https://link.springer.com/journal/371" },
          { name: "Pattern Analysis and Appl.", full: "Pattern Analysis and Applications", field: "CV", v: 2.0, url: "https://link.springer.com/journal/10044" },
        ],
      },
      {
        id: "q4",
        name: "四区",
        en: "Q4",
        // 注：Multimedia Tools and Applications 已被 Web of Science 核心合集剔除
        // (discontinued)，无 2024 JCR 影响因子，故从 SCI 视图移除。
        items: [
          { name: "Applied Intelligence", full: "Applied Intelligence", field: "AI", v: 3.5, url: "https://link.springer.com/journal/10489" },
          { name: "JVCIR", full: "J. of Visual Communication and Image Representation", field: "IP", v: 3.1, url: "https://www.sciencedirect.com/journal/journal-of-visual-communication-and-image-representation" },
          { name: "Neural Processing Letters", full: "Neural Processing Letters", field: "AI", v: 2.8, url: "https://link.springer.com/journal/11063" },
          { name: "Soft Computing", full: "Soft Computing", field: "AI", v: 2.5, url: "https://link.springer.com/journal/500" },
          { name: "IET Image Processing", full: "IET Image Processing", field: "IP", v: 2.2, url: "https://ietresearch.onlinelibrary.wiley.com/journal/17519667" },
          { name: "IJPRAI", full: "Int. J. of Pattern Recognition and Artificial Intelligence", field: "TH", v: 1.1, url: "https://www.worldscientific.com/worldscinet/ijprai" },
          { name: "J. of Electronic Imaging", full: "Journal of Electronic Imaging", field: "IP", v: 1.0, url: "https://www.spiedigitallibrary.org/journals/journal-of-electronic-imaging" },
        ],
      },
    ],
  },

  // ===================== CCF 视图（推荐目录等级 · h5-index）=====================
  // h5-index 为 2025 Google Scholar Metrics。
  ccf: {
    metricKey: "h5",
    metricLabel: "h5-index",
    metricSub: "Google Scholar Metrics 2025",
    tiers: [
      {
        id: "a",
        name: "CCF-A",
        en: "A 类 · 顶级",
        items: [
          { name: "CVPR", full: "IEEE/CVF Conf. on Computer Vision and Pattern Recognition", field: "CV", v: 450, url: "https://cvpr.thecvf.com/" },
          { name: "NeurIPS", full: "Conf. on Neural Information Processing Systems", field: "AI", v: 371, url: "https://neurips.cc/" },
          { name: "ICML", full: "Int. Conf. on Machine Learning", field: "AI", v: 272, url: "https://icml.cc/" },
          { name: "ICCV", full: "IEEE/CVF Int. Conf. on Computer Vision", field: "CV", v: 256, url: "https://iccv.thecvf.com/" },
          { name: "ACL", full: "Annual Meeting of the Assoc. for Computational Linguistics", field: "NLP", v: 236, url: "https://www.aclweb.org/" },
          { name: "AAAI", full: "AAAI Conf. on Artificial Intelligence", field: "AI", v: 232, url: "https://aaai.org/conference/aaai/" },
          { name: "IEEE TPAMI", full: "IEEE Trans. on Pattern Analysis and Machine Intelligence", field: "AI", v: 217, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34" },
          { name: "IJCAI", full: "Int. Joint Conf. on Artificial Intelligence", field: "AI", v: 136, url: "https://www.ijcai.org/" },
          { name: "JMLR", full: "Journal of Machine Learning Research", field: "AI", v: 130, url: "https://www.jmlr.org/" },
          { name: "KDD", full: "ACM SIGKDD Conf. on Knowledge Discovery and Data Mining", field: "DM", v: 124, url: "https://www.kdd.org/" },
          { name: "IJCV", full: "International Journal of Computer Vision", field: "CV", v: 109, url: "https://link.springer.com/journal/11263" },
        ],
      },
      {
        id: "b",
        name: "CCF-B",
        en: "B 类 · 知名",
        items: [
          { name: "ECCV", full: "European Conf. on Computer Vision", field: "CV", v: 262, url: "https://eccv.ecva.net/" },
          { name: "EMNLP", full: "Conf. on Empirical Methods in Natural Language Processing", field: "NLP", v: 218, url: "https://aclanthology.org/venues/emnlp/" },
          { name: "IEEE TIP", full: "IEEE Trans. on Image Processing", field: "IP", v: 165, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=83" },
          { name: "IEEE TNNLS", full: "IEEE Trans. on Neural Networks and Learning Systems", field: "AI", v: 165, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385" },
          { name: "ICRA", full: "IEEE Int. Conf. on Robotics and Automation", field: "AI", v: 129, url: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra/" },
          { name: "IEEE TKDE", full: "IEEE Trans. on Knowledge and Data Engineering", field: "DM", v: 126, url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=69" },
          { name: "NAACL", full: "Conf. of the North American Chapter of the ACL", field: "NLP", v: 126, url: "https://naacl.org/" },
          { name: "Pattern Recognition", full: "Pattern Recognition", field: "CV", v: 126, url: "https://www.sciencedirect.com/journal/pattern-recognition" },
          { name: "Neural Networks", full: "Neural Networks", field: "AI", v: 106, url: "https://www.sciencedirect.com/journal/neural-networks" },
          { name: "CIKM", full: "ACM Int. Conf. on Information and Knowledge Management", field: "DM", v: 96, url: "https://www.cikmconference.org/" },
          { name: "ICDM", full: "IEEE Int. Conf. on Data Mining", field: "DM", v: 49, url: "https://ieeexplore.ieee.org/xpl/conhome/1000179/all-proceedings" },
        ],
      },
      {
        id: "c",
        name: "CCF-C",
        en: "C 类 · 入选",
        items: [
          { name: "Neurocomputing", full: "Neurocomputing", field: "AI", v: 148, url: "https://www.sciencedirect.com/journal/neurocomputing" },
          { name: "Applied Soft Computing", full: "Applied Soft Computing", field: "AI", v: 144, url: "https://www.sciencedirect.com/journal/applied-soft-computing" },
          { name: "Knowledge-Based Systems", full: "Knowledge-Based Systems", field: "AI", v: 141, url: "https://www.sciencedirect.com/journal/knowledge-based-systems" },
          { name: "ICASSP", full: "IEEE Int. Conf. on Acoustics, Speech and Signal Processing", field: "IP", v: 137, url: "https://ieeeicassp.org/" },
          { name: "Pattern Recognition Letters", full: "Pattern Recognition Letters", field: "CV", v: 92, url: "https://www.sciencedirect.com/journal/pattern-recognition-letters" },
          { name: "IJCNN", full: "Int. Joint Conf. on Neural Networks", field: "AI", v: 70, url: "https://www.ijcnn.org/" }, // [估算] 低于 Scholar 公开榜单阈值，沿用旧值，待核实
          { name: "ICPR", full: "Int. Conf. on Pattern Recognition", field: "CV", v: 68, url: "https://iapr.org/conferences/international-conference-on-pattern-recognition/" },
          { name: "BMVC", full: "British Machine Vision Conference", field: "CV", v: 57, url: "https://www.bmva.org/bmvc" },
          { name: "ACCV", full: "Asian Conference on Computer Vision", field: "CV", v: 52, url: "https://link.springer.com/conference/accv" },
          { name: "The Visual Computer", full: "The Visual Computer", field: "CV", v: 45, url: "https://link.springer.com/journal/371" }, // [估算] 同上
          { name: "PRICAI", full: "Pacific Rim Int. Conf. on Artificial Intelligence", field: "AI", v: 25, url: "https://www.pricai.org/" }, // [估算] 同上
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
