

function updateDate() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - 30); // Subtract 30 minutes

    let options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    let timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    let formattedDate = now.toLocaleDateString("en-GB", options);
    let formattedTime = now
        .toLocaleTimeString("en-US", timeOptions)
        .replace("AM", " AM")
        .replace("PM", " PM");

    document.getElementById("time").textContent =
        formattedDate + " , " + formattedTime;
}

updateDate(); // Call the function when the page loads


function startCountdown(duration) {
    let timer = duration;
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.letterSpacing = "3px"; // Add extra spacing initially
    const interval = setInterval(function () {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        if (timer < duration - 1) {
            countdownElement.style.letterSpacing = "normal"; // Remove extra spacing after first update
        }

        countdownElement.textContent =
            String(hours).padStart(2, "0") +
            " : " +
            String(minutes).padStart(2, "0") +
            " : " +
            String(seconds).padStart(2, "0");

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "EXPIRED";
        }
    }, 1000);
}

updateDate();
startCountdown(1 * 3600 + 30 * 60 + 0); // Starts from 1:30:00
