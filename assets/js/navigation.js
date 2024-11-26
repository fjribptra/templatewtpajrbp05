const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeHamburgerMenu = document.querySelector('.close-hamburger-menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerMenu.addEventListener('click', () => {
    navigation.classList.remove('hidden');
});

closeHamburgerMenu.addEventListener('click', () => {
    navigation.classList.add('hidden');
});

navLinks.forEach(navLink => {    
    navLink.addEventListener('click', () => {
        navigation.classList.add('hidden');
    });
    
});