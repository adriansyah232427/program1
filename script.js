let saldo = 0;
let totalPengeluaran = 0;

// Tombol Set Saldo
document.getElementById("setSaldo").addEventListener("click", function () {
    const saldoInput = document.getElementById("saldo").value;
    saldo = parseFloat(saldoInput);

    if (isNaN(saldo) || saldo <= 0) {
        alert("Saldo awal harus berupa angka yang valid!");
        return;
    }

    // Menampilkan menu utama dan menyembunyikan form saldo
    document.getElementById("saldoForm").style.display = "none";
    document.getElementById("menu").style.display = "block";

    alert(`Saldo awal Anda adalah Rp${saldo}`);
});

// Tombol Tambah Pengeluaran
document.getElementById("addExpenseBtn").addEventListener("click", function () {
    document.getElementById("expenseForm").style.display = "block";
});

// Tambah Pengeluaran
document.getElementById("submitExpense").addEventListener("click", function () {
    const kategori = document.getElementById("kategori").value;
    const jumlahInput = document.getElementById("jumlah").value;
    const jumlah = parseFloat(jumlahInput);

    if (kategori.trim() === "" || isNaN(jumlah) || jumlah <= 0) {
        alert("Kategori harus diisi, dan jumlah pengeluaran harus angka valid!");
        return;
    }

    if (saldo - jumlah < 0) {
        alert("Saldo tidak cukup untuk pengeluaran ini!");
        return;
    }

    totalPengeluaran += jumlah;
    saldo -= jumlah;

    // Menampilkan pesan sukses
    document.getElementById("message").textContent = `Pengeluaran berhasil ditambahkan! Kategori: ${kategori}, Jumlah: Rp${jumlah}`;
    document.getElementById("message").style.display = "block";

    setTimeout(function () {
        document.getElementById("message").style.display = "none";
    }, 3000);

    // Menyembunyikan form pengeluaran
    document.getElementById("expenseForm").style.display = "none";
});

// Tampilkan Total Pengeluaran
document.getElementById("showTotalBtn").addEventListener("click", function () {
    alert(`Total pengeluaran Anda sejauh ini adalah Rp${totalPengeluaran}`);
});

// Tampilkan Sisa Saldo
document.getElementById("showBalanceBtn").addEventListener("click", function () {
    alert(`Sisa saldo Anda adalah Rp${saldo}`);
});

// Keluar
document.getElementById("exitBtn").addEventListener("click", function () {
    alert("Terima kasih telah menggunakan Aplikasi Keuangan Harian!");
    window.location.reload();
});
