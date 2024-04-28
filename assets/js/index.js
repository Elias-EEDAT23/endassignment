//Elias EEDAT23 2024/04/28
// kod för hamburgaren 
const menubutton = document.querySelector('.hamburgur')

menubutton.addEventListener('click',()=> {
    navibar.classList.toggle('responsive');
});

// kod för light dark switch 
const navibar = document.querySelector('.navbar')
const sunicon = document.querySelector('.sun-icon')
const moonicon = document.querySelector('.moon-icon')

//om man klickar på solen så tas det mörka bort från meny, footer, body och solen blir aktiv
sunicon. addEventListener('click',()=> {
    document.body.classList.remove('dark-mode');
    navibar.classList.remove('dark-mode');
    document.querySelector('.footer').classList.remove('dark-mode');
    sunicon.classList.add('active');
    moonicon.classList.remove('active');
});

//om man klickar på solen så tas det mörka bort från meny, footer, body och solen blir aktiv
moonicon. addEventListener('click',()=> {
    document.body.classList.add('dark-mode');
    navibar.classList.add('dark-mode');
    document.querySelector('.footer').classList.add('dark-mode');
    sunicon.classList.remove('active');
    moonicon.classList.add('active');
});

// jag lyckades inte få dark / light mode att fastna mellan sidorna



// kod för bildkarusellen

let imgindex=1;
showimg(imgindex);

function currentimg(n) {
    showimg(imgindex = n);
}


// Funktion för bilder och indikatorpunkter
function showimg(n) {
    
    let i; // bildräknare
    let img = document.getElementsByClassName("imgs"); //hämta alla bilder
    let dots = document.getElementsByClassName("dot"); //hämta alla punkter

    if (n > img.length) {
        imgindex = 1;
    }


    if (n < 1) {
        imgindex = img.length;
    }


    for (i = 0; i < img.length; i++) {
        img[i].style.display="none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    img[imgindex - 1].style.display = "block"; //visa rätt bild
    dots[imgindex - 1].className += " active"; //marker rätt punkt


}