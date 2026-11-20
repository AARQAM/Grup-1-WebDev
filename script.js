const inputCari = document.getElementById("input-cari");
const semuaItem = document.querySelectorAll("#daftar-item li");

// Dengarkan setiap ketikan pengguna di dalam kotak pencarian
inputCari.addEventListener("input", function () {
  // Ambil kata kunci dan ubah ke huruf kecil semua agar pencarian tidak kaku
  const kataKunci = inputCari.value.toLowerCase();

  // Periksa satu per satu item di dalam daftar
  semuaItem.forEach(function (item) {
    const teksItem = item.textContent.toLowerCase();

    // Jika teks item mengandung kata kunci, tampilkan; jika tidak, sembunyikan
    if (teksItem.includes(kataKunci)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});