const messages = [
  {
    author: 'jarvis',
    content:
      "Hello. I'm Jarvis, your system AI. I'm running locally and have access to your files, terminal, and background processes. How can I help you today?",
  },
  { author: 'user', content: 'Open the project files and run diagnostics.' },
  {
    author: 'jarvis',
    content: "I've analyzed your system. Everything looks nominal — disk at 42%, memory usage is healthy.",
  },
];

const panelTypes = ['files', 'terminal', 'tasks', 'notifications', 'launcher'];
let mode = 'chat';
let panel = null;

const root = document.getElementById('root');

function render() {
  root.innerHTML = `
    <main class="jarvis-shell">
      <header class="header">
        <div class="brand"><span class="dot"></span><strong>JARVIS</strong><span class="muted">local • v2.4.1</span></div>
        <div class="tabs">
          <button data-mode="chat" class="${mode === 'chat' ? 'active' : ''}">Chat</button>
          <button data-mode="voice" class="${mode === 'voice' ? 'active' : ''}">Voice</button>
        </div>
        <div class="header-actions"><button id="cycle-panel">☰</button></div>
      </header>
      <div class="workspace">
        <section class="main-stage">${mode === 'chat' ? chatMarkup() : voiceMarkup()}</section>
        ${panel ? panelMarkup(panel) : ''}
      </div>
      ${mode === 'chat' ? composerMarkup() : ''}
      <p class="foot-note">Jarvis runs locally • no data leaves your system</p>
    </main>`;

  root.querySelectorAll('[data-mode]').forEach((el) => {
    el.addEventListener('click', () => {
      mode = el.dataset.mode;
      render();
    });
  });

  const cycle = document.getElementById('cycle-panel');
  if (cycle) {
    cycle.addEventListener('click', () => {
      if (!panel) panel = panelTypes[0];
      else panel = panelTypes[(panelTypes.indexOf(panel) + 1) % panelTypes.length];
      render();
    });
  }

  const close = document.getElementById('close-panel');
  if (close) {
    close.addEventListener('click', () => {
      panel = null;
      render();
    });
  }
}

function chatMarkup() {
  return `<section class="chat-view">${messages
    .map(
      (m) => `<article class="bubble ${m.author}"><p>${m.content}</p><span>now</span></article>`,
    )
    .join('')}</section>`;
}

function voiceMarkup() {
  return `<section class="voice-view">
      <p class="small">Tap to speak</p><h1>Ready</h1><div class="ring"><div class="inner">◉</div></div>
      <button class="switch-btn">Switch to Chat</button>
      <div class="transcript"><p>You — Run system diagnostics</p><p>Jarvis — Running full diagnostic scan now…</p></div>
    </section>`;
}

function composerMarkup() {
  return '<footer class="composer"><input placeholder="Ask Jarvis anything… or give a system command"/><button>➤</button></footer>';
}

function panelMarkup(kind) {
  return `<aside class="side-panel"><header><h2>${title(kind)}</h2><button id="close-panel">✕</button></header><div class="panel-content">${body(kind)}</div></aside>`;
}

function title(kind) {
  return {
    files: 'Files',
    terminal: 'jarvis — bash',
    tasks: 'Background Tasks',
    notifications: 'Notifications',
    launcher: 'Launch App',
  }[kind];
}

function body(kind) {
  if (kind === 'terminal') {
    return `<pre class="terminal">$ ls
Documents/ Downloads/ Desktop/ Projects/

$ npm run build
Done ✓</pre>`;
  }
  if (kind === 'tasks') {
    return '<ul><li class="task-item"><strong>Indexing local files</strong><progress max="100" value="73"></progress><small>73%</small></li><li class="task-item"><strong>System backup</strong><progress max="100" value="100"></progress><small>100%</small></li></ul>';
  }
  if (kind === 'notifications') {
    return '<ul><li class="note-item"><strong>Terminal</strong><p>Build finished in 12.3s</p><span>now</span></li><li class="note-item"><strong>System</strong><p>RAM usage above 80%</p><span>12m</span></li></ul>';
  }
  if (kind === 'launcher') {
    return `<div class="launcher-grid">${['Terminal', 'Files', 'Browser', 'Editor', 'Calendar', 'Settings', 'Monitor', 'Mail']
      .map((x) => `<button>${x}</button>`)
      .join('')}</div>`;
  }
  return '<ul><li class="list-item"><strong>project-notes.md</strong><span>12 KB</span><span>just now</span></li><li class="list-item"><strong>system-config.json</strong><span>4 KB</span><span>1h ago</span></li></ul>';
}

render();
