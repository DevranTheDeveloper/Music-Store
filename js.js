const div = document.querySelector(".myDiv");
const p = "<p>Birinci Paragraf</p>"
const p2 = "<p>İkinci Paragraf</p>"

div.insertAdjacentHTML("beforeend", p + p2)