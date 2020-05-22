//WORK CLOCK
const startWorkButton = document.querySelector('#work-time-start')
let workDeadline = undefined;
function runWorkInterval() {
        const workTimeDisplay = document.querySelector('#work-time-display')
        let workCountdown = setInterval(function(){
            let current = new Date().getTime();
            let timeLeft = workDeadline - current;
            let minutes = Math.floor(timeLeft / (1000 * 60));
            if (minutes < 10) minutes = '0' + minutes;
            let seconds = Math.floor((timeLeft / 1000) % 60);
            if (seconds < 10) seconds = '0' + seconds;
            workTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
            if (timeLeft <= 0) {
                clearInterval(workCountdown);
                workTimeDisplay.textContent = '00:00'
            }
        });
        
}
startWorkButton.addEventListener('click', () => {
    setWorkTime();
    runWorkInterval();
});
function setWorkTime() {
    let now = new Date().getTime();
    let totalTime = (5000)// minutes * 60 * 1000.
    workDeadline = now + totalTime;
    return workDeadline;
}
//PLAY CLOCK
const startPlayButton = document.querySelector('#play-time-start')
let playDeadline = undefined;
function runPlayInterval() {
        const playTimeDisplay = document.querySelector('#play-time-display')
        let playCountdown = setInterval(function(){
            let current = new Date().getTime();
            let timeLeft = playDeadline - current;
            let minutes = Math.floor(timeLeft / (1000 * 60));
            if (minutes < 10) minutes = '0' + minutes;
            let seconds = Math.floor((timeLeft / 1000) % 60);
            if (seconds < 10) seconds = '0' + seconds;
            playTimeDisplay.textContent = `${minutes}` + ':' + `${seconds}`;
            if (timeLeft <= 0) {
                clearInterval(playCountdown);
                playTimeDisplay.textContent = '00:00'
            }
        });
        
}
startPlayButton.addEventListener('click', () => {
    setPlayTime();
    runPlayInterval();
});
function setPlayTime() {
    let now = new Date().getTime();
    let totalTime = (5000)// minutes * 60 * 1000.
    playDeadline = now + totalTime;
    return playDeadline;
}