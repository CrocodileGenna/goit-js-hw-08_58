import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const inframe = document.querySelector('#vimeo-player');
const playIn = new Player(inframe);
const STORAGE_KEY = 'videoplayer-current-time';

playIn.on('timeupdate', throttle(setSecond, 1000));

function setSecond(s) {
  const secondString = JSON.stringify(s);
  localStorage.setItem(STORAGE_KEY, secondString);
}
const getSecond = localStorage.getItem(STORAGE_KEY);
const parceGetSecond = JSON.parse(getSecond);
const secondValue = parceGetSecond.seconds;

playIn
  .setCurrentTime(secondValue)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
