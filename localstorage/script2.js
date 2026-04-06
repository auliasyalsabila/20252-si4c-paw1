let npm = document.getElementById("npm");
let nama = document.getElementById("nama");


function simpan(){
    console.log(npm.value)
    console.log(nama.value)

    // localStorage.setItem("npm",npm.value)
    // localStorage.setItem("nama", nama.value)

    //cek lokalstorage jika localstorage blum ada isi/value
    if(localStorage.getItem("mahasiswa")===null){
        //simpan array kosong
        localStorage.setItem("mahasiswa", "[]")
    }
    //panggil localstorage (konversi string ke object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan npm dan nama value ke dalam object data
    data.push({
        npm : npm.value,
        nama : nama.value
    })
    console.log(data)

    //simpan data terbaru ke dalam localstorage
    //konversi dr object menjai string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    tampil()
}

function tampil(){
    //panggil dl local stotageny
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML=""

    //lakukan perulangan
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama}<li>` 
    });
}

//jalankan function tampil
tampil()
