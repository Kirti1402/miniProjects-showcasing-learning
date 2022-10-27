const stopWatch = document.querySelector('.stopwatch');
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');
const timerdisplay = document.querySelector('.timer');

var interval;
var minutes = 0;
var seconds = 0;

function onclickStart(){
    startBtn.setAttribute('disabled',true);
    stopBtn.removeAttribute('disabled');
interval = setInterval(timer,1000)
}

function timer(){
    console.log()
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
    }

    if(minutes <= 9  && seconds > 9){
        console.log('first if')
        timerdisplay.innerText = '0'+minutes+':'+seconds; 
    }else if(minutes <= 9 && seconds <= 9){
        console.log('second if')
        timerdisplay.innerText = '0'+minutes+':'+'0'+seconds; 
    }else if(seconds <= 9){
        console.log('third if')
        timerdisplay.innerText = minutes+':'+'0'+seconds; 
    }else{
        console.log('third if')
        timerdisplay.innerText = minutes+':'+seconds;   
    }
    console.log(minutes+':'+seconds)
}

function onclickStopWatch(){
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled',true);
    clearInterval(interval)
}

function onclickReset() {
    startBtn.removeAttribute('disabled');
    stopBtn.removeAttribute('disabled');
    clearInterval(interval);
    minutes=0;
    seconds=0;
    timerdisplay.innerText = '0'+minutes+':'+'0'+seconds; 
}
startBtn.addEventListener('click',onclickStart);
stopBtn.addEventListener('click',onclickStopWatch);
resetBtn.addEventListener('click',onclickReset)