import { FileItem, Message, NotificationItem, TaskItem } from '../types';

export const initialMessages: Message[] = [
  {
    id: 'm1',
    author: 'jarvis',
    content:
      "Hello. I'm Jarvis, your system AI. I'm running locally and can access your files, terminal, and background processes. How can I help you today?",
    timestamp: 'now',
  },
  {
    id: 'm2',
    author: 'user',
    content: 'Open the project files and run diagnostics.',
    timestamp: 'now',
  },
  {
    id: 'm3',
    author: 'jarvis',
    content: "I've analyzed your system. Everything looks nominal — disk at 42%, memory usage is healthy.",
    timestamp: 'now',
  },
];

export const files: FileItem[] = [
  { id: 'f1', name: 'project-notes.md', size: '12 KB', modified: 'just now' },
  { id: 'f2', name: 'system-config.json', size: '4 KB', modified: '1h ago' },
  { id: 'f3', name: 'screenshot-042626.png', size: '1.2 MB', modified: '2h ago' },
  { id: 'f4', name: 'build-log.txt', size: '88 KB', modified: 'yesterday' },
  { id: 'f5', name: 'index.tsx', size: '6 KB', modified: 'Mon' },
  { id: 'f6', name: 'assets/', size: '--', modified: 'Mon' },
];

export const tasks: TaskItem[] = [
  { id: 't1', label: 'Indexing local files', progress: 73, state: 'running' },
  { id: 't2', label: 'System backup', progress: 100, state: 'done' },
  { id: 't3', label: 'Memory optimization', progress: 41, state: 'running' },
  { id: 't4', label: 'Log compression', progress: 0, state: 'queued' },
];

export const notifications: NotificationItem[] = [
  { id: 'n1', source: 'Terminal', title: 'Build finished in 12.3s', age: 'now' },
  { id: 'n2', source: 'Files', title: '2 files modified externally', age: '5m' },
  { id: 'n3', source: 'System', title: 'RAM usage above 80%', age: '12m' },
  { id: 'n4', source: 'Jarvis', title: 'Background scan complete', age: '1h' },
];
