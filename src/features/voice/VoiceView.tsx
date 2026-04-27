export function VoiceView() {
  return (
    <section className="voice-view">
      <p className="small">Tap to speak</p>
      <h1>Ready</h1>
      <div className="ring">
        <div className="inner">◉</div>
      </div>
      <button className="switch-btn">Switch to Chat</button>
      <div className="transcript">
        <p>You — Run system diagnostics</p>
        <p>Jarvis — Running full diagnostic scan now…</p>
      </div>
    </section>
  );
}
