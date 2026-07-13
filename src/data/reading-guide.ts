// 全站阅读体验数据源：主线顺序 + 每页导读。
// - `spine`：按首页「生产交付主线」定义的线性阅读顺序，驱动页面底部「上一章 / 下一章」。
// - `guides`：每页导读卡内容（适合谁读 / 读完能做什么），由 MainLayout 统一注入。
// 维护约定：新增主线页面时，把它插入 spine 的正确阶段，并在 guides 补一条导读。

export interface SpineEntry {
  path: string;
  label: string;
  stage: string;
}

export interface GuideEntry {
  audience: string;
  outcome: string;
}

// 生产交付主线（与首页 pipeline 七阶段一致）
export const spine: SpineEntry[] = [
  // 01 判断与边界
  { path: '/research/landscape', label: '行业全景图', stage: '判断与边界' },
  { path: '/research/ai-boundaries', label: 'AI 能力边界', stage: '判断与边界' },
  { path: '/research/vibe-vs-spec', label: 'Vibe vs Spec 辩论', stage: '判断与边界' },
  { path: '/research/hard-data', label: '硬数据与事故', stage: '判断与边界' },
  // 02 Spec 工程化
  { path: '/handbook/why', label: '为什么需要这套流程', stage: 'Spec 工程化' },
  { path: '/handbook/workflow', label: '6 步工作流', stage: 'Spec 工程化' },
  { path: '/handbook/spec-format', label: 'Spec 字段规范', stage: 'Spec 工程化' },
  { path: '/handbook/clarification', label: '澄清循环', stage: 'Spec 工程化' },
  { path: '/handbook/lint-protocol', label: 'AI Lint 协议', stage: 'Spec 工程化' },
  { path: '/handbook/spec-to-code', label: '从 Spec 到代码', stage: 'Spec 工程化' },
  { path: '/handbook/context-engineering', label: '上下文工程（工具实践）', stage: 'Spec 工程化' },
  // 03 协作与分工
  { path: '/handbook/contract-first', label: '契约优先分工', stage: '协作与分工' },
  { path: '/handbook/constitution', label: 'Constitution 模式', stage: '协作与分工' },
  { path: '/handbook/team-roles', label: '团队角色与协作', stage: '协作与分工' },
  { path: '/handbook/why-spec-driven-dev', label: 'Spec-Driven-Dev 定位', stage: '协作与分工' },
  // 04 场景执行
  { path: '/handbook/first-task-sop', label: '第一单 SOP', stage: '场景执行' },
  { path: '/handbook/unfamiliar-codebase', label: '陌生代码库协作', stage: '场景执行' },
  { path: '/handbook/parallel-sessions', label: '多 AI 会话并行', stage: '场景执行' },
  { path: '/handbook/async-nightly', label: '夜间异步执行', stage: '场景执行' },
  // 05 质量门与验收
  { path: '/handbook/quality-gate', label: '质量门工具', stage: '质量门与验收' },
  { path: '/handbook/anti-patterns', label: '反模式与失败模式', stage: '质量门与验收' },
  { path: '/handbook/lessons', label: '项目交付教训', stage: '质量门与验收' },
  // 06 发布与运维
  { path: '/handbook/docs-sync-strategy', label: '文档同步策略', stage: '发布与运维' },
  { path: '/handbook/release-rollback', label: '发布与回滚预案', stage: '发布与运维' },
  { path: '/handbook/incident-postmortem', label: '事故复盘与 AI 协作', stage: '发布与运维' },
  // 07 组织推广
  { path: '/strategy/pilot-playbook', label: '试点负责人 Playbook', stage: '组织推广' },
  { path: '/strategy/pilot-lessons', label: '试点复盘案例', stage: '组织推广' },
  { path: '/handbook/full-stack-team-model', label: '全员全栈团队模式', stage: '组织推广' },
  { path: '/research/transformation', label: '团队转型路线图', stage: '组织推广' },
];

// 每页导读：适合谁读 / 读完能做什么
export const guides: Record<string, GuideEntry> = {
  '/research/landscape': {
    audience: '第一次系统了解 AI 辅助开发现状的人',
    outcome: '建立对趋势、能力和风险的整体判断，知道后面该关注什么',
  },
  '/research/ai-boundaries': {
    audience: '想搞清楚「哪些该交给 AI、哪些不该」的工程师和负责人',
    outcome: '得到一份 AI 能力与失效边界的判断依据，减少盲目托管',
  },
  '/research/vibe-vs-spec': {
    audience: '在「凭感觉写」和「按规范写」之间摇摆的团队',
    outcome: '学会按场景区分 Vibe 与 Spec，而不是二选一站队',
  },
  '/research/hard-data': {
    audience: '需要用数据和真实事故说服自己或团队的人',
    outcome: '掌握可引用的量化信号与事故教训，理解风险的真实量级',
  },
  '/handbook/why': {
    audience: '准备把 AI 引入生产级开发流程的团队',
    outcome: '理解为什么必须有 Spec、上下文和质量门这套流程',
  },
  '/handbook/workflow': {
    audience: '想要一套可落地操作步骤的执行者',
    outcome: '掌握从需求到交付的 6 步工作流骨架',
  },
  '/handbook/spec-format': {
    audience: '要把模糊需求写成可验证 Spec 的人',
    outcome: '会用字段规范写出机器可消费、可验收的 Spec',
  },
  '/handbook/clarification': {
    audience: '经常被 AI「自由发挥」坑到的执行者',
    outcome: '掌握澄清循环，把需求缺口在写代码前补齐',
  },
  '/handbook/lint-protocol': {
    audience: '想让 AI 输出先自检再交付的工程师',
    outcome: '会用 AI Lint 协议在生成阶段拦截低质量产出',
  },
  '/handbook/spec-to-code': {
    audience: '拿到冻结 Spec、准备驱动 AI 写代码的人',
    outcome: '学会把 Spec 切片成可独立测试、可独立回滚的实现单元',
  },
  '/handbook/context-engineering': {
    audience: '想提升 AI 代码质量却卡在 prompt 的人',
    outcome: '学会用 AGENTS.md、Repo Map、MCP 等手段供给正确上下文',
  },
  '/handbook/contract-first': {
    audience: '面对跨系统、长程或高风险任务的团队',
    outcome: '掌握契约优先的人机分工，把边界显式固定下来',
  },
  '/handbook/constitution': {
    audience: '希望给 AI 协作定长期规则的负责人',
    outcome: '学会用 Constitution 模式约束 AI 的默认行为',
  },
  '/handbook/team-roles': {
    audience: '要在团队里划分 AI 协作职责的负责人',
    outcome: '明确 PM / Spec Author / Engineer / Reviewer 的边界与红线',
  },
  '/handbook/why-spec-driven-dev': {
    audience: '在评估 Spec-Driven 方法定位的技术决策者',
    outcome: '理解它解决什么问题、适用与不适用的边界',
  },
  '/handbook/first-task-sop': {
    audience: '团队刚引入 AI、要跑第一个任务的负责人',
    outcome: '拿到一套选任务、准备、执行、验收的标准流程',
  },
  '/handbook/unfamiliar-codebase': {
    audience: '要在陌生或遗留代码库里引入 AI 的人',
    outcome: '掌握「先建心智地图、再引入 AI」的三阶段协作法',
  },
  '/handbook/parallel-sessions': {
    audience: '想同时驱动多个 AI 会话提效的执行者',
    outcome: '学会并行任务的拆分、隔离与冲突规避',
  },
  '/handbook/async-nightly': {
    audience: '想利用夜间异步执行长任务的团队',
    outcome: '掌握异步任务的下发、监控与次日验收纪律',
  },
  '/handbook/quality-gate': {
    audience: '负责交付质量把关的 Reviewer 和负责人',
    outcome: '搭起 AI 时代不缩水的质量门与预警信号体系',
  },
  '/handbook/anti-patterns': {
    audience: '想提前规避常见翻车方式的所有人',
    outcome: '识别典型反模式与失败模式，并拿到防范动作',
  },
  '/handbook/lessons': {
    audience: '想从真实项目复盘中吸取教训的团队',
    outcome: '把单个生产级项目的风险与原则内化为自己的检查项',
  },
  '/handbook/docs-sync-strategy': {
    audience: '被文档与实现漂移困扰的团队',
    outcome: '建立分层文档 + 同 PR 同步的一致性纪律',
  },
  '/handbook/release-rollback': {
    audience: '负责把 AI 辅助变更推上线的执行者和 Release Manager',
    outcome: '拿到发布就绪定义、发布 Checklist 与可执行回滚预案',
  },
  '/handbook/incident-postmortem': {
    audience: '需要处理生产事故并做复盘的团队',
    outcome: '掌握事故响应四阶段与 AI 辅助复盘的正确边界',
  },
  '/strategy/pilot-playbook': {
    audience: '要在团队里牵头 AI 试点的负责人',
    outcome: '拿到从立项到评估的试点操作手册',
  },
  '/strategy/pilot-lessons': {
    audience: '想避免试点推广翻车的组织者',
    outcome: '从复盘案例中提炼可复用的推广决策',
  },
  '/handbook/full-stack-team-model': {
    audience: '在评估「全员全栈 + AI」组织模式的管理者',
    outcome: '理解能力要求、转型路径与落地前提',
  },
  '/research/transformation': {
    audience: '规划团队整体 AI 转型的决策者',
    outcome: '得到一张从试点到规模化的转型路线图',
  },
};

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export function getGuide(pathname: string): GuideEntry | undefined {
  return guides[normalize(pathname)];
}

export function getNeighbors(pathname: string): {
  prev?: SpineEntry;
  next?: SpineEntry;
  current?: SpineEntry;
} {
  const p = normalize(pathname);
  const idx = spine.findIndex((e) => e.path === p);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? spine[idx - 1] : undefined,
    next: idx < spine.length - 1 ? spine[idx + 1] : undefined,
    current: spine[idx],
  };
}
