const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const start = document.getElementsByTagName("button")[0];

let month, date, time = "00:00:00", year;
dateEl.onchange = (e) => { 
    let Date = String(dateEl.valueAsDate).split(' ');
    month = Date[1];
    date = Date[2];
    year = Date[3];
}
timeEl.onchange = (e) => {
    time = String(timeEl.valueAsDate).split(" ")[4];
}

start.onclick = () => {
    if (start.innerHTML == "Stop") {
        eventStoped();
        return;
    }
    if (month && date && time && year) {
        let countdownDate = new Date(`${month} ${date}, ${year} ${time}`).getTime();
        timeStarted()
        const x = setInterval(() => {
            if (!countdownDate) return;
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        
            if (distance < 0) {
                timerEnded(x);
            }
        }, 1000);
    }
}


function timeStarted () {
    document.getElementById("message").innerHTML = "";
    document.getElementById("countdown").style = "display: flex";
    start.style = "background-color: red; color: white";
    start.innerHTML = "Stop";
}

function timerEnded(x) {
    clearInterval(x);
    document.getElementById("message").innerHTML = "Event has started!";
    document.getElementById("countdown").style = "display: none";
    start.style = "background-color: greenyellow;";
    start.innerHTML = "Start";
}

function eventStoped() {
    document.getElementById("message").innerHTML = "Event has stoped!";
    document.getElementById("countdown").style = "display: none";
    start.style = "background-color: greenyellow;";
    start.innerHTML = "Start";
}