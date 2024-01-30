alert('Pilih menu \n 1. Nasi goreng Rp10.000,00 \n 2. Mie Ayam Rp8.000,00 \n 3. Bubur Ayam Rp10.000,00');

let makanan = prompt('Apa yang kamu inginkan?');
let jumlah = prompt('Jumlah makanan yang kamu inginkan');

if(makanan == 'Nasi Goreng'){
    alert("Pesanan Kamu adalah \n" + makanan + "\n Dengan jumlah " + jumlah);
}else if (makanan == 'Mie Ayam'){
    alert("Pesanan Kamu adalah \n" + makanan + "\n Dengan jumlah " + jumlah);
}else if (makanan == 'Bubur Ayam'){
    alert("Pesanan Kamu adalah \n" + makanan + "\n Dengan jumlah " + jumlah);
}else {
    alert("Makanan anda tidak terdapat pada menu.")
}