// DOM Selection

// getElementById
const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "black";
judul.innerHTML = "Belajar DOM";
// innerHTML untuk mengganti text lewat Js

// document.getElementsByTagName
// mengembalikan HTMLCollection
const P = document.getElementsByTagName("p");
// Menggunakan Looping
for (let i = 0; i < P.length; i++) {
    P[i].style.color = "white";
}

// menggunakan manual
P[0].style.backgroundColor = "red";
P[1].style.backgroundColor = "red";
P[2].style.backgroundColor = "red";
P[3].style.backgroundColor = "red";

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "55px";

// document.getElementByClassName
// mengembalikan HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini dibubah lewat Js";
