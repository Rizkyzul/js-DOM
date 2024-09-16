const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const textBaru = document.createTextNode("item Baru");
    liBaru.appendChild(textBaru);
    ul.appendChild(liBaru);
});

// onclick
const p3 = document.querySelector(".p3");
p3.addEventListener("click", function () {
    p3.style.backgroundColor = "black";
});
p3.addEventListener("click", function () {
    p3.style.color = "white";
});
