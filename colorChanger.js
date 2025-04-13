const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        
        if (event.target.id === "yellow") {
          body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === "random") {
          body.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )})`;
          button.style.background = body.style.backgroundColor;
        }
    })
});
