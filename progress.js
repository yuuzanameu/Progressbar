'use strict'

const run = document.querySelector('.run');
const input = document.querySelector('.secs');
input.value = 0.05;

function updateProgressBar(percentage) {
    const completedBar = document.getElementById('completed');
    const remainingBar = document.getElementById('remaining');
  
    completedBar.style.width = `${percentage}%`;
    remainingBar.style.width = `${100 - percentage}%`;
}
  

function simulateLoading(secs) {
  let percentage = 0;
  secs *= 1000
  function increaseProgress() {
    if (percentage < 100) {
      percentage += 1; // Increase the percentage by 1%
      updateProgressBar(percentage);
      setTimeout(increaseProgress, secs); // Simulated delay (10 milliseconds)
    }
  }

  increaseProgress();
}


run.addEventListener('click', function(){
     simulateLoading(input.value)
});



