export const videoPlayerInit = () => {

    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const player = document.querySelector('.player');



    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.replace('fa-pause', 'fa-play');
        } else {
            videoButtonPlay.classList.replace('fa-play', 'fa-pause');
        }
    }

    const playVideo = () => {
        videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
        toggleIcon();
    }

    const stopVideo = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        toggleIcon();
    }

    const addZero = n => n < 10 ? '0' + n : n;

    const timeUp = () => {
        const currentTime = videoPlayer.currentTime;
        const durationTime = videoPlayer.duration;

        let minutePassed = Math.floor(currentTime / 60);
        let secondPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(durationTime / 60);
        let secondTotal = Math.floor(durationTime % 60);

        videoProgress.value = (currentTime / durationTime) * 100;

        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
    }

    const changeProgress = () => {
        const durationTime = videoPlayer.duration;
        const valueTime = videoProgress.value;
        videoPlayer.currentTime = (valueTime * durationTime) / 100;

    }

    videoPlayer.addEventListener('click', playVideo);
    videoPlayer.addEventListener('timeupdate', timeUp);
    videoButtonPlay.addEventListener('click', playVideo);
    videoButtonStop.addEventListener('click', stopVideo);
    videoProgress.addEventListener('change', changeProgress);

    player.addEventListener('click', () => {
        videoPlayer.pause();
        toggleIcon();
    });
}