import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const TARGET_DIRS = ['components', 'constants', 'contexts', 'hooks'].map(d => path.join(srcDir, d));

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const allSrcFiles = getAllFiles(srcDir);
const importedFiles = new Set();
const importMap = new Map(); // Maps file -> array of files it imports

// Function to resolve import path to actual file path
function resolveImportPath(importStr, currentFile) {
  let resolvedPath = null;
  if (importStr.startsWith('@/')) {
    resolvedPath = path.join(process.cwd(), 'src', importStr.slice(2));
  } else if (importStr.startsWith('.')) {
    resolvedPath = path.join(path.dirname(currentFile), importStr);
  } else {
    return null; // external module
  }

  const extensions = ['.tsx', '.ts', '.jsx', '.js'];

  // Try exact match first (if it has extension)
  if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
    return resolvedPath;
  }

  // Try appending extensions
  for (const ext of extensions) {
    if (fs.existsSync(resolvedPath + ext)) {
      return resolvedPath + ext;
    }
  }

  // Try index files
  for (const ext of extensions) {
    const indexFile = path.join(resolvedPath, 'index' + ext);
    if (fs.existsSync(indexFile)) {
      return indexFile;
    }
  }

  return null;
}

// Pass 1: Build dependency graph manually
for (const file of allSrcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  importMap.set(file, []);

  // Match `import ... from '...'` and `export ... from '...'`
  const importExportRegex = /(?:import|export)\s+(?:.*?)\s*from\s+['"]([^'"]+)['"]/gs;
  // Match `import('...')`
  const dynamicImportRegex = /import\(['"]([^'"]+)['"]\)/g;

  const matches = [...content.matchAll(importExportRegex), ...content.matchAll(dynamicImportRegex)];

  for (const match of matches) {
    const resolved = resolveImportPath(match[1], file);
    if (resolved) {
      importMap.get(file).push(resolved);
      importedFiles.add(resolved); // Track all files that are imported natively
    }
  }
}

// Find files inside the target directories that are NOT imported by anything
// For an application, next.js pages in app/ are entry points, so their imports are used.
let unusedFiles = [];
for (const file of allSrcFiles) {
  const isInTargetDir = TARGET_DIRS.some(dir => file.startsWith(dir));
  if (!isInTargetDir) continue;

  if (!importedFiles.has(file)) {
    unusedFiles.push(file);
  }
}

console.log(JSON.stringify(unusedFiles, null, 2));
