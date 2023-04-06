function changeImage(src,id)
{
    document.getElementById(id).src=src;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("site_navigation").style.padding = "10px 0px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("site_navigation").style.padding = "25px 0px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
