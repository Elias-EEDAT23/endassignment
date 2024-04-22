const menubutton = document.querySelector('.hamburgur')
const navibar = document.querySelector('.navbar')
const sunicon = document.querySelector('.sun-icon')
const moonicon = document.querySelector('.moon-icon')

menubutton.addEventListener('click',()=> {
    navibar.classList.toggle('responsive');
});

sunicon. addEventListener('click',()=> {
    document.body.classList.remove('dark-mode');
    navibar.classList.remove('dark-mode');
    document.querySelector('.footer').classList.remove('dark-mode');
    sunicon.classList.add('active');
    moonicon.classList.remove('active');
});

moonicon. addEventListener('click',()=> {
    document.body.classList.add('dark-mode');
    navibar.classList.add('dark-mode');
    document.querySelector('.footer').classList.add('dark-mode');
    sunicon.classList.remove('active');
    moonicon.classList.add('active');
});