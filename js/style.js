

// Toggle Nav
const overlayMenu = document.querySelector('.overlay-menu')

function navToggle() {
    console.log('masuk')
    overlayMenu.classList.add('right-0')
}

function navToggleClose() {
    console.log('close')
    overlayMenu.classList.remove('right-0')
}

// Navigation Scroll
const nav = document.querySelector('#navigation')
const navTop = nav.offsetTop;

function stickyNavigation() {
    if(window.scrollY > navTop){
        nav.classList.add('bg-[#323232B2]')
    } else {
        nav.classList.remove('bg-[#323232B2]')
    }
}
window.addEventListener('scroll', stickyNavigation);