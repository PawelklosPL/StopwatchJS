/* Global variables */
var h1 = document.getElementsByTagName('h1')[0], // Main clock
    lap = document.getElementById('lap'), // lab button
    time = new Array("", "", "", "", ""), // history time arraay
    millisecond = 0, seconds = 0, minute = 0, // main clock parts time
    t; // timee clock

/* function to add millisecond to main clock to  */
function add() {
    millisecond++;
    if (millisecond >= 100) {
        millisecond = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minute++;
        }
    }
    /* Write main clock to value */
    h1.textContent = (minute ? (minute > 9 ? minute : "0" + minute) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (millisecond > 9 ? millisecond : "0" + millisecond);
    timer();
}
/* functions timer and add is main time loop */
/* function wait 9 milisecound and run add function */
function timer() {
    t = setTimeout(add, 9);
}
/* if button sstart is clicked */
document.getElementById('start').onclick = function () {
    /* if button have value START */
    if (document.getElementById('start').innerText == "START") {
        timer(); // run timer add loop
        lap.disabled = false; // disable button LAP TIME
        document.getElementById('start').innerText = "STOP"; // Chanage value on START/STOP button
        time = new Array("", "", "", "", ""); // clear array
        document.getElementById('history_lab').innerText = ""; // clear history times
        h1.textContent = "00:00:00"; // reset main clock 
        minute = seconds = millisecond = 0; // reset clock part
    }
    /* If button have value different than START */
    else {
        document.getElementById('start').innerText = "START"; // chanage value START/STOP button
        lap.disabled = true; // Enable LAP TIME button
        clearTimeout(t); // clear time out

    }
}

/* if LAP TIME button is clicked  */
lap.onclick = function () {
    newtime(); // begin newtime function
    document.getElementById('history_lab').innerText = ""; // Clear history 
    /* Write history */
    for (i = time.length-1; i >= 0; i--) {
        if (time[i] != "") {
            document.getElementById('history_lab').innerText += time[i]+"\n";
        }
    }

}
/* function to table segregation  */
function newtime() {
    /* move time to up */
    if (time[4] != "") {
        time[0] = time[1];
        time[1] = time[2];
        time[2] = time[3];
        time[3] = time[4];
        time[4] = h1.textContent;
    }
    else
      /* input value to table */
        for (i = 0; i < time.length; i++) {
            if (time[i] == "") {
                time[i] = h1.textContent;
                break;
            }
        }
}