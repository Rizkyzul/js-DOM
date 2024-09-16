// memilih element tergantung kriteria tertentu

// document.querySelector
// query = menanyakan mengenai selector
// selector itu selector css

const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.backgroundColor = "Blue";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// querySelectorAll
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "black";
    p[i].style.color = "blue";
}
p[1].innerHTML = "Ini diubah oleh javascript";
