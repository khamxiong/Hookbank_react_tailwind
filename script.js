
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// active menubar
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

 function activeMenu(){
   let len = section.length;
   while(--len && window.scrollY + 97 < section[len].offsetTop)
     navLinks.forEach(item);
     //navLinks.forEach(item =>item.classList.remove('active'));
     navLinks[len].classList.add('active'); 
 }
 function item(li){
          li.classList.remove('active');
 }
 window.addEventListener('scroll',activeMenu);

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector('#search-form');
let closeForm = document.getElementById('close');

searchIcon.onclick = () =>{
    searchForm.classList.toggle('active');
}
closeForm.onclick = ()=>{
    searchForm.classList.remove('active');
}
// swiper home
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  // loading page
    let load = document.querySelector('.loader-container');
  function loader(){
    load.classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader,3000);
  }
  window.onload = fadeOut();
