const daysDiv = document.getElementById('days');
const hourDiv = document.getElementById('hours');
const minDiv = document.getElementById('mins');
const secDiv = document.getElementById('secs');
function countdown(){
    var currentDate = new Date();
    console.log(currentDate);

    var futureDate = Date.parse('Jan 01 2024 00:00:00');
    console.log(futureDate)

    var secondsDiff = futureDate - currentDate;
    console.log(secondsDiff)

    var secs = Math.floor((secondsDiff / 1000) % 60) // millisecond to seconds
    var mins = Math.floor((secondsDiff / 1000 / 60) % 60)//into minutes
    var hours = Math.floor((secondsDiff / (1000 * 60 * 60)) % 24)//into hours
    var days = Math.floor(secondsDiff / (1000 * 60 * 60 * 24)) //into days
    console.log(secs , mins, hours, days);

    //display to UI
    //days
    if(days <9){
        daysDiv.innerText = 'Days \n'+'0'+days;
    }else{
        daysDiv.innerText = 'Days \n'+days;
    }
    //hours
    if(hours <9){
        hourDiv.innerText = 'Hours \n'+'0'+hours;
    }else{
        hourDiv.innerText = 'Hours \n'+hours;
    }
    //minutes
    if(mins <9){
        minDiv.innerText = 'Minutes \n'+'0'+mins;
    }else{
        minDiv.innerText = 'Minutes \n'+mins;
    }
    //secons
    if(secs <9){
        secDiv.innerText = 'Seconds \n'+'0'+secs;
    }else{
        secDiv.innerText = 'Seconds \n'+secs;
    }
}

// countdown()
setInterval(() => {
    countdown();
}, 1000);


