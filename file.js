// Navigation
function showScreen(screenId) {
    document.querySelectorAll('.container').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Reminder Logic
let medicineName = "";
let reminderTime = "";
let reminderTriggered = false;
let confirmed = false;

function setReminder() {
    medicineName = document.getElementById("medicine").value;
    reminderTime = document.getElementById("time").value;

    if (!medicineName || !reminderTime) {
        alert("Enter all details");
        return;
    }

    document.getElementById("status").innerText =
        "Reminder set for " + reminderTime;
}

// Check every second
setInterval(checkTime, 1000);

function checkTime() {
    let now = new Date();
    let currentTime =
        now.getHours().toString().padStart(2, '0') + ":" +
        now.getMinutes().toString().padStart(2, '0');

    if (currentTime === reminderTime && !reminderTriggered) {
        reminderTriggered = true;
        confirmed = false;

        document.getElementById("status").innerText =
            "Take your medicine: " + medicineName;

        document.getElementById("okBtn").style.display = "inline-block";

        // Demo: 10 seconds (real = 10 min → 600000)
        setTimeout(checkRisk, 10000);
    }
}

function confirmTaken() {
    confirmed = true;

    document.getElementById("status").innerText =
        "Medicine taken ✔️";

    document.getElementById("okBtn").style.display = "none";
    document.getElementById("riskMsg").innerText = "";
}

function checkRisk() {
    if (!confirmed) {
        document.getElementById("riskMsg").innerText =
            "⚠️ RISK: Medicine not taken!";
    }
}