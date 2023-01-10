import React from 'react'

function VideoPlayer() {
    return (
const waitForLoad = (video, cb) => {
    const interval = setInterval(()=>{
        if(video.readyState >= 3){
            clearInterval(interval);
            cb();
        }
    }, 100);
}
window.onload = function () {
    const video = document.getElementById("video");
    // Wait for the video to load 
    waitForLoad(video, () => {
        // We can't call video.play directly, because it can only be initiated by a user gesture 
        alert(`The video is loaded, you can click "Play"`);
    });

    // Implement the custom controls
    const playButton = document.getElementById("play-pause");
    const muteButton = document.getElementById("mute");
    const fullScreenButton = document.getElementById("full-screen");

    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    
    playButton.addEventListener("click", function () {
        if (video.paused == true) {
            video.play();
            playButton.innerHTML = "Pause";
        } else {
            video.pause();
            playButton.innerHTML = "Play";
        }
    });
    muteButton.addEventListener("click", function () {
        if (video.muted == false) {
            video.muted = true;
            muteButton.innerHTML = "Unmute";
        } else {
            video.muted = false;
            muteButton.innerHTML = "Mute";
        }
    });
    fullScreenButton.addEventListener("click", function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    });
    seekBar.addEventListener("change", function () {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });
    video.addEventListener("timeupdate", function () {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });
    seekBar.addEventListener("mousedown", function () {
        video.pause();
    });
    seekBar.addEventListener("mouseup", function () {
        video.play();
    });
    volumeBar.addEventListener("change", function () {
        video.volume = volumeBar.value;
    });
}
}
)