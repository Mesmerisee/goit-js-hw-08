import Player from '@vimeo/player';  
import throttle from 'lodash.throttle';
const currentTimeValue = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getTime = function (currentTime) {
  const sec = currentTime.seconds;
  localStorage.setItem(currentTimeValue, sec);
};
player.on('timeupdate', throttle(getTime, 1000));

player.setCurrentTime(localStorage.getItem(currentTimeValue) || 0);
