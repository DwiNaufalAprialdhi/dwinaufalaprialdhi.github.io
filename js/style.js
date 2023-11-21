
// Typeit JS
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".hero-name", {
        speed: 150,
        loop:true,
        loopDelay: 5000
    }).go();
  });

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

// Hero Tab Active Class
const tabBars = document.querySelectorAll(".aboutme-tab-menu")

const biography = document.querySelector('.biography')
const values = document.querySelector('.values')
const skills = document.querySelector('.skills')

tabBars.forEach(tabBar => {
    tabBar.addEventListener('click',() =>{
        document.querySelector('.aboutme-tab-menu-active')?.classList.remove('aboutme-tab-menu-active')
        tabBar.classList.add('aboutme-tab-menu-active')
    })
})

function bioTab() {
    console.log('bio')
    biography.classList.remove('hidden')
    skills.classList.add('hidden')
    values.classList.add('hidden')
    
}

function valuesTab() {
    console.log('val')
    biography.classList.add('hidden')
    skills.classList.add('hidden')
    values.classList.remove('hidden')
}

function skillsTab() {
    console.log('skills')
    biography.classList.add('hidden')
    skills.classList.remove('hidden')
    values.classList.add('hidden')
}