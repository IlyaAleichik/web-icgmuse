export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio');
    const radioCover = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');
    const player = document.querySelector('.player');


    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;


    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.replace('fa-stop', 'fa-play');
        } else {
            radio.classList.add('play');
            radioStop.classList.replace('fa-play', 'fa-stop');
        }
    }

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }

    radioNavigation.addEventListener('change', event => {

        const target = event.target;
        const parrent = target.closest('.radio-item');
        const title = parrent.querySelector('.radio-name').textContent;
        const image = parrent.querySelector('.radio-img').src;


        selectItem(parrent);
        radioHeaderBig.textContent = title;
        radioCover.src = image;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100;
    })


    player.addEventListener('click', () => {
        audio.pause();
        changeIconPlay();
    });

}