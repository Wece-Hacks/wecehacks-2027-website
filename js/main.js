// ==========================================================================
// WECEHacks 2027 — scripts shared by every page
// ==========================================================================

// TODO: set the kickoff time once the event date is confirmed, e.g.
// new Date("2027-02-20T09:30:00-06:00"). While null, the countdown is hidden.
const EVENT_START = null;

// Header turns dark once the page is scrolled.
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Highlight the nav link for the current page.
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.header a').forEach((link) => {
  if (link.getAttribute('href').split('/').pop() === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

// Countdown timer (home page only).
const timer = document.getElementById('timer');
if (timer) {
  if (!EVENT_START) {
    timer.hidden = true;
  } else {
    const updateCountdown = () => {
      const timeLeft = EVENT_START - Date.now();
      if (timeLeft <= 0) {
        timer.textContent = 'The hunt has begun!';
        clearInterval(interval);
        return;
      }
      const s = Math.floor(timeLeft / 1000);
      document.getElementById('days').textContent = Math.floor(s / 86400);
      document.getElementById('hours').textContent = Math.floor((s % 86400) / 3600);
      document.getElementById('minutes').textContent = Math.floor((s % 3600) / 60);
      document.getElementById('seconds').textContent = s % 60;
    };
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }
}
