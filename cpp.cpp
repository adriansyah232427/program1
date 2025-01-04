#include <iostream>
#include <string>
using namespace std;

void tampilMenu() {
    cout << "\nMenu Utama:\n";
    cout << "1. Tambah Pengeluaran\n";
    cout << "2. Tampilkan Total Pengeluaran\n";
    cout << "3. Tampilkan Sisa Saldo\n";
    cout << "4. Keluar\n";
}

int main() {
    double saldo, totalPengeluaran = 0;
    string kategori;
    double jumlah;
    
    cout << "Selamat datang di Aplikasi Keuangan Harian!\n";
    cout << "Masukkan saldo awal Anda: ";
    cin >> saldo;

    int pilihan;
    while (true) {
        tampilMenu();
        cout << "Pilih opsi (1-4): ";
        cin >> pilihan;

        if (pilihan == 1) {
            cout << "Masukkan nama kategori pengeluaran: ";
            cin >> kategori;
            cout << "Masukkan jumlah pengeluaran: ";
            cin >> jumlah;

            totalPengeluaran += jumlah;
            saldo -= jumlah;

            cout << "Pengeluaran berhasil ditambahkan!\n";
        } 
        else if (pilihan == 2) {
            cout << "Total pengeluaran Anda sejauh ini: " << totalPengeluaran << endl;
        } 
        else if (pilihan == 3) {
            cout << "Sisa saldo Anda: " << saldo << endl;
        } 
        else if (pilihan == 4) {
            cout << "Terima kasih telah menggunakan Aplikasi Keuangan Harian!\n";
            break;
        } 
        else {
            cout << "Pilihan tidak valid, silakan pilih lagi!\n";
        }
    }

    return 0;
}