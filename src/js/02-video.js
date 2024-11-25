import Player from "@vimeo/player";
const _throttle = require("lodash.throttle");

const iframe = document.querySelector("iframe");
const iframePlayer = new Player(iframe);

localStorage.getItem("videoplayer-current-time")
  ? iframePlayer.setCurrentTime(
      localStorage.getItem("videoplayer-current-time")
    )
  : 0;

iframePlayer.on(
  "timeupdate",
  _throttle((event) => {
    console.log("Time update event fired:", event.seconds);
    localStorage.setItem("videoplayer-current-time", event.seconds.toString());
  }, 1000)
);
