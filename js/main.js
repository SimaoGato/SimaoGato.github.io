document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.getElementById('background-mode');

    const setThemeAndIcon = (theme) => {
        document.documentElement.setAttribute('data-applied-mode', theme);
        localStorage.setItem('theme', theme);
        toggleIcon.src = theme === 'light' ? 'icons/moon.png' : 'icons/sun.png';
        toggleIcon.alt = theme === 'light' ? 'Moon Icon' : 'Sun Icon';
    };

    // Set the initial icon based on the saved theme
    const initialTheme = document.documentElement.getAttribute('data-applied-mode');
    setThemeAndIcon(initialTheme);

    toggleIcon.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-applied-mode');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setThemeAndIcon(newTheme);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
});
