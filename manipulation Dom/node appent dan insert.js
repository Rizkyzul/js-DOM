// dom manipulation
// buat element baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf baru nih");
// simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);

// pakai append Child(simpan diakhir parent)
// simpan p baru diakhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// pakai insert node
const liBaru = document.createElement("li");
const liTextBaru = document.createTextNode("items baru");
liBaru.appendChild(liTextBaru);

const ul = document.querySelector("section#b ul");
const li2 = document.querySelector("section#b ul li:nth-child(2)");
// atau bisa ini pilih salah satu
// const li = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2);


