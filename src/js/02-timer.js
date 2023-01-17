import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dayEl = document.querySelector(`[data-days]`);
const hourEl = document.querySelector(`[data-hours]`);
const minuteEl = document.querySelector(`[data-minutes]`);
const secondEl = document.querySelector(`[data-seconds]`);


const btn = document.querySelector(`[data-start]`);
btn.disabled = true;
const input = document.getElementById(`datetime-picker`);
input.disabled = false;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
       
        if (selectedDates[0] < options.defaultDate ){
            window.alert("Please choose a date in the future");
            btn.disabled = true;
        } else {
         btn.disabled = false;
            options.defaultDate = selectedDates[0];
        }
      },
  }
  flatpickr(input, options, );

  btn.addEventListener(`click`, startTimer);

  function startTimer() {
    if (btn.disabled) {
      return;
    }
    input.disabled = true;
    btn.disabled = true;
    setInterval(()=> {
const currentTime = Date.now();
const deltaTime = options.defaultDate - currentTime ;
convertMs(deltaTime);

    },1000);
   };

  function convertMs(ms) {
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour)) % minute) / second);

    dayEl.textContent = days;
    hourEl.textContent = hours;
    minuteEl.textContent = minutes;
    secondEl.textContent = seconds;

    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2,'0');
  }


  

 
  

  
  
    
  
