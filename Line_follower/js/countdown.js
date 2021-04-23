let timer;
let minute = 4;
let seconds = 239
let milliseconds = minute * 60 * 100
let textSec = "00"
let display = document.getElementById("display")
display.innerHTML = minute + ':00' + '.00'
let statSec = 59
let statMil = 100

function start() {
    if (seconds != 239) stop()
    timer = setInterval(function() {
        if (seconds == 180) start2()
        milliseconds--; 
        temp3 = milliseconds
        if (statMil != 0) statMil--
        else {
            statMil = 99
            seconds--
            if (statSec != 0) { 
                statSec-- 
            }
            else statSec = 59
        }
        temp = seconds
        temp4 = statMil
        temp2 = statSec
        
        if (statMil < 10) textMil = '0' + statMil
        else textMil = statMil

        if (statSec < 10) textSec = '0' + statSec
        else textSec = statSec
        
        display.innerHTML = Math.floor(seconds/60) + ':' + textSec + '.' + textMil
        
        if (milliseconds == 0) {
            clearInterval(timer)
            pause()
        }
    },10)
}

function stop() {
    pause()
    clearInterval(timer)
    seconds = temp
    statSec = temp2
    milliseconds = temp3
    statmil = temp4
}

function cancel() {
    clearInterval(timer)
    display.innerHTML = minute + ':00' + '.00'
    minute = 4
    seconds = 239
    milliseconds = minute * 60 * 100
    statSec = 59
    statMil = 100
}