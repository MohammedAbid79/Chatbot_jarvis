import { useState } from 'react';
import { Header } from './components/Header';
import { Composer } from './features/chat/Composer';
import { ChatView } from './features/chat/ChatView';
import { SidePanel } from './features/panels/SidePanel';
import { VoiceView } from './features/voice/VoiceView';
import { initialMessages } from './data/mockData';
import { PanelType, TabMode } from './types';

const cycle: PanelType[] = ['files', 'terminal', 'tasks', 'notifications', 'launcher'];

export function App() {
  const [mode, setMode] = useState<TabMode>('chat');
  const [panel, setPanel] = useState<PanelType | null>(null);

  const openNextPanel = () => {
    if (!panel) {
      setPanel(cycle[0]);
      return;
    }
    const nextIndex = (cycle.indexOf(panel) + 1) % cycle.length;
    setPanel(cycle[nextIndex]);
  };

  return (
    <main className="jarvis-shell">
      <Header mode={mode} onModeChange={setMode} onOpenPanel={openNextPanel} />

      <div className="workspace">
        <section className="main-stage">{mode === 'chat' ? <ChatView messages={initialMessages} /> : <VoiceView />}</section>
        {panel ? <SidePanel panel={panel} onClose={() => setPanel(null)} /> : null}
      </div>

      {mode === 'chat' ? <Composer /> : null}
      <p className="foot-note">Jarvis runs locally • no data leaves your system</p>
    </main>
  );
}
