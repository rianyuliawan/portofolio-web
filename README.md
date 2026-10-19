# Portofolio Rian Yuliawan

Website portofolio statis dengan React, Vite, dan Tailwind CSS. Tidak memerlukan backend atau database. Konten utama ada di `src/content.js`, komponen di `src/App.jsx`, dan gaya di `src/styles.css`.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
npm run preview
```

Build menghasilkan HTML yang sudah berisi konten (prarender) di `dist/index.html`. JavaScript kemudian mengaktifkan navigasi dan filter proyek. Ini membantu crawler membaca konten tanpa menunggu React dijalankan di browser.

## Deploy ke Vercel

1. Unggah folder ini ke repositori GitHub.
2. Import repositori di Vercel. Framework: **Vite**; build command: `npm run build`; output directory: `dist`. `vercel.json` sudah menyimpan pengaturan tersebut.
3. Untuk domain kustom, set environment variable `SITE_URL=https://domain-anda.com` di Vercel lalu deploy ulang. Bila tidak diset, build di Vercel memakai `VERCEL_PROJECT_PRODUCTION_URL` atau variabel prefiks Vite yang disediakan Vercel. Pastikan opsi **Automatically expose System Environment Variables** aktif.
4. Setelah domain aktif, daftarkan `https://domain-anda.com/sitemap.xml` ke Google Search Console dan Bing Webmaster Tools.

Metadata Open Graph, JSON-LD `Person`, `robots.txt`, `llms.txt`, dan sitemap sudah disiapkan. Peringkat pencarian tetap bergantung pada indeks mesin pencari, kualitas tautan, persaingan kata kunci, dan waktu; tidak bisa dijamin berada di posisi pertama.

## Memperbarui konten

- Data proyek, pengalaman, sertifikasi, dan penghargaan: `src/content.js`.
- Kartu teknologi: array `skills` di `src/App.jsx`.
- Bila ada berkas sertifikat yang ingin ditautkan, pastikan berkasnya bisa diakses publik lalu tambahkan URL terverifikasi ke data sertifikat dan komponen tampilannya.

## Identitas visual

Logo adalah monogram **R** untuk Rian, digambar sebagai jalur sirkuit dengan tiga simpul yang melambangkan web, AI, dan robotics. Ungu mewakili kreativitas dan eksplorasi; mint memberi aksen teknologi dan pertumbuhan. Variasi yang sama digunakan pada header, footer, dan favicon.
