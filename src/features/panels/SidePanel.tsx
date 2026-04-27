import { files, notifications, tasks } from '../../data/mockData';
import { PanelType } from '../../types';

interface SidePanelProps {
  panel: PanelType;
  onClose: () => void;
}

const panelTitles: Record<PanelType, string> = {
  files: 'Files',
  terminal: 'jarvis — bash',
  tasks: 'Background Tasks',
  notifications: 'Notifications',
  launcher: 'Launch App',
};

export function SidePanel({ panel, onClose }: SidePanelProps) {
  return (
    <aside className="side-panel">
      <header>
        <h2>{panelTitles[panel]}</h2>
        <button onClick={onClose}>✕</button>
      </header>
      <div className="panel-content">{renderPanel(panel)}</div>
    </aside>
  );
}

function renderPanel(panel: PanelType) {
  if (panel === 'files') {
    return (
      <ul>
        {files.map((file) => (
          <li key={file.id} className="list-item">
            <strong>{file.name}</strong>
            <span>{file.size}</span>
            <span>{file.modified}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (panel === 'terminal') {
    return (
      <pre className="terminal">
        {`$ ls
Documents/ Downloads/ Desktop/ Projects/

$ npm run build
[Jarvis] Running: npm run build...
Done ✓`}
      </pre>
    );
  }

  if (panel === 'tasks') {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.label}</strong>
              <span>{task.state}</span>
            </div>
            <progress max={100} value={task.progress} />
            <small>{task.progress}%</small>
          </li>
        ))}
      </ul>
    );
  }

  if (panel === 'notifications') {
    return (
      <ul>
        {notifications.map((item) => (
          <li key={item.id} className="note-item">
            <strong>{item.source}</strong>
            <p>{item.title}</p>
            <span>{item.age}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="launcher-grid">
      {['Terminal', 'Files', 'Browser', 'Editor', 'Calendar', 'Settings', 'Monitor', 'Mail'].map((app) => (
        <button key={app}>{app}</button>
      ))}
    </div>
  );
}
