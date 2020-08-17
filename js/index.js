//navigation
var about = document.getElementById("about");

function scrollToAbout() {
  about.scrollIntoView(true); 

var schedule = document.getElementById("schedule");

function scrollToSchedule() {
  schedule.scrollIntoView(true); 
}

var venue = document.getElementById("venue");

function scrollToVenue() {
  venue.scrollIntoView(true); 
}

var hotel = document.getElementById("hotel");

function scrollToHotel() {
  hotel.scrollIntoView(true); 
}

var travel = document.getElementById("travel");

function scrollToTravel() {
  travel.scrollIntoView(true); 
}

var tourism = document.getElementById("tourism");

function scrollToTourism() {
  tourism.scrollIntoView(true); 
}

var gifts = document.getElementById("gifts");

function scrollToGifts() {
  gifts.scrollIntoView(true); 
}

var schedule = document.getElementById("RSVP");

function scrollToRSVP() {
  RSVP.scrollIntoView(true); 
}
var contactInfo = document.getElementById("contactInfo");

function scrollToContactInfo() {
  contactInfo.scrollIntoView(true); 
}

//back to top button
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