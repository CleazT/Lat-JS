// let grade = 100;
let grade = prompt("Masukan Nilai")
let nilai

if(grade < 40){
    nilai = 'E'
}else if((grade < 65) && (grade >= 40)){
    nilai = 'D'
}else if((grade < 75) && (grade >= 65)){
    nilai = 'C'
}else if((grade < 85) && (grade >= 75)){
    nilai = 'B'
}else if((grade < 100) && (grade >= 85)){
    nilai = 'A'
}

alert(nilai)