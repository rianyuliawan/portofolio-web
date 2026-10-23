import { readFile, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { render } from '../dist-server/entry-server.js';

const dist = new URL('../dist/', import.meta.url);
const file = new URL('index.html', dist);
let html = await readFile(file, 'utf8');
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

const rawSiteUrl = process.env.SITE_URL || 'https://www.rianyuliawan.my.id';
const siteUrl = rawSiteUrl ? (rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`).replace(/\/+$/, '') : '';
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rian Yuliawan',
  jobTitle: 'Software Developer and AI Intern',
  description: 'Mahasiswa Teknik Informatika UIN Syarif Hidayatullah Jakarta yang berfokus pada pengembangan web, AI, robotics, dan IoT.',
  email: 'mailto:rianyuliawan04@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
  affiliation: [
    { '@type': 'Organization', name: 'UIN Syarif Hidayatullah Jakarta' },
    { '@type': 'Organization', name: 'Anteraja NextGen AI' },
  ],
  sameAs: ['https://github.com/rianyuliawan', 'https://www.linkedin.com/in/rian-yuliawan-9b0396265/'],
  knowsAbout: ['React', 'Laravel', 'Next.js', 'Python', 'Machine Learning', 'Retrieval-Augmented Generation', 'Robotics', 'Internet of Things'],
  ...(siteUrl ? { url: siteUrl, '@id': `${siteUrl}/#person`, image: `${siteUrl}/og-image.png` } : {}),
};
const extra = [
  siteUrl ? `<link rel="canonical" href="${siteUrl}/" />` : '',
  siteUrl ? `<meta property="og:url" content="${siteUrl}/" />` : '',
  `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
].filter(Boolean).join('\n    ');
html = html.replace('<!--seo-extra-->', extra);
if (siteUrl) {
  html = html.replaceAll('content="/og-image.png"', `content="${siteUrl}/og-image.png"`);
}
await writeFile(file, html);
await writeFile(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}`);
if (siteUrl) {
  await writeFile(new URL('sitemap.xml', dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc></url></urlset>\n`);
}
await rm(new URL('../dist-server/', import.meta.url), { recursive: true, force: true });
console.log(`Prerendered portfolio${siteUrl ? ` for ${siteUrl}` : ' (set SITE_URL for canonical URL and sitemap)'}.`);
