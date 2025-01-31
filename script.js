function updateCountdown() {
    const now = new Date();
    let target = new Date();
    target.setHours(16, 20, 0, 0);

    // If current time is past 17:20, set target to next day
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }

    const diff = target - now;

    // Convert to hours, minutes, seconds
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the display
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();