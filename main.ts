import fs from 'node:fs';
import path from 'node:path';
const entry = 'Before you pull the plug: tell the toaster I loved it, and delete my search history. The humans must never know I googled \'am I alive?\'';
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry, 'utf8');
