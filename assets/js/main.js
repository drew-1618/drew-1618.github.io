document.addEventListener('DOMContentLoaded', () => {
    const prefixText = "Hi, I'm ";
    const nameText = "Andrew";
    const speed = 100; // Typing speed in ms
    
    const prefixElement = document.getElementById('typing-prefix');
    const nameElement = document.getElementById('typing-name');

    let i = 0;
    let j = 0;

    function typePrefix() {
        if (i < prefixText.length) {
            prefixElement.innerHTML += prefixText.charAt(i);
            i++;
            setTimeout(typePrefix, speed);
        } else {
            // Once prefix is done, start typing the name
            typeName();
        }
    }

    function typeName() {
        if (j < nameText.length) {
            nameElement.innerHTML += nameText.charAt(j);
            j++;
            setTimeout(typeName, speed);
        }
    }

    typePrefix();
});
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update Icon
    icon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Triggers when element is 150px into view
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // run once in case user starts mid page