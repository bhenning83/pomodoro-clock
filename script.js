const startWork = document.querySelector('#work-time-start')
startWork.addEventListener('click', startWorkTime)
let now = new Date().getTime();
let totalTime = 1500000 // minutes * 60 * 1000.
let deadline = now + totalTime;
function startWorkTime() {
        let countdown = setInterval(function() {
       
}
function clockStart() {
    let current = new Date().getTime();
    let timeLeft = deadline - current;
    let seconds = Math.floor((timeLeft / 1000) % 60);
    let minutes = Math.floor(timeLeft / (1000 * 60));
    const workTime = document.querySelector('#work-time-display')
    workTime.textContent = `${minutes}` + ':' + `${seconds}`
    if (timeLeft < 0) {
        clearInterval(countdown);
    }
}, 1000);
}

