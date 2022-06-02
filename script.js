let video = document.getElementsByClassName("videosol")[1];

function play() {
  video.play();
  video.playbackRate = 1;
}
function pause() {
  video.pause();
}
function stop() {
  video.pause();
  video.currentTime = 0;
}
function dec() {
  video.playbackRate -= 0.1;
}
function inc() {
  video.playbackRate += 0.1;
}

function retroceder() {
  video.playbackRate -= 10;
}
function avanca() {
  video.playbackRate += 10;
}
