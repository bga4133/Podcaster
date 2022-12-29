export const secondsToTime = function (s) {
    function addZ(n) {
      return (n<10? '0':'') + n;
    }
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
  
    return addZ(hrs) + ':' + addZ(mins) ;
  }