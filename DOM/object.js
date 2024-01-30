var siswa = new Object();
siswa.namaDepan = "Dzaki";
siswa.alamat = "Cibiru";
siswa.namaBelakang = "Gunawan";
siswa.namaLengkap = function(){
    return siswa.namaDepan + " " + siswa.namaBelakang;
};

//JSON

var siswa2 = {
    namaDepan : "Dzaki",
    namaBelakang : "Gunawan",
    namaLengkap : function(){
        return this.namaDepan + " " + siswa.namaBelakang;
    }
}

alert("Nama: " + siswa2.namaLengkap());
alert("Nama: " + siswa.namaLengkap());