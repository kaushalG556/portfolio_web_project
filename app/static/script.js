document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links with animation
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle dark mode with animation
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Form validation with animation
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const subject = document.querySelector('#subject').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        } else {
            alert("Message sent successfully!");
        }
    });

    // Adding smooth transition effects
    document.documentElement.style.transition = 'background-color 0.5s, color 0.5s';
});


window.addEventListener('load', function() {
    adjustProjectImages();  // Page load hone par image size adjust karega
});

window.addEventListener('resize', function() {
    adjustProjectImages();  // Window resize hone par image size adjust karega
});

function adjustProjectImages() {
    // Sabhi project images ko select karo
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(function(image) {
        // Project container ki width get karo
        const projectContainer = image.closest('.project');
        const containerWidth = projectContainer.offsetWidth;

        // Image ka size dynamically adjust karo (yahan image ko 50% width mil rahi hai)
        const newWidth = containerWidth * 0.5;  // 50% of container width
        image.style.width = `${newWidth}px`;

        // Image ki height ko maintain karo (aspect ratio ke saath)
        image.style.height = 'auto';
    });
}

// // Dark Mode Toggle
// const themeSwitch = document.getElementById('checkbox');

// // Check the stored preference on page load
// if (localStorage.getItem('darkMode') === 'enabled') {
//     document.body.classList.add('dark-mode');
//     themeSwitch.checked = true;
// } else {
//     document.body.classList.remove('dark-mode');
//     themeSwitch.checked = false;
// }

// // Listen for the toggle switch
// themeSwitch.addEventListener('change', function () {
//     if (themeSwitch.checked) {
//         document.body.classList.add('dark-mode');
//         localStorage.setItem('darkMode', 'enabled');
//     } else {
//         document.body.classList.remove('dark-mode');
//         localStorage.setItem('darkMode', 'disabled');
//     }
// });

// Check the user's previous theme preference from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    // Check if a theme was previously saved in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌞'; // Change button to light mode icon
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙'; // Change button to dark mode icon
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Save the theme in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌞'; // Change button to light mode icon
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙'; // Change button to dark mode icon
        }
    });
});
