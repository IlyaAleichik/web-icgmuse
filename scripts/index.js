import { radioPlayerInit } from './radioplayer.js';
import { videoPlayerInit } from './videoplayer.js';
import { musikPlayerInit } from './musikplayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');


const deactivationPlayer = () => {
    playerBtn.forEach((btn) => {
        btn.classList.remove('active');
    });
    playerBlock.forEach((block) => {
        block.classList.remove('active');
    });
};

playerBtn.forEach((btn, i) => {

    console.log(btn);
    console.log(playerBlock[i]);

    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })

})



videoPlayerInit();

radioPlayerInit();

musikPlayerInit();