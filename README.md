# 🚆 Sistem Pemesanan Tiket KAI

<div align="center">

### 🎫 Dashboard Pemesanan Tiket Kereta Api Indonesia

**Proyek Penerapan JavaScript Dasar — Tugas Individu 2 (Bagian 1)**

`Array of Object` • `Function` • `Perulangan` • `Operator` • `Console Output`

</div>

---

## 🎓 Informasi Tugas

| Informasi | Keterangan |
|---|---|
| 📚 Mata Kuliah | JavaScript Dasar |
| 📅 Pertemuan | Pertemuan 4 |
| ✍️ Penulis | **Dafi Deo** |
| 🏫 Program Studi | Sistem Informasi |
| 📌 Tugas | Tugas Individu 2 — Bagian 1 |

---

## 📖 Tentang Project

Project ini merupakan implementasi **JavaScript Dasar** dalam bentuk sistem sederhana untuk melakukan **pemesanan tiket Kereta Api Indonesia (KAI)**.

Website dibuat untuk menerapkan beberapa konsep dasar JavaScript, yaitu:

- Array of Object
- Function
- Perulangan
- Operator perbandingan
- Operator logika
- Pengolahan data
- `localStorage`
- Output melalui Console Browser

Selain JavaScript, project ini menggunakan **Bootstrap** untuk membantu membuat tampilan website yang responsif.

---

## 🔗 Demo Online

Website dapat dijalankan melalui **GitHub Pages**:

👉 [Buka Demo Website](https://dafideo.github.io/tugas2-javascript-dasar/Index.html)

> Jika GitHub Pages belum diaktifkan, aktifkan melalui **Settings → Pages** pada repository.

---

# ✨ Fitur Website

| Fitur | Keterangan |
|---|---|
| 📊 **Dashboard Statistik** | Menampilkan total pesanan, tiket terjual, total pendapatan, dan pendapatan premium |
| 📋 **Tabel Riwayat Pesanan** | Menampilkan data pemesanan tiket |
| 🔍 **Filter Kelas** | Memfilter tiket berdasarkan Eksekutif, Bisnis, Ekonomi, atau Semua |
| 🎫 **Pesan Tiket** | Form untuk menambahkan pemesanan baru |
| 💰 **Harga Otomatis** | Harga tiket menyesuaikan kelas yang dipilih |
| 🧮 **Total Bayar Live** | Menghitung total harga berdasarkan harga dan jumlah tiket |
| 🔔 **Toast Notification** | Menampilkan notifikasi ketika pesanan berhasil disimpan |
| 💾 **localStorage** | Menyimpan data pesanan di browser |
| ↩️ **Reset Data** | Mengembalikan data ke 6 pesanan awal |
| 🖥️ **Console Report** | Menampilkan laporan penjualan melalui Developer Console |

---

# 🛠️ Teknologi yang Digunakan

### 🌐 HTML

Digunakan untuk membuat struktur halaman website.

### 🎨 CSS

Digunakan untuk membuat styling tambahan dan menyesuaikan tampilan website.

### ⚡ JavaScript ES6

Digunakan untuk:

- Pengolahan data
- Function
- Array of Object
- Perulangan
- Operator
- Filter
- Perhitungan
- Manipulasi DOM
- `localStorage`
- Console output

### 🟪 Bootstrap 5.3.8

Digunakan untuk membantu membuat:

- Navbar
- Card
- Table
- Modal
- Button
- Toast
- Responsive layout

### ⭐ Bootstrap Icons 1.13.1

Digunakan untuk menambahkan ikon pada antarmuka website.

---

# 📚 Konsep JavaScript yang Diterapkan

## 1. Array of Object

Project menggunakan **6 data pemesanan awal**.

Setiap object memiliki property:

```javascript
const dataAwalPesanan = [
    {
        id_pesanan: "KAI-001",
        nama_penumpang: "Andi Pratama",
        nama_kereta: "Argo Bromo Anggrek",
        kelas: "Eksekutif",
        harga_tiket: 750000,
        jumlah_tiket: 2
    },

    // Data lainnya...
];
