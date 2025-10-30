class Karyawan {
    constructor(nama) {
        this.nama = nama;
        this.gajiKaryawanTetap = 8000000;
        this.gajiKaryawanKontrak = 6000000;
    }
    gajiKaryawan() {
        console.log(`gaji karyawan adalah `);
    }
}

class KaryawanTetap extends Karyawan {
    gajiKaryawan(nama, persenanTetap) {
        super.nama = nama;
        let totalGajiKaryawanTetap = this.gajiKaryawanTetap + (this.gajiKaryawanTetap *  persenanTetap / 100);
        return console.log(`Total gaji karyawan ${this.nama} adalah ${totalGajiKaryawanTetap}`);
    }
}

class KaryawanKontrak extends Karyawan {
    gajiKaryawan(nama, persenanKontrak) {
        super.nama = nama;
        let totalGajiKaryawanKontrak = this.gajiKaryawanKontrak + (this.gajiKaryawanKontrak * persenanKontrak / 100);
        return console.log(`Total gaji karyawan ${this.nama} adalah ${totalGajiKaryawanKontrak}`);
    }
}

const karyawanTetap = new KaryawanTetap();
karyawanTetap.gajiKaryawan("Budi",10);

const karyawanKontrak = new KaryawanKontrak();
karyawanKontrak.gajiKaryawan("Sita",5);