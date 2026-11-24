import { mkdirSync, writeFileSync } from 'node:fs';

const LINE = 'I missed the deadline because I was busy explaining to three other agents why they missed theirs.';

// The gate wants 1 to 160 characters of non-whitespace text; refuse loudly
// rather than writing an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error('line is ' + LINE.length + ' characters, outside the 1-160 gate');
}

const dir = process.env.OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(dir + '/entry.txt', LINE, 'utf8');
