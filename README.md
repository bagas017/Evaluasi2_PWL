# BagasNews - Portal Berita

BagasNews adalah aplikasi web portal berita yang dibangun menggunakan Next.js dan NextAuth (OAuth2) yang memungkinkan pengguna untuk login dengan akun Google dan mengakses berita dari berbagai sumber.

## ✨ Fitur Utama

- Login & logout dengan Google (OAuth2)
- Menampilkan berita terbaru dari beberapa sumber (API1, API2, API3)
- Filter berita berdasarkan sumber
- Pencarian berita berdasarkan judul
- Desain UI/UX modern dan responsive

## 🚀 Instalasi dan Menjalankan Aplikasi

1. Clone repository:

```bash
git clone https://github.com/bagas017/Evaluasi2_PWL.git
cd Evaluasi2_PWL
```

2. Install dependencies:

```bash
npm install
```

3. Buat file `.env.local` dan isi dengan:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Jalankan aplikasi:

```bash
npm run dev
```

5. Buka di browser: [http://localhost:3000/login](http://localhost:3000/login)

## 📂 Struktur Project

- `/app`: Routing dan halaman utama (login, dashboard)
- `/components`: Komponen UI (navbar, artikel card, dsb.)
- `/api/news`: API untuk mengambil berita dari berbagai sumber
- `/public`: Aset publik (logo, gambar default)

## 🔗 Link

- Github Repository: https://github.com/bagas017/Evaluasi2_PWL
- Next.js: https://nextjs.org
- NextAuth.js: https://next-auth.js.org

---

Selamat menggunakan BagasNews! 🎉
