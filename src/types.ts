export type TabMode = 'chat' | 'voice';

export interface Message {
  id: string;
  author: 'jarvis' | 'user';
  content: string;
  timestamp: string;
}

export type PanelType = 'files' | 'terminal' | 'tasks' | 'notifications' | 'launcher';

export interface FileItem {
  id: string;
  name: string;
  size: string;
  modified: string;
}

export interface TaskItem {
  id: string;
  label: string;
  progress: number;
  state: 'running' | 'done' | 'queued';
}

export interface NotificationItem {
  id: string;
  source: string;
  title: string;
  age: string;
}
