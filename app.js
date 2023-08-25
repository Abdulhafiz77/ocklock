 const fullyear = document.getElementById('full-year')
 const fullMonth = document.getElementById('full-month')
 const fullDay = document.getElementById('full-day')
const hours = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second') 

function timeShower() {
    const timeNow = new Date();
    fullyear.innerHTML = timeNow.getFullYear();
    fullMonth.innerHTML = timeNow.getMonth()< 10 ? '0' + timeNow.getMonth() : timeNow.getMonth();
    fullDay.innerHTML = timeNow.getDate()< 10 ? '0' + timeNow.getDate() : timeNow.getDate();
    hours.innerHTML = timeNow.getHours() < 10 ? '0' + timeNow.getHours() : timeNow.getHours();
    minute.innerHTML = timeNow.getMinutes()< 10 ? '0' + timeNow.getMinutes() :timeNow.getMinutes();
    second.innerHTML = timeNow.getSeconds()< 10 ? '0' + timeNow.getSeconds() : timeNow.getSeconds();

}
timeShower();
 setInterval(function(){
timeShower()
}, 1000) 