const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const weekdayEl = document.getElementById('weekday');

function updateClock() {
    const now = new Date();
    timeEl.innerHTML = now.toLocaleTimeString();
    dateEl.innerHTML = now.toLocaleDateString();
    weekdayEl.innerHTML = now.toLocaleDateString('en-US', { weekday: 'long' });
}

setInterval(updateClock, 1000);
updateClock();
