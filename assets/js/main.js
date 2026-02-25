document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const btn = document.getElementById('bd-theme');
    const icon = document.getElementById('theme-icon');
    
    const currentTheme = html.getAttribute('data-bs-theme') || 'light';
    
    const initialTitle = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    btn.setAttribute('title', initialTitle);

    // Sync icon with destination
    if (currentTheme === 'dark') {
        icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
    } else {
        icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
    }

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // --- Typing Animation Logic ---
    const prefixText = "Hi, I'm ";
    const nameText = "Andrew";
    const speed = 100; 
    
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

    document.addEventListener('click', (event) => {
        const navbarCollapse = document.getElementById('navbarNav');
        const toggler = document.querySelector('.navbar-toggler');
        const themeToggle = document.getElementById('bd-theme');

        const isOpen = navbarCollapse.classList.contains('show');

        // Close if click is outside the menu, the toggle button, and the theme switch
        if (isOpen && 
            !navbarCollapse.contains(event.target) && 
            !toggler.contains(event.target) && 
            !themeToggle.contains(event.target)) {
            
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});

function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('bd-theme');
    const icon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const tooltip = bootstrap.Tooltip.getInstance(btn);

    // Hide tooltip immediately to prevent "sticky" behavior
    if (tooltip) {
        tooltip.hide();
    }

    // Update icon and tooltip text for the next state
    if (newTheme === 'dark') {
        icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        btn.setAttribute('data-bs-original-title', 'Switch to Light Mode');
    } else {
        icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        btn.setAttribute('data-bs-original-title', 'Switch to Dark Mode');
    }
    
    if (tooltip) {
        tooltip.setContent({ '.tooltip-inner': btn.getAttribute('data-bs-original-title') });
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; 
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener('scroll', () => {
    reveal();

    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});

// Initial run for reveal
reveal();

window.onload = function() {
    const user = "andrewjohnson11235";
    const domain = "gmail.com";
    const element = document.getElementById('email-link');
    const display = document.getElementById('email-display');

    element.href = "mailto:" + user + "@" + domain;
    display.innerText = user + "@" + domain;
};