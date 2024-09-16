const sectionA = document.getElementById("a");
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

// Replace
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2New = document.createElement("h2");
const textH2New = document.createTextNode("Judul Baru");
h2New.appendChild(textH2New);

sectionB.replaceChild(h2New, p4);

h2New.style.backgroundColor = "black";
h2New.style.color = "blue";
