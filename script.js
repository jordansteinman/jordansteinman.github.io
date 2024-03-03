//collasped navbar https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function Navbar() {
    var x = document.getElementById("myTopnav"); 
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className === "navbar"
    }
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
