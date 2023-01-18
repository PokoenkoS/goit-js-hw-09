import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dayEl = document.querySelector(`[data-days]`);
const hourEl = document.querySelector(`[data-hours]`);
const minuteEl = document.querySelector(`[data-minutes]`);
const secondEl = document.querySelector(`[data-seconds]`);
const btn = document.querySelector(`[data-start]`);
const input = document.getElementById(`datetime-picker`);
let timeOutId = null;

btn.disabled = true;
input.disabled = false;
// let selectedDates;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
       
        if (selectedDates[0] < options.defaultDate ){
            window.alert("Please choose a date in the future");
                      
        } else {
         btn.disabled = false;
         input.disabled = true;
         options.defaultDate = selectedDates[0];
        }
      },
  }

  flatpickr(input, options, );
  btn.addEventListener(`click`, startTimer);

  function startTimer() {
     btn.disabled = true;

     timeOutId = setInterval(()=> {
      const deltaTime = options.defaultDate - Date.now() ;
      if (deltaTime < 1000) {
        clearInterval(timeOutId)
        }
      const time = convertMs(deltaTime);
      showTime(time);
    },1000);
    }
   
  function convertMs(ms) {
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds =Math.floor((((ms % day) % hour) % minute) / second);

   return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, 0)
  }

 function showTime ({days, hours, minutes, seconds}) {
    dayEl.textContent = addLeadingZero(days);
    hourEl.textContent = addLeadingZero(hours);
    minuteEl.textContent = addLeadingZero(minutes);
    secondEl.textContent = addLeadingZero(seconds);
 }

 
  

  
  
    
  
