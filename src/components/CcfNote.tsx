export function CcfNote() {
  return (
    <p className="note">
      <b>关于指标：</b>CCF 推荐目录以学术<b>会议</b>为主，而会议没有“影响因子(IF)”。
      因此此视图采用学术界通用的 <b>h5-index</b>(Google Scholar 近五年影响力)作为横条度量；
      SCI 视图则使用期刊真实的 Impact Factor。两个视图的数值不可直接横向比较。
    </p>
  );
}
