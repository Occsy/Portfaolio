/*theme buttom */
let circle = document.querySelector("#circle");
let container = document.querySelector(".button-container");
let body = document.querySelector("body");

circle.addEventListener("click", ()=>{
    circle.classList.toggle("lightmodebutton");
    circle.setAttribute("style", "transition: transform 1s ease;");
    container.classList.toggle("borders");
    body.classList.toggle("lightmode");
    body.setAttribute("style","transition: background 1s ease")
    
});



