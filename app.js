let header = document.querySelector(".container")
let UbiPrin = window.pageYOffset

window.addEventListener("scroll", e => {
    let UbiActu = window.pageYOffset

    if(UbiPrin >= UbiActu) {
        header.style.top = "0px"
    }else {
        header.style.top = "-80px"
    }

    UbiPrin = UbiActu
})

const text = ["Diseño Web", "Maquetado Web", "Prototipado"];
let conut = 0
let index = 0
let currentext = "";
let letter = "";

(function type(){
    if (conut === text.length){
        conut = 0;
    }

    currentext = text[conut]
    letter = currentext.slice(0, ++index)

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentext.length){
        conut ++;
        index = 0;
    }

    setTimeout(type, 500)
}());

