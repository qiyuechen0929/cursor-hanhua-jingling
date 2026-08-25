/**
 * 特殊格式词条的正则替换（含模板字符串、Unicode 引号等）
 */
function applyTrickyReplacements(content) {
  const rules = [
    {
      regex:
        /Reset\s+(?:\\?["']|\\u201[CD]|\\u0022|")Don(?:'|\\'|\\u2019|'|')t\s+Ask\s+Again(?:\\?["']|\\u201[CD]|\\u0022|")\s+Dialogs/gi,
      zh: '重置「不再询问」弹窗',
    },
    {
      regex: /See\s+warnings\s+and\s+tips\s+that\s+you(?:'|\\'|\\u2019|'|')ve\s+hidden/gi,
      zh: '查看您已隐藏的警告和提示',
    },
    {
      regex: /No\s+Hidden\s+Dialogs\s+Yet/gi,
      zh: '暂无隐藏的弹窗',
    },
    {
      regex:
        /You\s+haven(?:'|\\'|\\u2019|'|')t\s+marked\s+any\s+dialogs\s+as\s+(?:\\?["']|\\u201[CD]|\\u0022|")Don(?:'|\\'|\\u2019|'|')t\s+ask\s+again(?:\\?["']|\\u201[CD]|\\u0022|")\.\s*Any\s+hidden\s+dialogs\s+will\s+appear\s+here\s+to\s+manage\./gi,
      zh: '您尚未将任何弹窗标记为「不再询问」。任何隐藏的弹窗都将显示在此处以供管理。',
    },
    {
      regex:
        /Use\s+with\s+caution\.\s*Skip\s+symlinks\s+during\s+\.cursorignore\s+file\s+discovery\.[\s\S]{0,220}?Changing\s+this\s+setting\s+(?:will\s+require\s+a\s+restart\s+of|requires\s+restarting)\s+Cursor\./gi,
      zh: '请谨慎使用。在查找 .cursorignore 文件时跳过符号链接。仅当所有 .cursorignore 均可不经符号链接直接访问时才启用。更改此设置需重启 Cursor。',
    },
    {
      regex: /Submit\s+with\s+(\$\{[^}]+\}|Ctrl\s*\+\s*)Enter/gi,
      zh: '使用 $1Enter 提交',
    },
    {
      regex:
        /When\s+enabled,\s+(\$\{[^}]+\}|Ctrl\s*\+\s*)Enter\s+submits\s+chat\s+and\s+Enter\s+inserts\s+a\s+newline/gi,
      zh: '启用后，$1Enter 提交聊天，Enter 插入换行',
    },
    {
      regex:
        /Apply\s+(.{0,10}?)\.cursorignore(.{0,10}?)\s+files\s+to\s+all\s+subdirectories[\s\S]{0,120}?Changing\s+this\s+setting\s+(?:will\s+require\s+a\s+restart\s+of|requires\s+restarting)\s+Cursor\./gi,
      zh: '将 $1.cursorignore$2 文件应用于所有子目录。更改此设置需重启 Cursor。',
    },
    {
      regex: /Automatically\s+import\s+necessary\s+modules\s+for\s+(\$\{[^}]+\}|TypeScript|C\+\+)/gi,
      zh: '自动为 $1 导入必要的模块',
    },
    {
      regex: /Accept\s+the\s+next\s+word\s+of\s+a\s+suggestion\s+via\s+(\$\{[^}]+\}|Ctrl\+RightArrow)/gi,
      zh: '使用 $1 接受建议的下一个词',
    },
    {
      regex:
        /Embed\s+codebase\s+for\s+improved\s+contextual\s+understanding[\s\S]{0,120}?stored\s+locally\./gi,
      zh: '嵌入代码库以提升上下文理解和知识运用。嵌入向量和元数据存储在云端，但所有代码均存储在本地。',
    },
    {
      regex: /Automatically\s+parse\s+links\s+when\s+pasted\s+into\s+Quick\s+Edit\s+\((\$\{[^}]+\}|Ctrl\+)K\)\s+input/gi,
      zh: '粘贴到快速编辑 ($1K) 输入框时自动解析链接',
    },
    {
      regex:
        /Automatically\s+jump\s+to\s+the\s+next\s+diff\s+when\s+accepting\s+changes\s+with\s+(\$\{[^}]+\}|Ctrl\+)Y/gi,
      zh: '使用 $1Y 接受更改时自动跳转到下一个差异',
    },
    {
      regex: /Show\s+a\s+hint\s+for\s+(\$\{[^}]+\}|Ctrl\+)K\s+in\s+the\s+Terminal/gi,
      zh: '在终端中显示 $1K 提示',
    },
    {
      regex: /Preview\s+Box\s+for\s+Terminal\s+(\$\{[^}]+\}|Ctrl\+)K/gi,
      zh: '终端 $1K 的预览框',
    },
    {
      regex:
        /"Automatically\s+index\s+repositories\s+to\s+speed\s+up\s+Grep\s+searches\.\s+All\s+data\s+is\s+stored\s+locally\."/gi,
      zh: '"自动索引代码库以加速 Grep 搜索。所有数据均存储在本地。"',
    },
    {
      regex: /You(?:'|\\'|\\u2019|'|')re\s+over\s+your\s+current\s+usage\s+limit[\s\S]{0,80}?slow\s+queue\./gi,
      zh: '您已超出当前使用额度，您的请求正在慢速队列中处理。',
    },
    {
      regex: /Choose\s+GitHub\s+or\s+Graphite\s+for\s+pull\s+request\s+links[\s\S]{0,40}?desktop\./gi,
      zh: '选择 GitHub 或 Graphite 作为网页和桌面端拉取请求链接提供方。',
    },
    {
      regex: /Open\s+pull\s+request\s+links\s+inside\s+Cursor\s+or\s+in\s+the\s+default\s+browser\./gi,
      zh: '在 Cursor 内或默认浏览器中打开拉取请求链接。',
    },
    {
      regex: /Show\s+warning-level\s+in-app\s+toasts\.?/gi,
      zh: '显示应用内警告级别提示',
    },
    {
      regex: /Show\s+Cursor\s+in\s+menu\s+bar\.?/gi,
      zh: '在菜单栏显示 Cursor',
    },
    {
      regex:
        /Show\s+warning-level\s+in-app\s+notifications\s+in\s+Glass\s+mode\.\s*Errors\s+and\s+informational\s+notifications\s+are\s+always\s+shown\./gi,
      zh: '在 Glass 模式下显示应用内警告级别通知。错误和信息类通知始终显示。',
    },
    {
      regex: /Choose\s+\$\{[^}]+\}\s+for\s+pull\s+request\s+links\s+on\s+web\s+and\s+desktop/gi,
      zh: '选择 ${D40(n)} 作为网页和桌面端拉取请求链接提供方',
    },
    {
      regex: /\?"Show Cursor in menu bar"/g,
      zh: '?"在菜单栏显示 Cursor"',
    },
    {
      regex: /\?"Show warning-level in-app toasts"/g,
      zh: '?"显示应用内警告级别提示"',
    },
    {
      regex: /P40="Open pull request links inside Cursor or in the default browser"/g,
      zh: 'P40="在 Cursor 内或默认浏览器中打开拉取请求链接"',
    },
    {
      regex: /return\s*"Less"\s*:\s*"More"/g,
      zh: 'return"收起":"更多"',
    },
    {
      regex: /e\(\)\?"Less":"More"/g,
      zh: 'e()?"收起":"更多"',
    },
    {
      regex: /Drag\s+and\s+drop\s+agent\s+chats\s+to\s+split\s+your\s+view\s+into\s+tiled\s+panes/gi,
      zh: '拖放智能体聊天，将视图拆分为平铺窗格',
    },
    {
      regex: /Plan,\s+Build,\s+\/\s+for\s+skills,\s+@\s+for\s+context/gi,
      zh: '规划、构建，/ 调用技能，@ 添加上下文',
    },
    {
      regex: /Refer\s+friends,\s+earn\s+up\s+to\s+\$250/gi,
      zh: '推荐好友，最高赚取 $250',
    },
    // Appearance 主题选项（仅替换 label，不破坏 includes("System") 等逻辑）
    { regex: /\{mode:"light",label:"Light"\}/g, zh: '{mode:"light",label:"浅色"}' },
    { regex: /\{mode:"dark",label:"Dark"\}/g, zh: '{mode:"dark",label:"深色"}' },
    { regex: /\{mode:"system",label:"System"\}/g, zh: '{mode:"system",label:"跟随系统"}' },
    { regex: /\{value:"auto",label:"System"\}/g, zh: '{value:"auto",label:"跟随系统"}' },
    { regex: /qrS=\{icon:"color-mode",label:"System"\}/g, zh: 'qrS={icon:"color-mode",label:"跟随系统"}' },
    { regex: /light:\{icon:"sun",label:"Light"\}/g, zh: 'light:{icon:"sun",label:"浅色"}' },
    { regex: /dark:\{icon:"moon",label:"Dark"\}/g, zh: 'dark:{icon:"moon",label:"深色"}' },
    // Plan & Usage JSX 片段
    { regex: /Current Plan<\/div>/g, zh: '当前套餐</div>' },
    { regex: /Upgrade Available<\/div>/g, zh: '可升级</div>' },
    { regex: /Included in \$\{/g, zh: '包含于 ${' },
    { regex: /Resets on '/g, zh: "重置于 '" },
    { regex: /"% Auto and"/g, zh: '"% 自动模式，"' },
    { regex: /"% API used"/g, zh: '"% API 已用"' },
    // Customize 迁移横幅（Hooks / Tools & MCP）
    { regex: / are moving to Customize/g, zh: ' 即将迁移至 Customize' },
    { regex: /Configured Hooks \(\$\{/g, zh: '已配置的钩子 (${' },
    { regex: /title:`\$\{je\} are moving to Customize`/g, zh: 'title:`${je} 即将迁移至 Customize`' },
    // JSX / HTML 内嵌文案
    { regex: />On-Demand Usage/g, zh: '>按需用量' },
    { regex: />Browser Automation<\/div>/g, zh: '>浏览器自动化</div>' },
    { regex: / \(Remote Control\)/g, zh: ' (远程控制)' },
    { regex: /`Remote Control \(/g, zh: '`远程控制 (' },
    { regex: /`Remote Control \(\$\{/g, zh: '`远程控制 (${' },
    { regex: /permissions\.json\)`:"Run Mode"/g, zh: 'permissions.json)`:"运行模式"' },
    { regex: /`Run Mode \(enforced by/gi, zh: '`运行模式（由' },
    { regex: /Connecting to \$\{il\}\. Remote Control will be ready once its agent worker registers\./g, zh: '正在连接到 ${il}。远程控制将在其智能体工作进程注册后就绪。' },
    // ── v1.2.0：套餐用量 / 规则列表 / 分支 等模板 ──
    { regex: /Usage limits reset on <!> \(<!>\)/g, zh: '用量额度将于 <!> 重置（<!>)' },
    { regex: /> day<!> left/g, zh: '> 天剩余<!>' },
    { regex: /ae\(tt,\(\)=>l\(\)!==1\?"s":"",lt\)/g, zh: 'ae(tt,()=>"",lt)' },
    { regex: />% used<\/span>/g, zh: '>已使用</span>' },
    { regex: /% used · /g, zh: '% 已使用 · ' },
    { regex: /% used`/g, zh: '% 已使用`' },
    { regex: /% used \\xB7 /g, zh: '% 已使用 · ' },
    { regex: /Show all \(<!> more\)/g, zh: '显示全部（另有 <!> 个）' },
    { regex: />Show less</g, zh: '>收起<' },
    { regex: /title:"Git & PRs"/g, zh: 'title:"Git 与拉取请求"' },
    { regex: /title:"Branches"/g, zh: 'title:"分支"' },
    { regex: /label:"Branches"/g, zh: 'label:"分支"' },
    { regex: /"aria-label":"Branches"/g, zh: '"aria-label":"分支"' },
    { regex: /p=l===void 0\?"Branches":l/g, zh: 'p=l===void 0?"分支":l' },
    { regex: /_\|\|"Branches"/g, zh: '_||"分支"' },
    { regex: />View All Models</g, zh: '>查看全部模型<' },
    { regex: />API Keys</g, zh: '>API 密钥<' },
    { regex: /Your plan includes at least \$/g, zh: '你的套餐至少包含 $' },
    { regex: / of API usage\./g, zh: ' 的 API 用量。' },
    { regex: /\(controlled by admin\)/g, zh: '（由管理员控制）' },
    // ── Reduce Transparency / Reduce Motion ──
    { regex: /Your system has Reduce Transparency turned on right now/g, zh: '你的系统已开启降低透明度' },
    { regex: /Unavailable while Reduce Motion is on \(from settings or your system\)/g, zh: '减少动效开启时不可用（来自设置或系统）' },
    // ── PR 链接描述（无 in 变体）──
    { regex: /description:"Open pull request links inside Cursor or the default browser"/g, zh: 'description:"在 Cursor 内或默认浏览器中打开拉取请求链接"' },
    // ── New Messages 弹窗 / 描述 ──
    { regex: /Send New Messages without queuing\?/g, zh: '发送新消息而不排队？' },
    { regex: /New messages now steer Agent instead of interrupting/g, zh: '新消息现在会引导智能体而不是中断' },
    { regex: /description:"What sending a message while Agent is working"/g, zh: 'description:"智能体运行时发送消息的默认行为"' },
    { regex: /description:"What the queued-message Send Now action does"/g, zh: 'description:"队列消息「立即发送」操作的行为"' },
    { regex: /What model new agents use by default/g, zh: '新智能体默认使用的模型' },
    // ── Default Model 描述 ──
    { regex: /description:"What model new agents use by default"/g, zh: 'description:"新智能体默认使用的模型"' },
  ];

  let result = content;
  for (const { regex, zh } of rules) {
    result = result.replace(regex, zh);
  }
  return result;
}

module.exports = { applyTrickyReplacements };
