# Project Guidelines & Workflow Rules

Whenever working on this project (`NextPaper-dev.github.io` / `nextpaper.dev`), always strictly adhere to the following workflow:

## 1. Always Pull First
Before inspecting issues, modifying code, or starting any task:
```bash
git pull --rebase origin main
```
Ensure your local branch is strictly up-to-date with remote before making any changes.

## 2. Always Run Checks & Test Suite
After making changes and before committing:
```bash
# 1. Typecheck Astro components and TypeScript
npm run check

# 2. Run the automated test suite (file size limits, asset integrity, build validation)
npm test

# 3. Verify static production build
npm run build
```
Do not proceed to push if any check or test fails. All checks must pass.

## 3. Always Commit and Push to Main
Every time work is completed on this project:
1. Stage modified files (`git add ...`).
2. Create a concise, conventional commit message (`git commit -m "..."`).
3. Push changes immediately to `origin main`:
```bash
git push origin main
```
This triggers the automatic GitHub Pages deployment pipeline via GitHub Actions.

## 4. Maximum File Size Rule
**No single code file in `src/` (Astro, TypeScript, React JSX, CSS) may exceed 500 lines of code.**

Whenever a component or page grows near or beyond 500 lines:
- Break it down into cohesive, single-responsibility subcomponents or helper modules.
- Extract utility functions, mock benchmarks, and simulators into dedicated files under `src/lib/` or `src/utils/`.
- Extract data, configuration, and text strings into centralized files.
- Keep components focused, clean, and maintainable.

## 5. Technology Stack & Identity
- **Framework**: Astro 5 (Static Site Generation with Island Architecture)
- **UI Components**: React 19 JSX / TSX
- **Styling**: Tailwind CSS with custom NextPaper dark mode palette
- **Flagship Showcase**: StoresDZ multi-tenant platform (Go 1.22 core + Rust Liquid engine + Funnel SDK)
- **Deployment URL**: `https://nextpaper-dev.github.io/` (served from root `/`)
