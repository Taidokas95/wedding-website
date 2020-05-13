//navigation
var elmnt = document.getElementById("venue");

function scrollToVenue() {
  elmnt.scrollIntoView(true); 
}

var elmnt = document.getElementById("hotel");

function scrollToHotel() {
  elmnt.scrollIntoView(true); 
}

var elmnt = document.getElementById("travel");

function scrollToTravel() {
  elmnt.scrollIntoView(true); 
}

var elmnt = document.getElementById("Tourism");

function scrollToTourism() {
  elmnt.scrollIntoView(true); 
}

var elmnt = document.getElementById("giftList");

function scrollToGiftList() {
  elmnt.scrollIntoView(true); 
}

var elmnt = document.getElementById("contactInfo");

function scrollToContactInfo() {
  elmnt.scrollIntoView(true); 
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}