const p3 = document.querySelector(".p3");

function ubahWarna() {
    p3.style.backgroundColor = "lightblue";
}

function ubahWarnaP2() {
    p2.style.backgroundColor = "red";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;
