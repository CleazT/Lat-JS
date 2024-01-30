let user = document.getElementById("user");
let pw = document.getElementById("pass");

function login() {
    if((user.value === "admin") && (pw.value === "admin")) {
        alert("Selamat datang Admin");
        window.location.href = "admin.html";
    } else {
        alert("Username atau Password anda salah!")
    }
}