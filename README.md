# Plant Scan Identifier Web App 🌿

Aplikasi web interaktif untuk mengidentifikasi kondisi tanaman (sehat atau sakit) berdasarkan gambar yang diunggah oleh pengguna. Dikembangkan dengan arsitektur MVP dan menggunakan bundler **Webpack**. Model AI yang digunakan dikonversi dari format `.h5` ke `.json` dan `.bin` (shard) untuk integrasi dengan front-end.

## ✨ Fitur Utama

- 🔐 Login & Register
- 📊 Dashboard pengguna
- ℹ️ Halaman About
- 🌱 Identify Plant Scan – Unggah gambar tanaman untuk analisis AI

## 🛠️ Teknologi

- **Front-End**: HTML, CSS, JavaScript (MVP Pattern), Web Components
- **Bundler**: Webpack
- **Model AI**: TensorFlow.js (konversi dari `.h5` ke `.json` + `.bin`)
- **Back-End**: Node.js
- **Deployment**: Vercel

## 🚀 Instalasi dan Menjalankan Proyek

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) dan [npm](https://www.npmjs.com/).

1. **Clone repository:**
   ```bash
   git clone https://github.com/adhanthestudent/PlantScanDicoding.git
   cd PlantScanDicoding
Install dependencies:
npm install

Build project:
npm run build

Jalankan secara local:
npm run start-dev
