var tombol1 = document.getElementById("tombol1");
var kotak = document.getElementById("kotak");
var tombol2 = document.getElementById("tombol2");
var tombol3 = document.getElementById("tombol3");
var tombol4 = document.getElementById("tombol4");

tombol1.addEventListener('click', function() {
    kotak.style.backgroundColor = "#bada55";
    kotak.style.transition = '1s';
});

tombol2.addEventListener('click', function(){
    kotak.style.transform = "rotate(180deg) scale(0)";
    kotak.style.opacity = 0
    kotak.style.transition = '1s';
})

tombol3.addEventListener('click', function(){
    kotak.style.transform = "translateY(100px)";
    kotak.style.opacity = 0
    kotak.style.transition = '1s';
})

// tombol4.addEventListener('click', function(){
//     kotak.style.transform = "scaleY(.01)";
//     kotak.style.transform = "scaleX(0)";
//     kotak.style.transition = '.2s';
// })

tombol4.onclick = function(){
    kotak.className = 'anim1';
}