

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