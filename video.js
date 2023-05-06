// Get references to the video element and player controls
const video = document.getElementById('video');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const progressBar = document.getElementById('progress-bar');

// Play the video
function playVideo() {
  video.play();
}

// Pause the video
function pauseVideo() {
  video.pause();
}

// Update the progress bar as the video plays
function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

// Seek to a specific time in the video
function seekVideo(e) {
  const pos = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = pos;
}

// Event listeners for play/pause buttons
playButton.addEventListener('click', playVideo);
pauseButton.addEventListener('click', pauseVideo);

// Update progress bar on time update
video.addEventListener('timeupdate', updateProgressBar);

// Seek video when the progress bar is clicked
progressBar.addEventListener('click', seekVideo);