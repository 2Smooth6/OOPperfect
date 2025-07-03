function updateDateTime() {
  const now = new Date();

  // Update Time
  const timeEl = document.getElementById('time');
  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString('en-GB');
  }

  // Update Calendar
  const calendarEl = document.getElementById('calendar');
  const monthYearEl = document.getElementById('month-year');

  if (calendarEl) {
    // Update month and year display
    if (monthYearEl) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthYearEl.textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    }

    calendarEl.innerHTML = '';
    const today = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const monthDays = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Add day headers (Su, Mo, etc.)
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    days.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.textContent = day;
      dayHeader.classList.add('day-header');
      calendarEl.appendChild(dayHeader);
    });

    // Add empty divs for the first days of the week
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarEl.appendChild(document.createElement('div'));
    }

    // Add day numbers
    for (let i = 1; i <= monthDays; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = i;
      dayDiv.classList.add('day-number');
      if (i === today) {
        dayDiv.classList.add('today'); // Use CSS class for styling
      }
      calendarEl.appendChild(dayDiv);
    }
  }
}

// Run the function only if the time or calendar elements exist on the page
if (document.getElementById('time') || document.getElementById('calendar')) {
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initial call
}
