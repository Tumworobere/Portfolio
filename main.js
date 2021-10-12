const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const close= document.querySelector(".close");
const open = document.querySelector(".menuIcon");


hamburger.addEventListener('click', mobileMenu);
close.addEventListener('click', switchIcons);
menuItems.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
  menu.classList.toggle('active');
  toggleDisplay(open, 'none');
  toggleDisplay(close, 'block');
}

function closeMenu() {
  menu.classList.remove('active');
  toggleDisplay(open, 'block');
  toggleDisplay(close, 'none');
}

function switchIcons() {
  toggleDisplay(open, 'block');
  toggleDisplay(close, 'none');
  closeMenu();
}

function toggleDisplay(element, val) {
  element.style.display = val;
}

// function toggleMenu() {
//   console.log("Working");
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu());

// menuItems = document.querySelectorAll(".menuItem");

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )