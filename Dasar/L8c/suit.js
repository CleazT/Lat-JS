let pilihanUser = prompt("Pilih antara Gajah, Orang, atau Semut");

let pilihanKomputer = Math.random();

if (pilihanKomputer < 0.34) {
    pilihanKomputer = "Gajah";
} else if(pilihanKomputer <= 0.67) {
    pilihanKomputer = "Orang";
} else {
    pilihanKomputer = "Semut";
}

let hasil = function(pilihanKomputer, pilihanUser){
    if((pilihanKomputer == "Gajah") && (pilihanUser == "Gajah")){
        hasil = "Seri"
    } else if((pilihanKomputer == "Gajah") && (pilihanUser == "Orang")){
        hasil = "Kalah"
    } else if((pilihanKomputer == "Gajah") && (pilihanUser == "Semut")){
        hasil = "Menang"
    } else if((pilihanKomputer == "Orang") && (pilihanUser == "Gajah")){
        hasil = "Menang"
    } else if((pilihanKomputer == "Orang") && (pilihanUser == "Orang")){
        hasil = "Seri"
    } else if((pilihanKomputer == "Orang") && (pilihanUser == "Semut")){
        hasil = "Kalah"
    } else if((pilihanKomputer == "Semut") && (pilihanUser == "Gajah")){
        hasil = "Kalah"
    } else if((pilihanKomputer == "Semut") && (pilihanUser == "Orang")){
        hasil = "Menang"
    } else if((pilihanKomputer == "Semut") && (pilihanUser == "Semut")){
        hasil = "Seri"
    } else {
        hasil = "Kamu tidak memilih apa apa"
    }
}

alert("Komputer mengeluarkan " + pilihanKomputer + "\nKamu mengeluarkan " + pilihanUser + "Hasil " + hasil)

// if ((pilihanKomputer == "Gajah") && (pilihanUser == "Gajah")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nSeri");
// }else if((pilihanKomputer == "Gajah") && (pilihanUser == "Orang")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nKamu Kalah");
// }else if((pilihanKomputer == "Gajah") && (pilihanUser == "Semut")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nKamu Menang");
// }else if((pilihanKomputer == "Orang") && (pilihanUser == "Gajah")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nKamu Menang");
// }else if((pilihanKomputer == "Orang") && (pilihanUser == "Orang")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nSeri");
// }else if((pilihanKomputer == "Orang") && (pilihanUser == "Semut")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nKamu Kalah");
// }else if((pilihanKomputer == "Semut") && (pilihanUser == "Gajah")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nKamu Kalah");
// }else if((pilihanKomputer == "Semut") && (pilihanUser == "Orang")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nKamu Menang");
// }else if((pilihanKomputer == "Semut") && (pilihanUser == "Semut")){
//     alert("Komputer mengeluarkan " + pilihanKomputer + "\ndan kamu mengeluarkan " + pilihanUser + "\nSeri");
// }