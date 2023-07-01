const useTypewriter = (target) => {
    let index = 0
    const text = template || target.textContent
    target.className = target.className.replace("typewriter-start", "")
    const write = setInterval(() => {
        target.textContent = text.slice(0, ++index)
        if (index === text.length) clearInterval(write)
    }, 50)
}

// Attach the effect to any element
const target = document.querySelector("#my-text")
const template =
    `let background = document.querySelector('body');
  let boton = document.querySelector('#let-me-see');
  let hola = document.querySelector('#hola');
  let i = 1;
  
  function visible() {
      i++;
      let result = i % 2;
      if (result != 1) {
          background.style.backgroundColor = 'black';
          hola.style.color = 'white';
          console.log(result);
  
      } else {
          hola.style.color = 'black';
          background.style.backgroundColor = 'white'
          console.log(result);
      }
  }
  
  boton.addEventListener('click', visible);
  
  function seeHi() {
      hola.style.color = 'black';
  }
  
  boton.addEventListener('click', seeHi, {once:true});`
useTypewriter(target, template);