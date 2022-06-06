window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("nav").style.backgroundColor = "white";
      document.querySelector("nav").style.boxShadow = "0 10px 10px rgba(0,0,0,0.1)";
      navs = document.getElementsByClassName("nav-link");
      for(var i = 0; i < navs.length;i++){
        navs[i].style.color = "black"
      }
      document.querySelector("nav").style.padding = "2em";
    } else {
      document.querySelector("nav").style.backgroundColor = "";
      navs = document.getElementsByClassName("nav-link");
      for(var i = 0; i < navs.length;i++){
        navs[i].style.color = "white"
      }
      document.querySelector("nav").style.boxShadow = "0 0 black";
      document.querySelector("nav").style.padding = "3em 4em 3em 3em";
    }
}

// sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// sidenav
function openAss() {
  document.getElementById("mySideAss").style.width = "250px";
}

function closeAss() {
  document.getElementById("mySideAss").style.width = "0";
}
