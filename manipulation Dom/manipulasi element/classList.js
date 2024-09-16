// untuk itu lebih baik menggunakan ClassList
// element.classList
// ada add,remove,toggle,item,contains, dan replace

const p2 = document.querySelector(".p2");

// tambah
// ini akan menambah class label di p2
// jadi p2 memiliki 3 class yaiatu p2,label dan lebal
p2.classList.add("label", "lebal");

// remove
// ini menghapus kelas lebal
p2.classList.remove("lebal");

// toggle
// p2 sudah punya label belum, kalo belum tambahkan kalo sudah bernilai true
p2.classList.toggle("label");
// ini akan bernilai false karena label dikembalikan menjadi false
p2.classList.toggle("label");

// toggle bisa digunakan jika kita membuat saklar sebagai contoh untuk on dan off nya atau mode darklight

// item
p2.classList.item(0);
// mencari p2 urutan pertama

// contains
p2.classList.contains("label");
// makan akan bernilai true

//replace
p2.classList.replace("label", "hahaha");
// class label akan diganti oleh class hahaha
