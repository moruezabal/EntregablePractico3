const character = document.getElementById('character');
const game = document.getElementById('game'); //Background
const body = document.getElementById("body");
const timer = document.getElementById("time");
const coin = document.getElementById("money");
const obs =  document.getElementById("obs");
const cloud =  document.getElementById("cloud");

let currentCharacter = "female";

const sprites = {

    "male" : {
        idle : {
            width : '1061px',
            path : 'sprites/male/idle.png'
        },
        running : {
            width : '1587px',
            path : 'sprites/male/running.png'
        },
        attack: {
            width : '2165px',
            path : 'sprites/male/attack.png'
        },
        jump: {
            width : '1501px',
            path : 'sprites/male/jump.png'
        },
        dead: {
            width: '1936px',
            path: 'sprites/male/dead.png'
        }

    },

    "female" : {
        idle : {
            width : '1163px',
            path : 'sprites/female/idle.png'
        },
        running : {
            width : '1448px',
            path : 'sprites/female/running.png'
        },
        attack: {
            width : '1855px',
            path : 'sprites/female/attack.png'
        },
        jump: {
            width : '1472px',
            path : 'sprites/female/jump.png'
        },
        dead: {
            width: '1930px',
            path: 'sprites/female/dead.png'
        }
    }
}

body.addEventListener('keyup', (event) =>{
        let key = event.key;
      
        if (key == " ") {
            startGame(); // Empieza a correr si apretas la barra espaciadora
        }
       
        
    
})

function startGame(){
    game.classList.remove('backgroundStatic')
    character.classList.remove('idleFemale');
    timer.classList.remove('time');
    coin.classList.remove('money');
    obs.classList.remove('obs');
    cloud.classList.remove('cloud');



    document.documentElement.style.setProperty('--sprite-width', sprites[currentCharacter].running.width);
    game.classList.add('backgroundDinamic');
    character.classList.add('runFemale');
    timer.classList.add('timer');
    coin.classList.add('coin');
    obs.classList.add('shuriken');
    cloud.classList.add('cloudDinamic');
}