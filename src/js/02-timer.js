import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const btn = document.querySelector(`[data-start]`);
btn.disabled = true;
const input = document.getElementById(`datetime-picker`);


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
            
        }
     
    },
  }
  flatpickr(input, options, );

  

 
  

  
  
    
  
