const smallEl = document.querySelector(".small");
const middleEl = document.querySelector(".middle");
const largEl = document.querySelector(".larg");
const timerEl = document.querySelector(".timer");
const startEl = document.querySelector(".Start");
const stopEl = document.querySelector(".Stop");
const resetEl = document.querySelector(".Reset");

let intervel;
let timeLeft = settime();
timeLeft = 300;

function settime() {
    smallEl.addEventListener("click", function () {
        timeLeft = 300;
    });

    middleEl.addEventListener("click", function () {
        timeLeft = 900;
    });

    largEl.addEventListener("click", function () {
        timeLeft = 1500;
    });
}


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
    startEl.style.opacity = "0.6";
    stopEl.style.opacity = "1";
});

stopEl.addEventListener("click", function () {
    clearInterval(intervel);
    startEl.style.opacity = "1";
    stopEl.style.opacity = "0.6";
});

resetEl.addEventListener("click", function () {
    clearInterval(intervel);
    timeLeft = 300;
    updateTime();
    startEl.style.opacity = "1";
    stopEl.style.opacity = "1";
});


