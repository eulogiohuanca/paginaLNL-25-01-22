const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguersa")[0];
const menuHamburguersa = document.getElementById("hamburguersa");
let abierto = false;

const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

window.addEventListener("click", function (e) {
    toggleMenu();
})

hamburguesa.addEventListener("click", function (e) {
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto = true;
    }else {
        abierto = false;
    }
})

window.addEventListener("click", function (e) {
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuHamburguersa){
            toggleMenu();
            abierto = false;
        }
    }
})

window.addEventListener("resize", function(e){
    if(this.screen.width > 768){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})