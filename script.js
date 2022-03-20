window.onscroll = function() {                                                                                  // makes the function work
  scrollFunction()
  scrollNav()
  scrollDown()
  scrollDownsec()
};
         
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {                             // selects the header and the ul container to apply bckground color and shadow
    
    document.getElementById("header").style.background = "#0a0c10";
 
    document.getElementById('right-nav').style.background = '#0a0c10';
  } else {
   
    document.getElementById("header").style.background = "none";
  
    document.getElementById("right-nav").style.background = "none";

  }
}

const nav = document.getElementById('navbar');
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active) {
     event.currentTarget.setAttribute('aria-label', 'close menu');
  } else {
     event.currentTarget.setAttribute('aria-label', 'open menu');
  }
}
btnMobile.addEventListener('click', toggleMenu);


const navbar = document.querySelector('nav');                                 // selects navbar
function scrollNav() {                                                       // if the screen size is less than 700px I will prevent the scroll function mess with the navbar
  if (screen.width > 700 ) {
    document.getElementById("right-nav").style.background = "none";
    document.getElementById("right-nav").style.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0%)";
  }
}


// scroll loading function

const scrollDown = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById('abtcontainer').classList.add('animationjs');
  }
}
const scrollDownsec = () => {
     if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) 
      document.getElementById('projectscontainer').classList.add('animationjs');
  }
 

// form function

// const contactLink = document.getElementById('ctclink');
//contactLink.onclick = function() {
//document.getElementById('contactme').style.display = 'block'; 
//}

 




