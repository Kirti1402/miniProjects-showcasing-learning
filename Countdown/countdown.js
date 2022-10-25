const daysDiv = document.getElementById('days');
const hourDiv = document.getElementById('hours');
const minDiv = document.getElementById('mins');
const secDiv = document.getElementById('secs');
function countdown(){
    var currentDate = new Date();
    console.log(currentDate);

    var futureDate = Date.parse('Jan 01 2023 00:00:00');
    console.log(futureDate)

    var secondsDiff = futureDate - currentDate;
    console.log(secondsDiff)

    var secs = Math.floor((secondsDiff / 1000) % 60) // millisecond to seconds
    var mins = Math.floor((secondsDiff / 1000 / 60) % 60)//into minutes
    var hours = Math.floor((secondsDiff / (1000 * 60 * 60)) % 24)//into hours
    var days = Math.floor(secondsDiff / (1000 * 60 * 60 * 24)) //into days
    console.log(secs , mins, hours, days);

    daysDiv.innerText = days;
    hourDiv.innerText = hours;
    minDiv.innerText = mins;
    secDiv.innerText = secs;



}

// countdown()
setInterval(() => {
    countdown();
}, 1000);


