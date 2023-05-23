// navFixed
window.onscroll = function() {
    navbar = document.querySelector('header');
    fixedNav = navbar.offsetTop;

    if(window.pageYOffset > fixedNav){
        navbar.classList.add('fixedNav')
    } else {
        navbar.classList.remove('fixedNav')
    }
}

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});