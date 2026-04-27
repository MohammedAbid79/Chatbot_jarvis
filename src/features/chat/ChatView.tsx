import { Message } from '../../types';

interface ChatViewProps {
  messages: Message[];
}

export function ChatView({ messages }: ChatViewProps) {
  return (
    <section className="chat-view">
      {messages.map((msg) => (
        <article key={msg.id} className={`bubble ${msg.author}`}>
          <p>{msg.content}</p>
          <span>{msg.timestamp}</span>
        </article>
      ))}
    </section>
  );
}
