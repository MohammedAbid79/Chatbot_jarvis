import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const required = ['package.json', 'index.html', path.join('scripts', 'dev-server.mjs')];
const missing = required.filter((file) => !existsSync(path.join(cwd, file)));

console.log(`Project doctor running in: ${cwd}`);

if (missing.length > 0) {
  console.error('Missing required files:');
  missing.forEach((file) => console.error(` - ${file}`));
  console.error('\nYou are likely in the wrong folder. cd into Chatbot_jarvis and run npm run dev again.');
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(path.join(cwd, 'package.json'), 'utf8'));
if (!pkg.scripts?.dev) {
  console.error('package.json exists but scripts.dev is missing.');
  process.exit(1);
}

console.log('✔ Project looks correct.');
console.log('Next steps:');
console.log('  npm run dev');
console.log('  open http://localhost:4173');
