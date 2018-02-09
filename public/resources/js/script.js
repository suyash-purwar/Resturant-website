// CUSTOM SETTINGS for scroll reveal
window.sr = ScrollReveal({reset: true});

// Just a utility function 
// Function for fetching the elements from DOM
function getId(id) {
  return document.getElementById(id);
}

// Function for showing thw navbar after some scrolling
window.onscroll = function() {
  navbarViewEngine()
}

function navbarViewEngine() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    getId('navbar').style.display = 'flex';
  } else {
    getId('navbar').style.display = 'none';
  }
}


// Function for changing the imags in slideshow
function changeImage() {
    let i = 1;

    return function (command) {
        const elem = getId('slideshow-container')
        if (command === 'left' && i > 1) {
            i--
            elem.style.backgroundImage = `url('../../Images/Slideshow/${i}.jpeg')`;
        } else if (command === 'right' && i <= 3){
            i++
            elem.style.backgroundImage = `url('../../Images/Slideshow/${i}.jpeg')`;
        }
    }
}

let change = changeImage();

// Function for increasing the hr width
function increaseHr(id) {
  getId(id).style.width = '200px';
}

// Function for decreasing the hr width
function decreaseHr(id) {
  getId(id).style.width = '40px';
}


// Function for popping search box
function popSearchBox(decision) {
  if (decision == 'open') {
    getId('search-box').style.display = "flex";
    getId('search-box').style.animationName = "move-in-search-box";
  } else {
    getId('search-box').style.animationName = "move-out-search-box";
    setTimeout(`document.getElementById('search-box').style.display = "none"`, 400);
  }
}


// Function for changing the food cards
function changeCard(id) {
    let cardPanelsLength = getId('js-container-foodcards').children.length;
    const elementNamePart = 'js-foodcards-panel-';

    for (let i = 1; i <= cardPanelsLength; i++) {

      if (elementNamePart + i === elementNamePart + id) {
        getId(elementNamePart + i).style.display = 'block';
      } else {
        getId(elementNamePart + i).style.display = 'none';
      }
    }
}

// Functions for showing messages in code
function showMessage(text, type) {
  const elem =  getId('js-error-message-container');
  if (type === 'danger') {
    elem.style.border = "2px solid #F02B2B";
    elem.style.backgroundColor = "#CF000F";
    elem.style.display = 'block';
    getId('js-message-elem').innerHTML = text;
  } else if (type === 'success') {
    elem.style.border = "2px solid #006442";
    elem.style.backgroundColor = "#26A65B";
    elem.style.display = "block";
    getId('js-message-elem').innerHTML = text;
  }

  setTimeout(hideMessages, 3000);
};

function hideMessages() {
  getId('js-error-message-container').style.display = "none";
}

/* Scroll Reveal code starts from here */

// For text written over slideshow
sr.reveal('.image-text', {
  duration: 1000,
  origin: 'top',
  distance: '40px'
});

sr.reveal('.sub-title', {
  duration: 1500,
  origin: 'bottom',
  distance: '20px'
})

// For introduction 
sr.reveal('.intro-container', {
  duration: 1000,
  mobile: true,
  origin: 'top',
  move: '20px'
});

// Follow links
sr.reveal('.follow-us-container', {
  duration: 1500,
  rotate: {x: 0, y: 100, z: 0},
  origin: 'bottom',
  distance: '15px'
});

// Headings on every section
sr.reveal('.container__header', {
  duration: 1500,
  rotate: {x: 50, y: 0, z: 0}
})

// For foodcards
sr.reveal('.container__body__foodimages', {
  duration: 1500,
  rotate: {x: 0, y: 100, z: 0}
})

// For foodcard badges
sr.reveal('.badge', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 50
}, 70);

// For chef image in booking section
sr.reveal('.chef-image', {
  origin: 'left',
  distance: '30px',
  duration: 2000,
  delay: 50
})

// For input fields in form
sr.reveal('.booking-inp', {
  origin: 'bottom',
  duration: 2000,
  distance: '15px',
  delay: 20
}, 250)