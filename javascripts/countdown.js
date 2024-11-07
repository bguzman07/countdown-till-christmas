
showClock();
setInterval("showClock()", 1000);
function showClock() {
var thisDay = new Date();
var localDate = thisDay.toLocaleDateString();
var localTime = thisDay.toLocaleTimeString();

document.getElementById("currentTime").innerHTML=
"<span>"+ localDate + "</span><span>" + localTime + "</span>";
/* execute the function to run and display the countdown clock */
var christmasDate = nextChristmas(thisDay);
christmasDate.setHours(21);
var days = (christmasDate - thisDay)/(1000*60*60*24);
var hrs = (days - Math.floor(days)) * 24;
var mins = (hrs - Math.floor(hrs)) * 60;
var secs = (mins - Math.floor(mins)) * 60;

 /* date we are counting down to */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}
  function nextChristmas(currentDate) {
   var cYear = currentDate.getFullYear();
   var chriDate = new Date("December 25, 2018");
   chriDate.setFullYear(cYear);
   if ((chriDate - currentDate) < 0) chriDate.setFullYear(cYear + 1);
   return chriDate;
  }
  
