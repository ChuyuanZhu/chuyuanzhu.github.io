# Development Log

## 2026-11-13

### Completed
- Installed Node.js and npm
- Created Astro project
- Fixed npm installation timeout
- Successfully launched local website
- Customized homepage
- Built shared navigation and layout

### Problems Encountered
- Astro dependencies failed to install initially
- npm install appeared to hang
- Resolved with verbose npm installation

### Current Status
Homepage and navigation work locally.
Other navigation pages are not yet created.

### Next Session
1. Create Technical page
2. Create Creative page
3. Create About page

### Notes
Local URL: http://localhost:4321/
Project folder: ~/Documents/chuyuanzhu.github.io


# Development Log — 2026-11-13

## Project: Chuyuan Zhu Personal Website

**Status: Foundation completed · Website deployed**

### 1. Project Goals

建立一个长期维护的个人网站，替代已经过期的 Squarespace 建筑作品集。

网站定位为 Personal Website & Portfolio，逐步收录技术项目、建筑设计、绘画、手工创作及未来的个人项目。

核心要求：

- 免费使用 GitHub Pages，不需要付费服务器或域名。
- Technical 和 Creative 作品分开展示。
- 使用可复用组件，避免重复编写页面。
- 使用 Markdown 管理作品数据。
- 每件作品自动生成展示卡片和独立详情页。
- 支持随时增加新项目和栏目。
- 通过 Git 管理历史版本。
- 通过 GitHub Actions 自动部署网站。

### 2. Technology Stack

- Astro 7.4.11
- Node.js 26.13.1
- npm 11.20.0
- HTML / CSS / JavaScript / TypeScript
- Markdown + Astro Content Collections
- Git + GitHub
- GitHub Actions + GitHub Pages
- VS Code on macOS

### 3. Important Locations

**Local project**

`~/Documents/chuyuanzhu.github.io`

**GitHub repository**

https://github.com/ChuyuanZhu/chuyuanzhu.github.io

**Live website**

https://chuyuanzhu.github.io/

**Local development**

http://localhost:4321/

### 4. Completed — Website Foundation

- [x] Created public GitHub repository.
- [x] Installed Node.js, npm, and Astro.
- [x] Created Astro starter project.
- [x] Configured local development environment.
- [x] Created Home page.
- [x] Created Technical page.
- [x] Created Creative page.
- [x] Created About page.
- [x] Created shared navigation and footer.
- [x] Created reusable PortfolioPage component.
- [x] Created reusable ProjectCard component.
- [x] Built responsive project grid.
- [x] Created Markdown content collection.
- [x] Added Wine Picker demo project.
- [x] Added Architecture Study demo project.
- [x] Enabled automatic project categorization.
- [x] Created dynamic project detail pages.
- [x] Made project cards clickable.
- [x] Tested navigation between list and detail pages.

### 5. Completed — GitHub & Deployment

- [x] Initialized local Git repository.
- [x] Configured Git author identity with GitHub noreply email.
- [x] Enabled GitHub email privacy settings.
- [x] Created initial Git Commit.
- [x] Connected remote repository.
- [x] Successfully pushed project to GitHub.
- [x] Configured Astro site URL.
- [x] Created `.github/workflows/deploy.yml`.
- [x] Successfully ran `npm run build`.
- [x] Configured GitHub Pages with GitHub Actions.
- [x] Successfully deployed website.
- [x] Confirmed website is publicly accessible.

**Latest deployed commit:** `6773ec5`

**Build output:** 6 static pages.

### 6. Current Website Structure

**Home — /**

Basic introduction with name and creative/technical interests. This is currently a placeholder homepage.

**Technical — /technical/**

Automatically displays projects categorized as `technical`.

Current demo: Wine Picker.

**Creative — /creative/**

Automatically displays projects categorized as `creative`.

Current demo: Architecture Study.

**About — /about/**

Basic introduction and placeholder contact section.

**Project detail pages**

- `/technical/wine-picker/`
- `/creative/architecture-study/`

Pages are automatically generated from Markdown files.

### 7. Important Files

- `src/layouts/Layout.astro` — Global navigation, layout, footer, and styles.
- `src/components/PortfolioPage.astro` — Shared portfolio section layout.
- `src/components/ProjectCard.astro` — Reusable project card.
- `src/content.config.ts` — Project data schema.
- `src/content/projects/` — Project Markdown files.
- `src/pages/index.astro` — Homepage.
- `src/pages/technical/index.astro` — Technical listing.
- `src/pages/creative/index.astro` — Creative listing.
- `src/pages/about/index.astro` — About page.
- `src/pages/[section]/[id].astro` — Dynamic project details.
- `astro.config.mjs` — Astro configuration and site URL.
- `.github/workflows/deploy.yml` — Automatic deployment.
- `ROADMAP.md` — Development plan.
- `DEVLOG.md` — Development history.

### 8. Issues Encountered & Solutions

**npm Installation Timeout**

Initial dependencies installation failed due to a timeout.

Resolved by retrying npm installation with verbose logging and explicit timeout settings.

**Content Collection Returned Zero Projects**

The Technical page initially displayed `Projects found: 0`.

Resolved by restarting the Astro development server after creating the content configuration.

**GitHub Connection Failure**

Git Push initially failed with port 443 connection errors and LibreSSL SSL_ERROR_SYSCALL.

Successful command:

`git -c http.proxy=http://127.0.0.1:7890 -c http.version=HTTP/1.1 push`

Note: Clash Verge proxy port is 7890. The connection can be intermittent, so retrying may help.

**GitHub Pages Build Failure**

The initial GitHub Pages build attempted to use Jekyll instead of Astro.

Resolved by selecting GitHub Actions as the Pages source and adding an Astro-specific deployment workflow.

The latest deployment completed successfully.

### 9. Current Limitations

- Homepage is still a basic placeholder.
- No Featured Projects section yet.
- Project cover images have not been added.
- Existing Markdown projects contain demonstration content.
- Original Squarespace architecture projects have not been imported.
- Portfolio visual design is still preliminary.
- About page needs finalized content and contact links.
- Some starter or experimental components may be unused and can be reviewed later.
- Astro's original README has not yet been replaced with a project-specific README.

### 10. Next Development Phase — Homepage & Portfolio Design

**Immediate next task: Build a proper homepage featuring selected projects.**

Suggested development order:

1. Redesign homepage layout and introduction.
2. Automatically display projects where `featured: true`.
3. Reuse existing ProjectCard components on homepage.
4. Decide visual identity: typography, colors, spacing, and creative direction.
5. Add actual images for Wine Picker and architecture projects.
6. Replace demo project content with real project descriptions.
7. Test responsive layout on desktop and mobile.
8. Update About page and external links.
9. Review unused starter components and remove unnecessary files.
10. Continue incremental Git commits and automatic deployment.

### 11. Long-Term Expansion

- Restore architecture portfolio from Squarespace.
- Add additional creative categories: illustration, painting, woodworking, leathercraft, 3D design.
- Add technical projects: Wine Picker, What to Eat?, Digital Playground, data analysis, and automation projects.
- Consider category filters and project search if the portfolio grows.
- Optionally add Notes or other sections.
- Consider a custom domain in the future, but retain free GitHub Pages hosting.

### 12. How to Resume Development

Open VS Code and the project folder:

`~/Documents/chuyuanzhu.github.io`

Start local development:

`npm run dev`

Open:

http://localhost:4321/

After making changes:

`git add .`

`git commit -m "Describe your update"`

`git -c http.proxy=http://127.0.0.1:7890 -c http.version=HTTP/1.1 push`

GitHub Actions automatically builds and deploys the updated website.

**Next session starting point:** Homepage redesign and Featured Projects display.

**Overall status:** Core website infrastructure, portfolio content system, GitHub integration, and automatic deployment are operational.