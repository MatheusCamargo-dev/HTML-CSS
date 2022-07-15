const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const vw = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const jump = () =>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500);
}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 16 && pipePosition>0 && marioPosition <16){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}vmin`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}vmin`;

        mario.src = './img/game-over.png';
        mario.style.width = '10vmin';
        mario.style.marginLeft= '3vmin';

        clearInterval(loop);
    }

    
},10);
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);