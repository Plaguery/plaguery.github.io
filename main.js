class Song {
  constructor(title, src) {
    this.title = title;
    this.src = src;
  }

  getSrc() {
    return this.src;
  }

  getTitle() {
    return this.title;
  }
}

//sets up all the diff buttons
const player = document.querySelector("#music");
const playButton = document.querySelector("#play");
const currPlaying = document.querySelector("#current");
const skipButton = document.querySelector("#skip");
const replayButton = document.querySelector("#replay");
const volume = document.querySelector("#volume");
var isPlaying = false;
var currentSong = 0;

const trackList = [
  new Song("Take Me Out", "audio/takemeout.mp3"),
  new Song("New Perspective", "audio/newperspective.mp3"),
  new Song("Baby One More Time", "audio/onemoretime.m4a"),
  new Song("Chelsea Dagger", "audio/chelsea.m4a"),
];

//sets up play button
playButton.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    player.play();
    playButton.innerHTML = "❚❚";
  } else {
    player.pause();
    playButton.innerHTML = "▶︎";
  }
});

//get the volume value
volume.oninput = () => {
  player.volume = volume.value / 100.0;
};

//skips a song
skipButton.addEventListener("click", () => {
  currentSong += 1;
  changeSong();
});

//autoplays the next song
player.addEventListener("ended", () => {
  currentSong += 1;
  changeSong();
});

//replays/goes back to prev song
replayButton.addEventListener("click", () => {
  //goes back a song
  if (player.currentTime <= 2) {
    currentSong -= 1;
    changeSong();
  }
  //restarts song if more than 1 second has passed
  else {
    changeSong();
  }
});

//changes song
function changeSong() {
  //checks if overflow & loops back around
  if (currentSong >= trackList.length) {
    currentSong = 0;
  } else if (currentSong < 0) {
    currentSong = trackList.length - 1;
  }

  //changes
  const song = trackList[currentSong];
  player.src = song.getSrc();
  player.load();
  player.play();

  //updates currently playing
  currPlaying.innerHTML = song.getTitle();
}
