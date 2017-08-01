(function () {
  'use strict';
  var showHex = false;
//displays the current time
  var currentTime, hour, min, sec, clock, color;
  function displayTime() {
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();

//will add a zero if it's a single digit
    if (hour <= 9) hour = '0' + hour;
    if (sec <= 9) sec = '0' + sec;
    if (min <= 9) min = '0' + min;

    color = "#"+hour+min+sec;

    if (hour <= 24) hour = hour + ':';
    if (sec <= 60) sec = sec;
    if (min <= 60) min = min + ':';

    clock = hour + min + sec;

    document.body.style.background = color;

    if (showHex === true) {
          document.getElementById('clock').innerHTML = color;
    } else {
    document.getElementById('clock').innerHTML = clock;
    }

    document.getElementById('status').style.width = sec + '%';

    document.getElementById('clock').addEventListener('mouseover', function () {
      showHex = true;
    })

    document.getElementById('clock').addEventListener('mouseout', function () {
      showHex = false;
    })

    setTimeout(displayTime, 500);
  }

displayTime();
}());
