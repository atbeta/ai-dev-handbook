# AGENTS.md

本仓库是中文 Astro 静态站，沉淀 AI 辅助生产级开发方法论。

**AGENTS.md 只放 agent 执行必须的纪律**。项目定位、主线六段、内容分类、写作规则、持续追踪机制、维护边界、推荐阅读路径等全部在 `README.md`，不要在此复制。

## 技术栈

- Astro 5.6+（见 `package.json` 锁版本）、Node 20+、npm
- 部署：Vercel（`vercel.json`），所有 push 都会 build，master push 部署到 production
- 无后端、无数据库

## 命令

- `npm run dev`：本地开发服务器
- `npm run build`：构建静态站；**会生成 `.astro/types.d.ts`，提交前应恢复**
- `npm run preview`：预览构建产物

提交或交付前必跑 `npm run build`。如果只是改 Markdown 文案但没装依赖，commit message 里说明未跑构建的原因。

## 目录职责

- `src/pages/research/`：行业判断、研究、案例、工具生态、数据和风险
- `src/pages/handbook/`：可执行方法、SOP、协作纪律、工程实践和具体场景
- `src/pages/strategy/`：团队试点、组织推广、管理视角和落地路线
- `src/pages/templates/`：可复制模板、Checklist、Prompt、度量表和流程卡片
- `src/components/Sidebar.astro`：全站侧边栏；新增页面通常要同步改
- `src/layouts/MainLayout.astro`：全站布局、导航、主题和基础样式

**新页面应优先挂现有主线，新增分类、URL 迁移、长期专题演进规则 → 读 `README.md#新增内容原则`**，不要在此复制。

## Do

- 复用现有 `MainLayout` + `Sidebar` 结构（Astro frontmatter 模板见 README）
- 先给判断框架，再给工具或案例；不要把页面写成工具清单
- 涉及数字、报告、厂商能力时标注时间语境；缺来源的降级为"团队经验值"或"观察信号"
- 改动 Sidebar / 布局后，跑 `npm run build` 确认没破坏
- 修改导航时同步检查 `Sidebar.astro` 的分组、当前路径和阅读顺序

## Don't

- **不要主动 `git commit` / `git push`**；等用户明确要求
- **不要修改 `.astro/types.d.ts`**（build 产物）
- **不要为分类洁癖移动现有 URL**（特别是 `src/pages/research/transformation.astro`，它在 research 下是有意保留的）
- **不要引入新内容分类**，除非 `research/handbook/strategy/templates` 明显承载不下
- **不要把阶段事实包装成永久事实**（工具状态、厂商能力、协议采用度）
- **不要为了新增内容大规模重写现有页面**；优先做局部补充和结构化链接
- **不要把内容整理任务扩展成 UI 重构**；发现 bug 可以顺手修，但守住范围

## Git

- 主分支：`master`（master push 部署到 production）
- 提交风格：以 conventional commits 为主（`feat:`、`fix:`、`docs:`、`chore:` 等），版本号或简单 `feat:` 也常见
- 不主动 commit/push；按用户指令操作

## 用户偏好

- 回复中文
- 工程手册语气，避免口语化表达（「踩坑」「搞定」「调教」「不熟项目+AI实战」等）
- 站点文案保持正式，不要情绪化或营销化

## 何时读 README / 子文档

- 修改内容结构、新增分类、动首页 → 读 `README.md#主线` + `#新增内容原则`
- 改工具状态、调整长期专题 → 读 `README.md#持续追踪机制`
- 改 Sidebar / 布局 → 直接看 `src/components/Sidebar.astro` 现有模式
- 写新页面 → 读 `README.md` 里给的 Astro 模板 + 当前目录下其他 `.astro` 页面
