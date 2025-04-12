

// Email Validation & Form Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email');
  if (!email.checkValidity()) {
    email.classList.add('is-invalid');
    return;
  } else {
    email.classList.remove('is-invalid');
  }

  alert("Form submitted!");
  this.reset();
});

// Fact Generator
document.getElementById('getFactBtn').addEventListener('click', async () => {
  const display = document.getElementById('factDisplay');
  display.classList.remove('d-none');
  display.textContent = 'Loading fact...';

  try {
    const response = await fetch('https://api.api-ninjas.com/v1/facts', {
      headers: {
        'X-Api-Key': 'beqKauyfbmO2wkQloXkR+A==9nuUqqlq2OzvftQn'
      }
    });

    if (!response.ok) throw new Error('Failed to fetch fact');

    const data = await response.json();
    display.textContent = data[0]?.fact || "Couldn't find a fact.";
  } catch (err) {
    display.textContent = 'Error fetching fact.';
  }
});

// Light/Dark Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load stored theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.checked = true;
} else {
  body.classList.add('light-mode');
}

// Toggle logic
themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});