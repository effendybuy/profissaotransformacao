// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("nav")[0].style.backgroundColor = "black";
  } else {
    document.getElementsByClassName("nav")[0].style.backgroundColor = "transparent";
  }
}
