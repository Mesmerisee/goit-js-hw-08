import VimeoPlayer from '@vimeo/player';  
import lodashThrottle from 'lodash.throttle';
const currentTimeValue = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const getTime = function (currentTime) {
  const sec = currentTime.sec;
  localStorage.setItem(currentTimeValue, sec);
};
player.on('timeupdate', lodashThrottle(getTime, 1000));

player.setCurrentTime(localStorage.getItem(currentTimeValue) || 0);
