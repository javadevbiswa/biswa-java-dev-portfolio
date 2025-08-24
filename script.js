// Dark Mode Toggle with localStorage support
const toggleButton = document.getElementById('darkModeToggle');

function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    toggleButton.textContent = '☀️'; // sun icon when dark mode is on
  } else {
    document.body.classList.remove('dark');
    toggleButton.textContent = '🌙'; // moon icon when dark mode is off
  }
  localStorage.setItem('darkMode', isDark);
}

// Initialize dark mode based on previous choice or system preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === null) {
  // default to system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(prefersDark);
} else {
  setDarkMode(savedMode === 'true');
}

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setDarkMode(!isDark);
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
