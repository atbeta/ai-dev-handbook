# AI Dev Handbook

AI Dev Handbook 是一份面向生产级软件开发的 AI 辅助工程化指南。它不把 AI 编码当作单点工具推荐，而是把它放进完整的软件交付系统里：需求如何写清楚、上下文如何供给、代码如何生成、质量如何把关、团队如何试点和持续改进。

站点当前采用 Astro 构建，内容以中文为主，目标读者包括正在使用 Cursor、Claude Code、Copilot、Codex CLI 等工具的工程师、技术负责人和工程管理者。

## 主线

这个项目用一条闭环主线串起所有内容：

```text
行业判断 -> 工程方法 -> 执行场景 -> 工具体系 -> 组织推广 -> 持续追踪
```

这条主线对应读者从“为什么要改变开发流程”到“如何在团队里长期跑起来”的完整路径。

1. **行业判断**：理解 AI 辅助开发从代码补全走向 Coding Agent 后，真正的瓶颈已经从模型能力转向工程流程、人机分工和质量控制。
2. **工程方法**：用 Spec 工程化、澄清循环、AI Lint、质量门和契约优先协作，把 AI 输出约束在可审计、可测试、可维护的范围里。
3. **执行场景**：覆盖第一单、陌生代码库、多会话并行、夜间异步执行、文档同步等真实使用场景。
4. **工具体系**：按 Context Engineering、AI Coding、Quality Gate、Engineering Efficiency 四层组织工具，而不是堆工具清单。
5. **组织推广**：从小范围试点开始，用数据识别有效场景、失败模式和推广条件，并逐步映射到成熟软件工程流程。
6. **持续追踪**：跟踪业界工具、方法论、事故、指标和大厂实践，把新内容有序纳入现有框架。

核心观点是：

> AI 是放大器，不是工程师。放大清晰的工程过程会提高质量，放大模糊的流程只会更快地产生返工。Spec、上下文和质量门，是 AI 辅助生产级开发的三根主梁。

## 内容地图

```text
src/pages/
  index.astro              # 首页：项目定位、核心洞察、角色阅读路径
  about.astro              # 项目说明
  research/                # 行业判断：趋势、数据、生态、边界、案例
  handbook/                # 工程方法与执行场景：SOP、Spec、Lint、工具、协作纪律
  strategy/                # 组织推广：试点负责人、试点经验
  templates/               # 可复制模板：Spec、契约、Checklist、Prompt、度量
```

推荐阅读路径：

- **第一次了解项目**：`/research/landscape` -> `/handbook/why` -> `/handbook/workflow` -> `/templates/spec`
- **工程师落地**：`/handbook/ai-as-amplifier` -> `/handbook/first-task-sop` -> `/handbook/spec-format` -> `/handbook/lint-protocol`
- **技术负责人选型**：`/research/agent-ecosystem` -> `/handbook/tool-stack` -> `/handbook/context-engineering` -> `/handbook/quality-gate`
- **团队试点推广**：`/strategy/pilot-playbook` -> `/research/hard-data` -> `/handbook/team-roles` -> `/templates/metrics`
- **复杂项目协作**：`/handbook/unfamiliar-codebase` -> `/handbook/parallel-sessions` -> `/handbook/async-nightly` -> `/handbook/docs-sync-strategy`

## 长期专题

后续内容优先围绕一个长期专题展开：**大厂成熟软件开发流程的 AI 辅助落地**。

这个专题关注的不是“某个工具怎么用”，而是 AI 如何嵌入成熟工程组织已经存在的流程：

- 需求与立项：PRD、RFC、ADR、Spec、需求评审如何被 AI 辅助但不被 AI 代替。
- 设计与拆解：架构评审、接口契约、任务切片、风险识别如何变成可审计过程。
- 开发与协作：代码生成、结对、跨团队依赖、陌生代码库接手如何设置边界。
- 测试与质量：测试生成、变更影响分析、AI code review、安全扫描如何进入质量门。
- 发布与运维：发布说明、回滚预案、事故复盘、文档同步如何通过 AI 降低遗漏。
- 组织与治理：试点、培训、工具准入、成本控制、合规和度量如何形成持续机制。

新增这类内容时，应优先回答：“这个实践在成熟工程流程中的哪一环？AI 增强了什么？人类仍然必须负责什么？质量门在哪里？”

## 新增内容原则

新增内容必须先回答三个问题：

1. **它服务哪一段主线？** 行业判断、工程方法、执行场景、工具体系、组织推广或持续追踪。
2. **它解决什么读者问题？** 避免只记录观点，优先沉淀可复用的判断框架、流程、模板或案例。
3. **它和现有页面是什么关系？** 新页面、补充现有页面、替换过时内容，还是进入观察名单。

内容默认放置规则：

- 新趋势、工具生态、行业数据、事故案例放在 `src/pages/research/`。
- 可执行 SOP、协作纪律、质量门、上下文工程实践放在 `src/pages/handbook/`。
- 团队试点、推广、培训、管理决策放在 `src/pages/strategy/`。
- 可复制文本、Checklist、Prompt、度量表放在 `src/pages/templates/`。

当前 `src/pages/research/transformation.astro` 保留在 research 下，作为组织推广相关的路线图调研入口；如果未来组织推广内容继续增多，再考虑迁移或新增 strategy 索引页。

每个新增页面都应该有明确的下一步链接或相关章节，避免成为孤岛。

准确性降级规则：

- 有明确公开来源、时间和样本口径的数据，才写成行业事实。
- 暂时缺少来源的数字，写成“团队经验值”“观察信号”或“待团队校准阈值”。
- 厂商报告和自报 benchmark 要标注利益相关和评测口径，避免当成中立结论。
- 工具状态、模型能力和协议采用度变化很快，默认加时间语境，不写永久判断。

## 持续追踪机制

AI 编程工具和方法论变化很快，本项目采用“框架稳定、工具滚动更新”的维护方式。

- **每月 review**：检查工具状态、厂商 changelog、社区热点、重大事故和关键指标是否过时。
- **每季度大更新**：重新审视工具分层、阅读路径、首页洞察和研究页面结论。
- **重大事件即时更新**：安全事故、工具停更、平台能力突变、行业共识变化，应优先更新对应 research 页面，再同步到 handbook 或 templates。

工具状态建议使用统一语义：

- `主流`：已有广泛采用，可作为默认推荐或团队标配候选。
- `新兴`：值得 PoC，但不宜直接大规模推广。
- `观察`：方向值得关注，证据不足。
- `下滑`：被替代、维护放缓或使用风险上升。
- `弃用`：不再推荐，除非为了历史背景或迁移说明保留。

## 本地开发

```bash
npm install
npm run dev
npm run build
npm run preview
```

常用命令：

- `npm run dev`：启动 Astro 本地开发服务器。
- `npm run build`：构建静态站点，用于提交前验证。
- `npm run preview`：预览构建产物。

## 维护边界

这个项目不是：

- AI 编码工具榜单。
- Prompt 片段合集。
- 只追求速度的 vibe coding 教程。
- 不区分场景的“AI 替代工程师”宣传页。

这个项目要长期维护的是一套生产级 AI 辅助开发的工程框架：它允许工具更替，但要求主线、证据、流程和质量标准保持清晰。
