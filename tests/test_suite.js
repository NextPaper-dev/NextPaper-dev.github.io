import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const ASSETS_DIR = path.join(ROOT_DIR, 'public/assets');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Helper to recursively get all files in a directory
function getAllFiles(dir, extFilter = []) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extFilter));
    } else {
      const ext = path.extname(fullPath);
      if (extFilter.length === 0 || extFilter.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

test('Rule Check: No code file in src/ exceeds 500 lines', () => {
  const codeFiles = getAllFiles(SRC_DIR, ['.astro', '.tsx', '.ts', '.css', '.jsx', '.js']);
  assert.ok(codeFiles.length > 0, 'Source files must be present');

  const violations = [];
  for (const file of codeFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const lineCount = content.split('\n').length;
    if (lineCount > 500) {
      violations.push({ file: path.relative(ROOT_DIR, file), lineCount });
    }
  }

  assert.strictEqual(
    violations.length,
    0,
    `Files exceeding 500 lines: ${JSON.stringify(violations, null, 2)}`
  );
});

test('Asset Verification: NextPaper brand assets exist and are valid', () => {
  const requiredAssets = [
    'nextpaper-logo.jpg',
    'nextpaper-icon.jpg',
    'nextpaper-badge.jpg'
  ];

  for (const asset of requiredAssets) {
    const assetPath = path.join(ASSETS_DIR, asset);
    assert.ok(fs.existsSync(assetPath), `Asset missing: ${asset}`);
    const stats = fs.statSync(assetPath);
    assert.ok(stats.size > 1000, `Asset file is unexpectedly small: ${asset} (${stats.size} bytes)`);
  }
});

test('Component Verification: Key React components are intact', () => {
  const components = [
    'Navbar.tsx',
    'HeroSection.tsx',
    'StoresDZShowcase.tsx',
    'SystemsBento.tsx',
    'InteractiveTerminal.tsx',
    'Footer.tsx'
  ];

  for (const comp of components) {
    const compPath = path.join(SRC_DIR, 'components', comp);
    assert.ok(fs.existsSync(compPath), `Component missing: ${comp}`);
    const content = fs.readFileSync(compPath, 'utf-8');
    assert.ok(content.includes('export const'), `Component missing named export: ${comp}`);
  }
});

test('Build Output Verification: dist/ contains compiled landing page', () => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  assert.ok(fs.existsSync(indexPath), 'dist/index.html must exist after npm run build');

  const html = fs.readFileSync(indexPath, 'utf-8');
  assert.ok(html.includes('NEXTPAPER'), 'Index HTML must include NEXTPAPER brand');
  assert.ok(html.includes('StoresDZ'), 'Index HTML must include StoresDZ showcase');
  assert.ok(html.includes('High-Performance Systems'), 'Index HTML must include hero headline');
});
