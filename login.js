const clipping = document.querySelector('.login-container__cliping');

const change = document.querySelector('.login-container__change')


setInterval( event => {
    let newColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.documentElement.style.
    setProperty('--clipping-bgcolor', newColor);

    let x = Math.floor(Math.random() * 101);  
    let y = Math.floor(Math.random() * 101);  
    let radius = Math.floor(Math.random() * 101) / 2; 
    clipping.style.clipPath = `circle(${radius}% at ${x}% ${y}%)`;
}, 1000);



const chmod = document.querySelector('.login-container__change');

chmod.addEventListener('click', event => {
    let signUp = chmod.innerText == 'Sign Up';
    let cl = event.target.style.clipPath;
    event.target.style.clipPath = 'circle(150% at 87% -1%)';
    change.style.color = 'rgba(0, 0, 0, 0)';
    change.style.backgroundColor = signUp ? 'var(--orange)' : 'var(--choco)';
    setTimeout(()=> {
        document.querySelector('#submitbtn').value = chmod.innerText;
        document.querySelector('.login-container').
        style.backgroundColor = signUp ? 'var(--choco)' : 'var(--orange)';
        event.target.style.clipPath = cl;
        change.innerText = signUp ? 'Log In' : 'Sign Up';
        change.style.color = signUp ? 'var(--black)' : 'var(--white)';
    }, 1000);
});