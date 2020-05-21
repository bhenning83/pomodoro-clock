const startWorkButton = document.querySelector('#work-time-start')
let deadline = undefined;
function runWorkInterval() {
        const workTime = document.querySelector('#work-time-display')
        let current = new Date().getTime();
        let timeLeft = deadline - current;
        let seconds = Math.floor((timeLeft / 1000) % 60);
        let minutes = Math.floor(timeLeft / (1000 * 60));
        workTime.textContent = `${minutes}` + ':' + `${seconds}`
        if (timeLeft < 0) {
            clearInterval();
        }
}
function noDelay(func, interval) {
    func();
    return setInterval(func, interval)
}
function startWorkTime() {
    noDelay(runWorkInterval, 1000)
}
startWorkButton.addEventListener('click', () => {
    setTime();
    startWorkTime();
});
function setTime() {
    let now = new Date().getTime();
    let totalTime = 1500000 // minutes * 60 * 1000.
    deadline = now + totalTime;
    return deadline;
}