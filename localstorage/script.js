//simpan ke localstorage
localStorage.setItem("npm",123);

//baca data dr localstorage
//tampil di console
console.log(localStorage.getItem("npm"))

//tampilkan di paragraf id=npm
document.getElementById("npm").innerHTML=localStorage.getItem("npm")