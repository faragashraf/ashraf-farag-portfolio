import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(rootDir, 'dist', 'ashraf-portfolio');
const browserDir = path.join(distRoot, 'browser');

if (!existsSync(distRoot) && !existsSync(browserDir)) {
  throw new Error('Angular production build output was not found. Run `npm run build` first.');
}

const deployDir = path.join(rootDir, 'deploy', 'upload-ready');
const webConfigPath = path.join(deployDir, 'web.config');

rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });

const copyDirectoryContents = (fromDir, toDir) => {
  for (const entry of readdirSync(fromDir, { withFileTypes: true })) {
    const sourcePath = path.join(fromDir, entry.name);
    const targetPath = path.join(toDir, entry.name);

    if (entry.isDirectory()) {
      cpSync(sourcePath, targetPath, { recursive: true });
      continue;
    }

    cpSync(sourcePath, targetPath);
  }
};

if (existsSync(browserDir)) {
  copyDirectoryContents(browserDir, deployDir);

  for (const entry of readdirSync(distRoot, { withFileTypes: true })) {
    if (!entry.isFile()) {
      continue;
    }

    const sourcePath = path.join(distRoot, entry.name);
    const targetPath = path.join(deployDir, entry.name);
    cpSync(sourcePath, targetPath);
  }
} else {
  copyDirectoryContents(distRoot, deployDir);
}

writeFileSync(
  webConfigPath,
  `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular SPA fallback" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
`
);

console.log(`Deploy-ready files copied to ${path.relative(rootDir, deployDir)}/`);
