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

## Memperbarui konten

- Data proyek, pengalaman, sertifikasi, dan penghargaan: `src/content.js`.
- Kartu teknologi: array `skills` di `src/App.jsx`.
- Bila ada berkas sertifikat yang ingin ditautkan, pastikan berkasnya bisa diakses publik lalu tambahkan URL terverifikasi ke data sertifikat dan komponen tampilannya.

## Identitas visual

Logo adalah monogram **R** untuk Rian, digambar sebagai jalur sirkuit dengan tiga simpul yang melambangkan web, AI, dan robotics. Ungu mewakili kreativitas dan eksplorasi; mint memberi aksen teknologi dan pertumbuhan. Variasi yang sama digunakan pada header, footer, dan favicon.
