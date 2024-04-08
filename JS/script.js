const timerEl = document.querySelector(".timer");
const startEl = document.querySelector(".Start");
const stopEl = document.querySelector(".Stop");
const resetEl = document.querySelector(".Reset");

let timeLeft = 1500;
let intervel;

function updateTime() {
    let minutes = Math.ceil(timeLeft / 60);
    let second = Math.ceil(timeLeft % 60);
    let formattedTime = `
    ${minutes.toString().padStart(2, "0")}
    :
    ${second.toString().padStart(2, "0")}
    `;

    timerEl.innerHTML = formattedTime;
}

startEl.addEventListener("click", function () {
    intervel = setInterval(function () {
        timeLeft--;
        updateTime();
    }, 1000);
    startEl.style.opacity = "0.6"
    stopEl.style.opacity = "1"
});

stopEl.addEventListener("click", function () {
    clearInterval(intervel)
    startEl.style.opacity = "1"
    stopEl.style.opacity = "0.6"
});

resetEl.addEventListener("click", function () {
    clearInterval(intervel)
    timeLeft = 1500;
    updateTime()
    startEl.style.opacity = "1"
    stopEl.style.opacity = "1"
});
