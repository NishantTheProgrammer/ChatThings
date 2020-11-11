const clipping = document.querySelector('.login-container__cliping');


setInterval( event => {
    let newColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.documentElement.style.
    setProperty('--clipping-bgcolor', newColor);

    let x = Math.floor(Math.random() * 101);  
    let y = Math.floor(Math.random() * 101);  
    let radius = Math.floor(Math.random() * 101) / 2; 
    clipping.style.clipPath = `circle(${radius}% at ${x}% ${y}%)`;
}, 1000);