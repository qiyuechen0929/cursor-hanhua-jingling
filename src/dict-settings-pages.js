/**
 * Settings 页面补全字典（Cursor 3.10+ / 3.13+）
 * ①账号 ②外观 ③套餐与用量 ④智能体 ⑤工作树 ⑥工具与MCP ⑦钩子
 * ⑧Git与PR ⑨模型 ⑩规则技能 ⑪索引（v1.2.0 截图补全）
 */
const settingsPagesDict = {
  // ── ① 账号 Profile ──
  'Create your public profile': '创建你的公开资料',
  'Create Profile': '创建资料',
  'Public profile': '公开资料',
  'Public Profile': '公开资料',
  'Claim handle': '认领用户名',
  'Claim your handle': '认领你的用户名',
  'Claim a handle to get a profile page showing your token, model, and agent usage.':
    '认领用户名以获取资料页，展示你的 Token、模型和智能体用量。',
  'Claim a handle before making your profile public.':
    '公开资料前请先认领用户名。',
  'Claim a handle and add your first and last name before making your profile public.':
    '公开资料前请先认领用户名并填写姓名。',
  'A public profile for how you build. Showing your token, model, and agent usage.':
    '展示你构建方式的公开资料，显示 Token、模型和智能体用量。',
  'Add links people should see on your Cursor profile.':
    '添加希望展示在 Cursor 资料上的链接。',
  'Profile picture URL (optional)': '头像 URL（可选）',
  'Change profile photo': '更换头像',
  'Sign in to view and edit your profile.': '登录以查看和编辑你的资料。',
  Public: '公开',

  // ── ② 外观 Appearance（补全）──
  Motion: '动效',
  'Reduce Motion': '减少动效',
  'Minimize interface animations. System follows your OS preference.':
    '减少界面动画。跟随系统时将遵循操作系统偏好。',
  'Hide Email Address': '隐藏邮箱地址',
  'Partially mask your email address in the Cursor user interface.':
    '在 Cursor 界面中部分隐藏你的邮箱地址。',

  // ── ③ 套餐与用量 Plan & Usage ──
  'Current Plan': '当前套餐',
  'Upgrade Available': '可升级',
  'Adjust Plan': '调整套餐',
  'Included in Pro+': 'Pro+ 包含',
  'Included in Pro': 'Pro 包含',
  'Included in Ultra': 'Ultra 包含',
  Total: '总计',
  'Auto + Composer': '自动 + Composer',
  'Other Models': '其他模型',
  'Consumed by named models.': '由具名模型消耗。',
  API: 'API',
  'On-Demand Usage': '按需用量',
  'On-Demand Spending': '按需消费',
  'On-demand spending is currently disabled': '按需消费当前已禁用',
  'Monthly Limit': '每月上限',
  'Set a fixed amount or make it unlimited.': '设置固定额度或设为无限制。',
  'Get maximum value with 20x usage limits and early access to advanced features.':
    '获得 20 倍用量额度和高级功能抢先体验，实现最大价值。',
  'Your plan includes at least $70 of API usage.':
    '你的套餐至少包含 $70 的 API 用量。',
  'Your plan includes at least $400 of API usage.':
    '你的套餐至少包含 $400 的 API 用量。',
  'Additional usage consumes API quota.': '超出部分将消耗 API 额度。',
  'Additional usage beyond limits consumes on-demand spend.':
    '超出限制的额外用量将计入按需消费。',
  'Additional usage beyond limits consumes API quota or on-demand spend.':
    '超出限制的额外用量将消耗 API 额度或按需消费。',
  'Additional usage beyond limits consumes Other Models quota or on-demand spend.':
    '超出限制的额外用量将消耗其他模型额度或按需消费。',
  'your included total usage': '你的包含总用量',
  'your included API usage': '你的包含 API 用量',
  'Pro+ Plan': 'Pro+ 套餐',
  'Pro+ Trial': 'Pro+ 试用',
  'Pro Trial': 'Pro 试用',
  'Start Plan': 'Start 套餐',
  'Resets on ': '重置于 ',
  ' days)': ' 天）',
  Unlimited: '无限制',
  Disabled: '已禁用',
  Enabled: '已启用',

  // ── ④ 智能体 Agents（补全）──
  'Code Block Word Wrap': '代码块自动换行',
  'Wrap long lines in Agent chat code blocks.': '在智能体聊天代码块中自动换行长行。',
  Tips: '提示',
  'Show rotating tips on the empty screen.': '在空白界面显示轮播提示。',
  'Open Agents Window on Startup': '启动时打开智能体窗口',
  'Open the Agents Window by default when Cursor launches.':
    'Cursor 启动时默认打开智能体窗口。',
  'Remote Control': '远程控制',
  'Allow agents on this machine to be controlled remotely from mobile and web.':
    '允许从移动端和网页远程控制本机上的智能体。',
  'Keep this computer awake': '保持电脑唤醒',
  'Prevent sleep when this computer is plugged in and Remote Control is enabled.':
    '启用远程控制且电脑接通电源时，防止进入睡眠。',
  Subagents: '子智能体',
  'Explore subagent model': 'Explore 子智能体模型',
  'The Explore subagent is used to do initial research for the main agent.':
    'Explore 子智能体用于为主智能体做初步调研。',
  'Run Mode': '运行模式',
  'Approvals & Execution': '审批与执行',
  'Approvals & Execution for commands, MCP and more': '命令、MCP 等的审批与执行',
  'Choose how Agents run tools like command execution, MCP, and file writes.':
    '选择智能体如何运行命令执行、MCP 和文件写入等工具。',
  'Allow Agent to switch modes without asking first, such as Agent to Plan or Agent to Debug. When off, Cursor asks before switching.':
    '允许智能体无需确认即切换模式（如智能体→规划或智能体→调试）。关闭时，切换前会询问。',
  'Auto-Approve Mode Transitions': '自动批准模式切换',
  // 运行模式选项与说明（Cursor 3.13+）
  'Auto-Review': '自动审查',
  'Auto-Review (with Sandbox)': '自动审查（含沙箱）',
  'Run Everything (Unsandboxed)': '全部运行（无沙箱）',
  'Allowlist Options': '白名单选项',
  'You can configure Shell, MCP and Fetch allowlists for Auto mode. However, Auto works well without these.':
    '可为自动模式配置 Shell、MCP 和 Fetch 白名单。不过不配置时，自动模式通常也能正常工作。',
  'Terminal and Editing': '终端与编辑',
  'Many commands will run automatically inside the sandbox, and you can also allowlist other actions.':
    '多数命令会在沙箱中自动运行，你也可以将其他操作加入白名单。',
  'Many commands will run automatically inside the sandbox, and a classifier will run for the actions that cannot run in the sandbox. Allowlists are still respected.':
    '多数命令会在沙箱中自动运行；无法在沙箱中运行的操作将由分类器判定。白名单仍然生效。',
  "A classifier will run for each action and decide whether it's safe to execute this command. Allowlists are still respected.":
    '分类器会评估每个操作，并决定该命令是否可安全执行。白名单仍然生效。',
  'All commands will run without approval, classification or sandboxing.':
    '所有命令将无需审批、分类或沙箱即可运行。',
  'Ask for permission before running each operation': '每次操作前先征求许可',
  // LSP
  'Enable LSPs': '启用 LSP',
  'Enable LSPs for Worktrees': '为工作树启用 LSP',
  'Enable LSPs to change this setting': '需先启用 LSP 才能更改此设置',
  'Enable language server by default to provide code intelligence in workspaces':
    '默认启用语言服务器，为工作区提供代码智能',
  'Enable language server by default to provide code intelligence in agent worktree workspaces':
    '默认启用语言服务器，为智能体工作树工作区提供代码智能',
  'Maximum Local LSP Workspaces': '最大本地 LSP 工作区数',
  'Maximum Remote LSP Workspaces': '最大远程 LSP 工作区数',
  'Maximum local workspaces that can run language servers at the same time':
    '可同时运行语言服务器的最大本地工作区数量',
  'Maximum remote workspaces that can run language servers at the same time':
    '可同时运行语言服务器的最大远程工作区数量',

  // ── ⑤ 工作树 Worktrees ──
  Cleanup: '清理',
  'Cursor periodically removes old worktrees to free disk space. Tune how aggressively cleanup runs.':
    'Cursor 会定期删除旧工作树以释放磁盘空间。可调整清理强度。',
  'Cursor-managed worktrees': 'Cursor 管理的工作树',
  'Cursor-Managed Worktrees': 'Cursor 管理的工作树',
  'Max worktrees': '最大工作树数',
  'Max Worktrees': '最大工作树数',
  'Maximum number of Cursor-managed worktrees to retain across all workspaces. Older worktrees are removed first.':
    '所有工作区中保留的 Cursor 管理工作树最大数量。优先删除较旧的工作树。',
  'Max total size (GB)': '最大总大小（GB）',
  'Max Total Size (GB)': '最大总大小（GB）',
  'Maximum total size in GB across all Cursor-managed worktrees. Set to 0 to disable the size limit.':
    '所有 Cursor 管理工作树的最大总大小（GB）。设为 0 表示不限制大小。',
  'No Cursor-managed worktrees on this machine.': '本机暂无 Cursor 管理的工作树。',
  Worktree: '工作树',
  'New Worktree': '新建工作树',
  'New worktree': '新建工作树',

  // ── ⑥ 工具与 MCP ──
  Authentication: '认证',
  'Wait for MCP Authentication': '等待 MCP 认证',
  'Wait indefinitely to authenticate when prompted. When off, skip authentication prompts after 30 seconds.':
    '提示认证时无限等待。关闭后，30 秒后跳过认证提示。',
  'Browser Automation': '浏览器自动化',
  'Connected to Browser Tab': '已连接到浏览器标签页',
  'Open Web Links in Browser': '在浏览器中打开网页链接',
  'Automatically open http and https links in the Browser Tab':
    '自动在浏览器标签页中打开 http 和 https 链接。',
  'Manage View': '管理视图',
  'Servers available from Home.': '从主页可用的服务器。',
  'Team MCP Servers': '团队 MCP 服务器',
  'Plugin MCP Servers': '插件 MCP 服务器',
  'No Team MCP Servers': '暂无团队 MCP 服务器',
  'Configure Team MCP Servers': '配置团队 MCP 服务器',
  'Configured in the dashboard': '在控制台中配置',
  'Configure MCP servers in the dashboard to make them available in Cursor on desktop and in the cloud.':
    '在控制台配置 MCP 服务器，使其在桌面端和云端 Cursor 中可用。',
  'Open Customize': '打开 Customize',
  'Customize is the new home for managing this page':
    'Customize 是管理此页面的新入口',
  ' tools enabled': ' 个工具已启用',

  // ── 长句 / 模板 / 内嵌文案补全 ──
  'Remote Control runs on a cloud agent, which requires data storage that your current privacy mode disables':
    '远程控制运行在云端智能体上，当前隐私模式禁用了所需的数据存储',
  'Turn on Remote Control to keep this computer awake':
    '开启远程控制以保持电脑唤醒',
  'Prevent sleep when this computer is plugged in and Remote Control is enabled':
    '启用远程控制且电脑接通电源时，防止进入睡眠',
  'Remote Control Agent': '远程控制智能体',
  'Remote Control will be ready once its agent worker registers.':
    '远程控制将在其智能体工作进程注册后就绪。',
  'Connecting to ${il}. Remote Control will be ready once its agent worker registers.':
    '正在连接到 ${il}。远程控制将在其智能体工作进程注册后就绪。',
  'Go to your remote machine. Remote Control will be ready once its agent worker registers.':
    '请前往你的远程机器。远程控制将在其智能体工作进程注册后就绪。',
  'Sets the Run Mode to "Auto-review", which automatically approves low-risk command execution in Auto mode.':
    '将运行模式设为「自动审查」，在自动模式下自动批准低风险命令执行。',
  'Sets the Run Mode to "Auto-review", which automatically approves low-risk commands.':
    '将运行模式设为「自动审查」，自动批准低风险命令。',
  'Enabled by Run Everything Auto-Run Mode: Agent bypasses approval prompts for tools including Web Search, MCP, and terminal commands.':
    '已由「全部自动运行」模式启用：智能体可绕过包括网页搜索、MCP 和终端命令在内的工具审批提示。',
  'Enabled by Run Everything Auto-Run Mode: Agent bypasses approval prompts for tools including Web Search.':
    '已由「全部自动运行」模式启用：智能体可绕过包括网页搜索在内的工具审批提示。',
  'Enabled by Run Everything Auto-Run Mode.':
    '已由「全部自动运行」模式启用。',
  'Run Mode Disabled by Team Admin': '运行模式已被团队管理员禁用',
  'Run Mode Controlled by Team Admin (Sandbox Enabled)': '运行模式由团队管理员控制（沙箱已启用）',
  'Run Mode Controlled by Team Admin': '运行模式由团队管理员控制',
  'Enable on-demand usage to pay for extra requests beyond your plan limits.':
    '启用按需用量，为超出套餐限制的额外请求付费。',

  // ── ⑦ 钩子 Hooks ──
  'Configured Hooks': '已配置的钩子',
  'Open user config': '打开用户配置',
  'Add a hooks.json file to your user, project, or enterprise config to start running custom scripts.':
    '在用户、项目或企业配置中添加 hooks.json 文件，以开始运行自定义脚本。',
  'Hooks run custom scripts at lifecycle events to observe, control, and extend the agent loop.':
    '钩子在生命周期事件运行自定义脚本，以观察、控制和扩展智能体循环。',
  'View Hooks': '查看钩子',
  'Execution Log': '执行日志',
  'Clear log': '清空日志',

  // ── ⑧ Git & PRs（Cursor 3.13+）──
  'Git & PRs': 'Git 与拉取请求',
  'Browser & Network': '浏览器与网络',
  'Branch Prefix': '分支前缀',
  'Prefix for new branches created by Agent (e.g., cursor/, username/)':
    '智能体创建新分支时的前缀（例如：cursor/、username/）',
  'Prefix for new Agent branches': '智能体新分支的前缀',

  // ── ⑨ 模型 Models（Cursor 3.13+）──
  'Task Models': '任务模型',
  'Explore Subagent Model': 'Explore 子智能体模型',
  'Choose the model used by the Explore subagent for initial research':
    '选择 Explore 子智能体用于初步调研的模型',
  'Choose the model used by Explore subagent for initial research':
    '选择 Explore 子智能体用于初步调研的模型',
  'Add or search model': '添加或搜索模型',
  'View All Models': '查看全部模型',
  'Show all models…': '显示全部模型…',
  'Add Custom Model': '添加自定义模型',
  'API Keys': 'API 密钥',
  'No models available': '暂无可用模型',
  'MAX Only': '仅 Max',
  '(Blocked by admin)': '（已被管理员禁用）',
  'Subagent model overrides will only be used in Max Mode':
    '子智能体模型覆盖仅在 Max 模式下生效',
  Gateway: '网关',
  'Configure the local agent LLM gateway': '配置本地智能体 LLM 网关',

  // ── ⑩ 规则、技能与子智能体 ──
  'Include Third-Party Plugins, Skills, and Other Configs':
    '包含第三方插件、技能及其他配置',
  'Show less': '收起',
  'Loading Rules...': '正在加载规则...',
  'Loading Skills...': '正在加载技能...',
  'Loading Subagents...': '正在加载子智能体...',
  'Loading Commands...': '正在加载命令...',

  // ── ⑪ 索引 Ignore Files（Cursor 3.13+ 文案）──
  'Ignore Files': '忽略文件',
  'Apply .cursorignore files to all subdirectories. Changing this setting requires restarting Cursor.':
    '将 .cursorignore 文件应用于所有子目录。更改此设置需重启 Cursor。',
  'Use with caution. Skip symlinks during .cursorignore file discovery. Enable only when all .cursorignore files are reachable without symlinks. Changing this setting requires restarting Cursor.':
    '请谨慎使用。在查找 .cursorignore 文件时跳过符号链接。仅当所有 .cursorignore 均可不经符号链接直接访问时才启用。更改此设置需重启 Cursor。',
};

module.exports = { settingsPagesDict };
