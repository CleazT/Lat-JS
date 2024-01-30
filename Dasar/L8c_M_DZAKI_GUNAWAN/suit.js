let pilihanUser = prompt("Pilih antara Gajah, Orang, atau Semut");
let pilihanKomputer = Math.random();

if (pilihanKomputer < 0.34) {
    pilihanKomputer = "Gajah";
} else if (pilihanKomputer <= 0.67) {
    pilihanKomputer = "Orang";
} else {
    pilihanKomputer = "Semut";
}

function getResult(pilihanUser, pilihanKomputer) {
    if (pilihanUser === pilihanKomputer) {
        return "Hasil seri!";
    } else if (pilihanUser != "Gajah", "Orang", "Semut") {
        return "Anda tidak memilih apa apa.."
    } else if(
        (pilihanUser === "Gajah" && pilihanKomputer === "Orang") ||
        (pilihanUser === "Orang" && pilihanKomputer === "Semut") ||
        (pilihanUser === "Semut" && pilihanKomputer === "Gajah")
    ) {
        return "Anda menang!";
    } else {
        return "Anda kalah!";
    }
}

alert("Komputer memilih: " + pilihanKomputer);

let hasil = getResult(pilihanUser, pilihanKomputer);
alert(hasil);

//Dibawah ini adalah cara if else rendahan :skull:

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