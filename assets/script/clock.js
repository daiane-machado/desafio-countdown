const tb =  document.querySelector("tbody").children[0];
const fieldDay = tb.children[0];
const fieldHours = tb.children[2];
const fieldMin = tb.children[4];
const fieldSec = tb.children[6];

const opening = new Date("Dec 11, 2022 12:00").getTime();

function countdown() {

  const now = new Date().getTime();
  const openingDate = opening - now;

  if (opening < now) {
    fieldDay.innerHTML = "00";
    fieldHours.innerHTML = "00";
    fieldMin.innerHTML = "00";
    fieldSec.innerHTML = "00";
    return false
  }else {
    const days = Math.floor(openingDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((openingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((openingDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((openingDate % (1000 * 60)) / 1000);
     
    fieldDay.innerHTML = days < 10 ?`0${days}` : days;
    fieldHours.innerHTML = hours < 10 ? `0${hours}` : hours;
    fieldMin.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    fieldSec.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    return true;
  }   
}

setInterval(() => {
 countdown()
},1000)

