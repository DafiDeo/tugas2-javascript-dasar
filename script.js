/* 1. ARRAY OF OBJECT — DATA RIWAYAT PEMESANAN TIKET (6 DATA) */

const daftarPesanan = [
  {
    id_pesanan:     "KAI-001",
    nama_penumpang: "Dafi Deo",
    nama_kereta:    "Argo Bromo Anggrek",
    kelas:          "Eksekutif",
    harga_tiket:    750000,
    jumlah_tiket:   2
  },
  {
    id_pesanan:     "KAI-002",
    nama_penumpang: "Vira Salsabila",
    nama_kereta:    "Gajayana",
    kelas:          "Bisnis",
    harga_tiket:    450000,
    jumlah_tiket:   1
  },
  {
    id_pesanan:     "KAI-003",
    nama_penumpang: "Erico Faizal Hakim",
    nama_kereta:    "Bima",
    kelas:          "Eksekutif",
    harga_tiket:    820000,
    jumlah_tiket:   3
  },
  {
    id_pesanan:     "KAI-004",
    nama_penumpang: "Rehan Saputra",
    nama_kereta:    "Senja Utama",
    kelas:          "Ekonomi",
    harga_tiket:    250000,
    jumlah_tiket:   2
  },
  {
    id_pesanan:     "KAI-005",
    nama_penumpang: "Arief Yulianto",
    nama_kereta:    "Turangga",
    kelas:          "Bisnis",
    harga_tiket:    480000,
    jumlah_tiket:   1
  },
  {
    id_pesanan:     "KAI-006",
    nama_penumpang: "Egik Nugroho",
    nama_kereta:    "Argo Parahyangan",
    kelas:          "Ekonomi",
    harga_tiket:    220000,
    jumlah_tiket:   4
  }
];


/* 2. FUNCTION UTILITY — MENGUBAH ANGKA MENJADI FORMAT RUPIAH */

function formatRupiah(nominal) {
  return "Rp " + nominal.toLocaleString("id-ID");
}


/* 3. FUNCTION 1 — MENGHITUNG TOTAL PENDAPATAN SELURUH PESANAN */

function hitungTotalPendapatan(data) {
  let totalPendapatan = 0;

  // PERULANGAN (for...of): menelusuri setiap object pesanan
  for (const pesanan of data) {
    if (pesanan.harga_tiket >= 0 && pesanan.jumlah_tiket >= 1) {
      totalPendapatan += pesanan.harga_tiket * pesanan.jumlah_tiket;
    }
  }

  return totalPendapatan;
}


/* 4. FUNCTION 2 — FILTER PESANAN BERDASARKAN KELAS KERETA */

function filterKelasKereta(data, kelasDicari) {
  const hasilFilter = [];

  // PERULANGAN (for...of): memeriksa kelas setiap pesanan
  for (const pesanan of data) {
    if (pesanan.kelas === kelasDicari || kelasDicari === "Semua") {
      hasilFilter.push(pesanan);
    }
  }

  return hasilFilter;
}


/* 5. FUNCTION 3 (TAMBAHAN) — REKAP STATISTIK PENJUALAN */

function hitungStatistik(data) {
  let totalTiket        = 0;
  let pendapatanPremium = 0; // gabungan kelas Eksekutif + Bisnis

  for (const pesanan of data) {
    totalTiket += pesanan.jumlah_tiket;

    // OPERATOR PERBANDINGAN (===) + LOGIKA (||)
    if (pesanan.kelas === "Eksekutif" || pesanan.kelas === "Bisnis") {
      pendapatanPremium += pesanan.harga_tiket * pesanan.jumlah_tiket;
    }
  }

  return {
    jumlahPesanan:     data.length,
    totalTiket:        totalTiket,
    totalPendapatan:   hitungTotalPendapatan(data), // memakai ulang Function 1
    pendapatanPremium: pendapatanPremium
  };
}


/* 6. PROGRAM UTAMA — LAPORAN LENGKAP DI CONSOLE */


console.log("   SISTEM PEMESANAN TIKET KAI — LAPORAN PENJUALAN");

//  [1] Menampilkan seluruh data pesanan 
console.log("\n[1] DAFTAR SELURUH PESANAN TIKET");
console.table(daftarPesanan);

// PERULANGAN (forEach): menampilkan detail setiap pesanan
daftarPesanan.forEach(function (pesanan, index) {
  const totalHarga = pesanan.harga_tiket * pesanan.jumlah_tiket;

  console.log(
    `${index + 1}. [${pesanan.id_pesanan}] ${pesanan.nama_penumpang} | ` +
    `${pesanan.nama_kereta} (${pesanan.kelas}) | ` +
    `${pesanan.jumlah_tiket} tiket | Total: ${formatRupiah(totalHarga)}`
  );
});

// [2] Total pendapatan seluruh pesanan 
console.log("\n[2] TOTAL PENDAPATAN SELURUH PESANAN");
console.log(`Jumlah Pesanan   : ${daftarPesanan.length}`);
console.log(`Total Pendapatan : ${formatRupiah(hitungTotalPendapatan(daftarPesanan))}`);

//  [3] Filter pesanan berdasarkan kelas kereta 
console.log("\n[3] HASIL FILTER PESANAN BERDASARKAN KELAS KERETA");
const daftarKelas = ["Eksekutif", "Bisnis", "Ekonomi"];

// PERULANGAN (for...of): memfilter kelas satu per satu
for (const kelas of daftarKelas) {
  const hasilFilter = filterKelasKereta(daftarPesanan, kelas);

  console.log(`\n>> Kelas ${kelas} : ditemukan ${hasilFilter.length} pesanan`);

  if (hasilFilter.length > 0) {
    console.table(hasilFilter);
    console.log(`   Total pendapatan kelas ${kelas} : ${formatRupiah(hitungTotalPendapatan(hasilFilter))}`);
  } else {
    console.log("   Tidak ada pesanan pada kelas ini.");
  }
}

// [4] Rekap statistik penjualan 
console.log("\n[4] REKAP STATISTIK PENJUALAN");
console.table(hitungStatistik(daftarPesanan));

console.log("   Laporan selesai — data siap dikembangkan dengan DOM");

/* 7. MENAMPILKAN DATA KE HALAMAN (PREVIEW DOM SEDERHANA) */

const tbodyPesanan   = document.getElementById("tbody-pesanan");
const selFilterKelas = document.getElementById("filter-kelas");


// Memilih warna badge sesuai kelas kereta
function pilihBadgeKelas(kelas) {
  if (kelas === "Eksekutif") return "text-bg-warning";
  if (kelas === "Bisnis")    return "text-bg-primary";
  return "text-bg-success"; // kelas Ekonomi
}

// Menampilkan data pesanan ke dalam <tbody> tabel
function tampilkanTabel(data, idSorot = null) {
  let barisHTML = "";

  if (data.length === 0) {
    // Tampilan jika hasil filter kosong
    barisHTML = `
      <tr>
        <td colspan="8" class="text-center text-muted py-4">
          <i class="bi bi-search me-1"></i>Data pesanan tidak ditemukan
        </td>
      </tr>`;
    document.getElementById("tfoot-total").textContent = formatRupiah(0);
  } else {
    data.forEach(function (pesanan, index) {
      const totalHarga = pesanan.harga_tiket * pesanan.jumlah_tiket;
      const kelasBaris = pesanan.id_pesanan === idSorot ? "row-baru" : "";


      barisHTML += `
        <tr class="${kelasBaris}">
          <td>${index + 1}</td>
          <td><span class="badge text-bg-secondary">${pesanan.id_pesanan}</span></td>
          <td>${pesanan.nama_penumpang}</td>
          <td>${pesanan.nama_kereta}</td>
          <td><span class="badge ${pilihBadgeKelas(pesanan.kelas)}">${pesanan.kelas}</span></td>
          <td>${formatRupiah(pesanan.harga_tiket)}</td>
          <td class="text-center">${pesanan.jumlah_tiket}</td>
          <td class="fw-semibold">${formatRupiah(totalHarga)}</td>
        </tr>`;
    });

    // Total pada kaki tabel dihitung ulang dari data yang sedang tampil
    document.getElementById("tfoot-total").textContent =
      formatRupiah(hitungTotalPendapatan(data));
  }

  tbodyPesanan.innerHTML = barisHTML;
}

// Mengisi angka pada kartu statistik di bagian atas dashboard
function tampilkanStatistik() {
  const statistik = hitungStatistik(daftarPesanan);

  document.getElementById("stat-pesanan").textContent    = statistik.jumlahPesanan;
  document.getElementById("stat-tiket").textContent      = statistik.totalTiket;
  document.getElementById("stat-pendapatan").textContent = formatRupiah(statistik.totalPendapatan);
  document.getElementById("stat-premium").textContent    = formatRupiah(statistik.pendapatanPremium);
}

// EVENT: filter tabel dijalankan ulang saat pilihan kelas berubah
selFilterKelas.addEventListener("change", function () {
  tampilkanTabel(filterKelasKereta(daftarPesanan, selFilterKelas.value));
});

// Dipanggil saat halaman pertama kali dibuka
tampilkanTabel(daftarPesanan);
tampilkanStatistik();

/* 8. FITUR PESAN TIKET BARU */

const hargaDasarPerkelas = {
  Eksekutif: 750000,
  Bisnis: 450000,
  Ekonomi: 250000
};

const elemenModalPesan = document.getElementById("modalPesanTiket");
const modalPesan       = bootstrap.Modal.getOrCreateInstance(elemenModalPesan);
const toastSukses      = bootstrap.Toast.getOrCreateInstance(
                           document.getElementById("toast-sukses"),
                           { delay: 3500 }
                          );

const formPesanTiket = document.getElementById("form-pesan-tiket");
const inputNama      = document.getElementById("input-nama");
const inputKereta    = document.getElementById("input-kereta");
const selectKelas    = document.getElementById("input-kelas");
const inputHarga     = document.getElementById("input-harga");
const inputJumlah    = document.getElementById("input-jumlah");
const previewTotal   = document.getElementById("preview-total");

// ID pesanan otomatis berurutan: KAI-007, KAI-008, dst.
function buatIdPesananBaru() {
  const nomorBaru = daftarPesanan.length + 1;
  return "KAI-" + String(nomorBaru).padStart(3, "0");
}

// Mengisi ulang harga sesuai kelas & memperbarui preview total
function perbaruiHargaSesuaiKelas() {
  inputHarga.value = hargaDasarPerKelas[selectKelas.value] || 0;
  perbaruiPreviewTotal();
}

// Preview total bayar secara langsung (live update)
function perbaruiPreviewTotal() {
  const harga  = Number(inputHarga.value)  || 0;
  const jumlah = Number(inputJumlah.value) || 0;
  previewTotal.textContent = formatRupiah(harga * jumlah);
}

// EVENT: harga otomatis menyesuaikan ketika kelas kereta diganti
selectKelas.addEventListener("change", perbaruiHargaSesuaiKelas);

// EVENT: preview total mengikuti perubahan harga / jumlah tiket
inputHarga.addEventListener("input", perbaruiPreviewTotal);
inputJumlah.addEventListener("input", perbaruiPreviewTotal);

// EVENT: setiap kali modal dibuka, formulir di-refresh ke nilai awal
elemenModalPesan.addEventListener("show.bs.modal", function () {
  formPesanTiket.reset();
  formPesanTiket.classList.remove("was-validated");
  perbaruiHargaSesuaiKelas();
});

// EVENT: proses simpan pesanan saat formulir dikirim
formPesanTiket.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  // Validasi HTML5 + styling Bootstrap (kotak merah/hijau)
  formPesanTiket.classList.add("was-validated");
  if (!formPesanTiket.checkValidity()) {
    return; // hentikan proses jika masih ada isian tidak valid
  }

  // [1] Susun object pesanan baru dari isi formulir
  const pesananBaru = {
    id_pesanan:     buatIdPesananBaru(),
    nama_penumpang: inputNama.value.trim(),
    nama_kereta:    inputKereta.value,
    kelas:          selectKelas.value,
    harga_tiket:    Number(inputHarga.value),
    jumlah_tiket:   Number(inputJumlah.value)
  };

  // [2] Tambahkan ke array data utama
  daftarPesanan.push(pesananBaru);
  idPesananTerakhir = pesananBaru.id_pesanan;

  // [3] Kembalikan filter ke "Semua" agar pesanan baru langsung terlihat
  selFilterKelas.value = "Semua";

  // [4] Perbarui tabel & kartu statistik
  tampilkanTabel(daftarPesanan, idPesananTerakhir);
  tampilkanStatistik();

  // [5] Catat laporan ke console (sesuai ketentuan tugas)
  console.log(`\n[+] PESANAN BARU DITAMBAHKAN — ${pesananBaru.id_pesanan}`);
  console.table(pesananBaru);
  console.log(`    Total Pendapatan Terbaru : ${formatRupiah(hitungTotalPendapatan(daftarPesanan))}`);

  // [6] Tutup modal, reset formulir, tampilkan notifikasi sukses
  modalPesan.hide();
  formPesanTiket.reset();
  formPesanTiket.classList.remove("was-validated");
  perbaruiHargaSesuaiKelas();
  toastSukses.show();
});