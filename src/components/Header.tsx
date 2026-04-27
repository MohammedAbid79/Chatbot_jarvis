import { TabMode } from '../types';

interface HeaderProps {
  mode: TabMode;
  onModeChange: (mode: TabMode) => void;
  onOpenPanel: () => void;
}

export function Header({ mode, onModeChange, onOpenPanel }: HeaderProps) {
  return (
    <header className="header">
      <div className="brand">
        <span className="dot" />
        <strong>JARVIS</strong>
        <span className="muted">local • v2.4.1</span>
      </div>

      <div className="tabs">
        <button className={mode === 'chat' ? 'active' : ''} onClick={() => onModeChange('chat')}>
          Chat
        </button>
        <button className={mode === 'voice' ? 'active' : ''} onClick={() => onModeChange('voice')}>
          Voice
        </button>
      </div>

      <div className="header-actions">
        <button onClick={onOpenPanel}>☰</button>
      </div>
    </header>
  );
}
