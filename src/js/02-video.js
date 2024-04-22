import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data);

    const currentTimer = data.seconds;
    console.log(currentTimer);

    localStorage.setItem('videoplayer-current-time', currentTimer);
  }, 1000)
);
const actualTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(actualTime)
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
