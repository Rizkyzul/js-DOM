// InnerHtml mengubah isi sebuah teks yang terseleksi

const h1 = document.getElementById(judul);
judul.innerHTML = "<i>Rizky Zulkarnaen</i>";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "Hello dunia";

// inner layaknya html biasa biasa ditambah div atau p bahkan lainnya

// element style
const judul = document.querySelector("#judul");
judul.style.color = "blue";
judul.style.backgroundColor = "Black";

// SetAttribute
//   getAttribute
//      removeAttribute

// set ini akan menimpa
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "Rizky"); //tambah attribute baru

// get (isi dari sebuah attribute)
const a = document.querySelector("section#a a");
a.getAttribute("href");
judul.getAttribute("id");

// menghilangkan sebuah attribute
// remove attribute
a.removeAttribute("href");

// untuk itu lebih baik menggunakan ClassList
// element.classList
// ada add,remove,toggle,item,contains, dan replace
