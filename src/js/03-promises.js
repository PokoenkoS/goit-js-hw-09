import Notiflix from 'notiflix';

const amount = document.querySelector(`input[name="amount"]`);
const delay = document.querySelector(`input[name="delay"]`);
const step = document.querySelector('input[name="step"]');
const btn = document.querySelector(`button`);
let counter = 0;

btn.addEventListener(`click`, onCreatePromise);

function onCreatePromise(evt) {
  evt.preventDefault();
  let amountStep = Number(step.value);
  let amountDelay = Number(delay.value);
  let amountCounter = Number(amount.value);

  const timeoutId = setInterval(() => {
   counter +=1;
   console.log(counter);

    if (counter >= amountCounter){
      clearInterval(timeoutId)
      console.log(`stop`);
    }
   createPromise();
  },amountDelay)
 
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
 
   const shouldResolve = Math.random() > 0.3;
   setTimeout(() =>{
   if (shouldResolve) {
    Notiflix.Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`)
    //  resolve({position, delay});
     
   } 
   Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`)
    // reject(`❌ Rejected promise ${position} in ${delay}ms`)
     
   },delay)
 })
 }
