//alert("belajar java script");

//ambil value nama
function kirim() {
    let nama = document.getElementById('nama').value;
    let saran = document.getElementById('saran').value;

    console.log("nama : " + nama);
    console.log("saran : "+saran);

    //tampilkan nama ke ul id = list-pesan
    document.getElementById('list-pesan').innerHTML += "<tr><td>"+nama+"</td><td>"+saran+"</td></tr>" ;
} 
