var siswa = new Object();
siswa.namaDepan = "Dzaki";
siswa.alamat = "Cibiru";
siswa.namaBelakang = "Gunawan";
siswa.namaLengkap = function(){
    return siswa.namaDepan + " " + siswa.namaBelakang;
};

alert("Nama: " + siswa.namaLengkap());