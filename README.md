# Chatbot_jarvis

A local-first JARVIS interface scaffold with **zero external npm dependencies** so setup works in restricted environments.

## Why this change
The environment blocks npm package downloads (HTTP 403), so the app now runs on a no-dependency baseline first.

## Architecture order
1. **Base structure**
   - App shell and mode/panel state in `src/main.js`
   - Dedicated `scripts/` for local dev server and build copy flow
2. **GUI layer**
   - Chat mode timeline + composer
   - Voice mode ring + transcript
   - Right-side panels: files, terminal, tasks, notifications, launcher

## Commands
```bash
npm install
npm run doctor
npm run dev
npm run preview
npm run build
```

`npm install` is intentionally lightweight (no registry fetches required).

## Fix for `npm ERR! Missing script: "dev"`
That specific error means you are running npm in the wrong folder.

Use this sequence:
```bash
cd /path/to/Chatbot_jarvis
npm run doctor
npm run dev
```

If `doctor` fails, you're not in the app root yet.
