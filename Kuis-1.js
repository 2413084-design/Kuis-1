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
        let bonusTetap = this.gajiKaryawanTetap *  persenanTetap / 100;
        let totalGajiKaryawanTetap = this.gajiKaryawanTetap + bonusTetap;
        return console.log(`Gaji karyawan tetap adalah ${this.gajiKaryawanTetap} dengan bonus `+ bonusTetap +`\n`+`Total gaji karyawan ${this.nama} adalah ${totalGajiKaryawanTetap}`);
    }
}

class KaryawanKontrak extends Karyawan {
    gajiKaryawan(nama, persenanKontrak) {
        super.nama = nama;
        let bonusKontrak = this.gajiKaryawanKontrak * persenanKontrak / 100;
        let totalGajiKaryawanKontrak = this.gajiKaryawanKontrak + bonusKontrak;
        return console.log(`Gaji karyawan kontrak adalah ${this.gajiKaryawanKontrak} dengan bonus ` + bonusKontrak + `\n` + `Total gaji karyawan ${this.nama} adalah ${totalGajiKaryawanKontrak}`);
    }
}

const karyawanTetap = new KaryawanTetap();
karyawanTetap.gajiKaryawan("Budi",10);

const karyawanKontrak = new KaryawanKontrak();
karyawanKontrak.gajiKaryawan("Sita",5);
