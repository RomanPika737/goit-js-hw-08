// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const iframe = document.querySelector('#vimeo-player');


const player = new Vimeo.Player(iframe);
// const player = new Player('vimeo-player');

// getVideoPlayerCurrentTime();

const onTime = function(data) {
localStorage.setItem('videoplayer-current-time', data.seconds);
};


player.on('timeupdate', throttle(onTime, 1000));
player.off('ended', onTime);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }                                                                             
});

//  function getVideoPlayerCurrentTime() {
//  const currentTime = localStorage.getItem('videoplayer-current-time');

// if (currentTime) {
//   player.setCurrentTime(currentTime);
// }
// };   
 









