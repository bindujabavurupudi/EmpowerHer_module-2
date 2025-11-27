// Ask user for countdown time
let seconds = parseInt(prompt("Enter number of seconds for countdown:"));

let timer = setInterval(() => {
    console.log("Time left:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
    }
}, 1000);

document.addEventListener("keydown", (event) => {
    if (event.key === "s" || event.key === "S") {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
    }
});