window.onscroll = function() {
  if (document.getElementById("pop-up").style.display == "none") toggleStickyNavBar();
};

// Get the navbar
var navbar = document.getElementById("top-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleStickyNavBar() {
  if (window.pageYOffset >= 0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Make the menu visible when you press the icon. Hide it when you click again
function toggleMenu() {
  var menu = document.getElementById("sections-tab");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Hide the popup when you press the close button.
function closePopup() {
  document.getElementById("pop-up").style.display = "none";
}