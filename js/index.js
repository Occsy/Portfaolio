/*theme buttom */
let themeresult;
let theme = document.querySelector('.theme');
function thememode() {
    let background = document.querySelector('body');
    background.classList.toggle('lightmode');   
}

theme.addEventListener('click', thememode);
