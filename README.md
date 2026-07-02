# Ashraf Farag Allah Portfolio

Modern Angular portfolio website for Ashraf Farag Allah, Senior Backend Developer.

The site highlights backend development, REST APIs, Oracle, SQL Server, Angular, enterprise integrations, production support, troubleshooting, performance optimization, and system analysis.

## Stack

- Angular 20
- TypeScript
- CSS
- Angular CLI build tooling

## Setup

```bash
npm install
```

## Run Locally

```bash
npm start
```

Open `http://localhost:4200/`.

## Build

```bash
npm run build
```

Production files are generated in `dist/ashraf-portfolio/`.

## Deploy

```bash
npm run build:deploy
```

The deploy-ready files are copied to `deploy/upload-ready/`.
That folder is intentionally ignored by GitHub so it stays local only.
Use the contents of `deploy/upload-ready/` for manual upload to static hosting or IIS.

## Test

```bash
npm test
```

## Content Updates

Most portfolio content is stored in:

```text
src/app/data/portfolio.ts
```

Update this file to change profile details, expertise cards, case studies, certificates, experience bullets, tech stack, and contact links.

## TODO

- Replace `your-email@example.com` with the final email address.
- Add the final CV file at `public/assets/Ashraf-Farag-CV.pdf` and enable the Download CV button.
- Replace placeholder certificate notes with exact certificate names, issuers, and dates.
- Add final production domain metadata before deployment.

## Deployment Notes

Do not deploy from this repository until the final domain and hosting target are confirmed.

Possible future domains:

- `ashraf.botglobalservice.com`
- `portfolio.botglobalservice.com`

For static hosting, run `npm run build:deploy` and publish the generated production output from `deploy/upload-ready/`.
