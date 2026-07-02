import { createWriteStream, existsSync, mkdirSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoDir = path.join(rootDir, 'public', 'assets', 'logos');

const logos = [
  {
    file: 'egypt-post.svg',
    source: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/EGYPT_POST.svg',
    label: 'Egypt Post',
    type: 'organization',
  },
  {
    file: 'digital-egypt.svg',
    source: 'https://digital.gov.eg/logoDark.svg',
    label: 'Digital Egypt',
    type: 'organization',
  },
  {
    file: 'public-prosecution.png',
    source:
      'https://asu2learn.asu.edu.eg/egyppo/pluginfile.php/1/theme_remui/loaderimage/1777791422/android-chrome-512x512.png',
    label: 'Public Prosecution',
    type: 'organization',
  },
  {
    file: 'dotnet.svg',
    source: 'https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.svg',
    label: '.NET',
    type: 'technology',
  },
  {
    file: 'csharp.svg',
    source: 'https://raw.githubusercontent.com/dotnet/brand/main/logo/language-icons/csharp-72.svg',
    label: 'C#',
    type: 'technology',
  },
  {
    file: 'hangfire.svg',
    source: 'https://www.hangfire.io/logo.svg',
    label: 'Hangfire',
    type: 'technology',
  },
  {
    file: 'nuget.svg',
    source: 'https://upload.wikimedia.org/wikipedia/commons/2/25/NuGet_project_logo.svg',
    label: 'NuGet',
    type: 'technology',
  },
  {
    file: 'angular.svg',
    source: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/angular.svg',
    label: 'Angular',
    type: 'technology',
  },
  {
    file: 'oracle.svg',
    source: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/oracle.svg',
    label: 'Oracle',
    type: 'technology',
  },
  {
    file: 'sql-server.svg',
    source: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftsqlserver.svg',
    label: 'SQL Server',
    type: 'technology',
  },
  {
    file: 'excel.svg',
    source: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftexcel.svg',
    label: 'Excel',
    type: 'technology',
  },
];

mkdirSync(logoDir, { recursive: true });

const summary = {
  downloaded: [],
  skipped: [],
  failed: [],
};

for (const logo of logos) {
  const targetPath = path.join(logoDir, logo.file);

  if (existsSync(targetPath)) {
    summary.skipped.push(logo.file);
    continue;
  }

  try {
    const response = await fetch(logo.source, {
      headers: {
        'user-agent': 'ashraf-portfolio-logo-downloader/1.0',
      },
    });

    if (!response.ok || !response.body) {
      throw new Error(`HTTP ${response.status}`);
    }

    await pipeline(response.body, createWriteStream(targetPath));
    summary.downloaded.push(logo.file);
  } catch (error) {
    summary.failed.push(`${logo.file} (${error.message})`);
  }
}

console.log('Logo download summary');
console.log(`Downloaded: ${summary.downloaded.length ? summary.downloaded.join(', ') : 'none'}`);
console.log(`Skipped: ${summary.skipped.length ? summary.skipped.join(', ') : 'none'}`);
console.log(`Failed: ${summary.failed.length ? summary.failed.join(', ') : 'none'}`);
