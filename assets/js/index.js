const menubutton = document.querySelector('.hamburgur')
const navibar = document.querySelector('.navbar')

menubutton.addEventListener('click',()=> {
    navibar.classList.toggle('responsive');
});