const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItems");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if(menu.classList.contains("showMenu")){
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    document.getElementById("ham-menu-text").innerHTML="Menu";
  } 
  else{
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    document.getElementById("ham-menu-text").innerHTML="Close";
  }
}


hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItems) { 
    menuItems.addEventListener("click", toggleMenu);
  }
)




