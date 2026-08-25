# v1.2.0 更新指南 — Cursor 3.13 截图遗漏词条补全

根据 Settings 实机截图，补全大版本更新后仍为英文的界面文案。

## 新增 / 修正覆盖

| 区域 | 补全内容 |
|------|----------|
| 侧栏 | Git & PRs、Browser & Network |
| 套餐与用量 | Adjust Plan、Other Models、用量重置模板、% used、Pro+ Plan |
| 智能体 | Allowlist Options、Terminal and Editing、Auto-Review、LSP 全套 |
| 工作树 | Max Worktrees / Max Total Size / Cursor-Managed（Title Case） |
| 模型 | Task Models、Explore Subagent Model、Add or search model、View All Models、API Keys |
| Git & PRs | Branches、Branch Prefix |
| 规则技能 | Include Third-Party Plugins...、Show all (N more) |
| 索引 | Ignore Files 描述（requires restarting 新文案） |

## 未纳入（非 Cursor UI）

- 用户 Rules / Skills 列表正文（来自本地配置，非安装包文案）
- 模型品牌名（Composer、Opus、GPT 等）
- 价格数字（$60/mo 等服务端动态文案）

## 应用步骤

```bash
cd ~/Projects/cursor-i18n-zh
# 1. Cmd+Q 完全退出 Cursor
node index.js localize
# 2. 重启 Cursor 检查 Settings 各页
```

## 改动文件

- `src/dict-settings-pages.js`
- `src/settings-nav.js`
- `src/tricky.js`
- `scripts/audit.js`
- `index.js` / `package.json` → **1.2.0**
