//collasped navbar https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function Navbar() {
    var x = document.getElementById("myTopnav"); 
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className === "navbar"
    }
}

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


//back-to-top button to bring back to the top once clicked https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, Opera
  }

//back-to-top button appear once scrolled (https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2)
window.onscroll = function() {scrollTopButton()};
function scrollTopButton() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("topbutton").className = "top-show"; //changes class to top-show where display:block
  } else {
    document.getElementById("topbutton").className = "hide"; //keeps class to top-hide where display:none
  }
}
