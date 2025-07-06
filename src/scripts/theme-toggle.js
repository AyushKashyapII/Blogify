// Theme toggle logic
const themeToggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

function updateIcons() {
    if (html.classList.contains('dark')) {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

// Initialize theme from localStorage or system preference
function setInitialTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    updateIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcons();
        });
    }
}); 