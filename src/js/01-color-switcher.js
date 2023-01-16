const refs ={
    start: document.querySelector(`[data-start]`),
    stop: document.querySelector(`[data-stop]`)
  
}
refs.start.addEventListener(`click`, onStartChangeColors);
refs.stop.addEventListener(`click`, onStopChangeColors);
let timeOutId = null;
refs.start.disabled = false

function onStartChangeColors(evt) {
    if (refs.start.disabled){
return;
    }
  timeOutId = setInterval(() => {
    document.body.style.background = getRandomHexColor();}, 1000
    )
    refs.start.disabled = true;

}

function onStopChangeColors() {
    clearInterval(timeOutId);
    refs.start.disabled = false
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }