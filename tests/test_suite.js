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
const STORESDZ_ASSETS_DIR = path.join(ROOT_DIR, 'public/assets/storesdz');
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

test('Asset Verification: Brand assets and StoresDZ screenshots exist', () => {
  const brandAssets = [
    'nextpaper-logo.jpg',
    'nextpaper-icon.jpg',
    'nextpaper-badge.jpg'
  ];

  for (const asset of brandAssets) {
    const assetPath = path.join(ASSETS_DIR, asset);
    assert.ok(fs.existsSync(assetPath), `Brand asset missing: ${asset}`);
    const stats = fs.statSync(assetPath);
    assert.ok(stats.size > 1000, `Asset file is too small: ${asset}`);
  }

  const storesdzScreens = [
    'landing.png',
    'dashboard.png',
    'templates.png',
    'storefront.png',
    'settings.png'
  ];

  for (const screen of storesdzScreens) {
    const screenPath = path.join(STORESDZ_ASSETS_DIR, screen);
    assert.ok(fs.existsSync(screenPath), `StoresDZ screenshot missing: ${screen}`);
    const stats = fs.statSync(screenPath);
    assert.ok(stats.size > 1000, `StoresDZ screenshot too small: ${screen}`);
  }

  const teamImages = [
    'nouh.jpg',
    'sidali.jpg',
    'sofian.jpg'
  ];

  for (const img of teamImages) {
    const imgPath = path.join(ASSETS_DIR, 'team', img);
    assert.ok(fs.existsSync(imgPath), `Team profile image missing: ${img}`);
    const stats = fs.statSync(imgPath);
    assert.ok(stats.size > 1000, `Team profile image too small: ${img}`);
  }
});

test('Component Verification: Key React components are intact', () => {
  const components = [
    'Navbar.tsx',
    'HeroSection.tsx',
    'AmbientCanvas.tsx',
    'StoresDZMinimal.tsx',
    'StartupCapabilities.tsx',
    'TeamSection.tsx',
    'Footer.tsx',
    'App.tsx',
    'WhatsAppFab.tsx'
  ];

  for (const comp of components) {
    const compPath = path.join(SRC_DIR, 'components', comp);
    assert.ok(fs.existsSync(compPath), `Component missing: ${comp}`);
    const content = fs.readFileSync(compPath, 'utf-8');
    assert.ok(content.includes('export const'), `Component missing named export: ${comp}`);
  }

  const fabContent = fs.readFileSync(path.join(SRC_DIR, 'components/WhatsAppFab.tsx'), 'utf-8');
  assert.ok(fabContent.includes('213540980238'), 'WhatsAppFab must link to 213540980238');
});

test('Translation & Data Verification: EN and FR parity and team data', async () => {
  const translationsPath = path.join(SRC_DIR, 'data/translations.ts');
  const teamPath = path.join(SRC_DIR, 'data/team.ts');

  assert.ok(fs.existsSync(translationsPath), 'translations.ts must exist');
  assert.ok(fs.existsSync(teamPath), 'team.ts must exist');

  const transContent = fs.readFileSync(translationsPath, 'utf-8');
  assert.ok(transContent.includes('en: {'), 'translations must include en');
  assert.ok(transContent.includes('fr: {'), 'translations must include fr');
  assert.ok(transContent.includes('storesdz: {'), 'translations must include storesdz');
  assert.ok(transContent.includes('team: {'), 'translations must include team');
  assert.ok(transContent.includes('capabilities: {'), 'translations must include capabilities');

  const teamContent = fs.readFileSync(teamPath, 'utf-8');
  assert.ok(teamContent.includes('faycal'), 'team must include faycal');
  assert.ok(teamContent.includes('sidali'), 'team must include sidali');
  assert.ok(teamContent.includes('nouh'), 'team must include nouh');
  assert.ok(teamContent.includes('sofian'), 'team must include sofian');
  assert.ok(teamContent.includes('aymen'), 'team must include aymen');
});

test('Build Output Verification: dist/ contains compiled landing page', () => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  assert.ok(fs.existsSync(indexPath), 'dist/index.html must exist after npm run build');

  const html = fs.readFileSync(indexPath, 'utf-8');
  assert.ok(html.includes('nextpaper.dev') || html.includes('NextPaper'), 'Index HTML must include brand name');
  assert.ok(html.includes('StoresDZ'), 'Index HTML must include StoresDZ reference');
});
