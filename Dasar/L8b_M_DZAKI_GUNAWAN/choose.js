alert('Pilih menu \n 1. Nasi goreng Rp10.000,00 \n 2. Mie Ayam Rp8.000,00 \n 3. Bubur Ayam Rp10.000,00');

let makanan = prompt('Apa yang kamu inginkan?');
let jumlah = prompt('Jumlah makanan yang kamu inginkan');
let harga

    if((makanan == 'Nasi Goreng') && ('Bubur Ayam')){
        harga = 10000 * jumlah
    } else {
        harga = 8000 * jumlah
    }

if(makanan == 'Nasi Goreng'){
    alert("Pesanan Kamu adalah \n" + makanan + "\n Dengan jumlah " + jumlah + "\n Harga : " + harga);
}else if (makanan == 'Mie Ayam'){
    alert("Pesanan Kamu adalah \n" + makanan + "\n Dengan jumlah " + jumlah + "\n Harga : " + harga);
}else if (makanan == 'Bubur Ayam'){
    alert("Pesanan Kamu adalah \n" + makanan + "\n Dengan jumlah " + jumlah + "\n Harga : " + harga);
}else {
    alert("Makanan anda tidak terdapat pada menu.")
}