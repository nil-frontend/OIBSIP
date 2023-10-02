// Fake pre-loader animated with gsap
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1.5,
    delay: 4,
  }
);

gsap.fromTo(
  ".loading-page1",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 2,
    delay: 8,
  }
);
// Fake pre-loader animated with gsap


////////////====  tooltip pop-up animation javascript with cdn  =====/////////////

tippy(".admin_logo", {
  animation: 'scale',
  arrow: true,
  placement: 'bottom',
  size: 'large',
  theme: 'admin-popup',
  zIndex: '100000',
  
})

////////////====  tooltip pop-up animation javascript with cdn  =====/////////////



////////===== light mode & dark mode switch =====//////////

const checkbox = document.getElementById("check-box");

checkbox.addEventListener('change',() => {
  document.body.classList.toggle('dark_theme');
});

////////===== light mode & dark mode switch =====//////////


//////===================== toggle menu icon nav  ======================//////
//////===================== toggle menu icon nav  ======================//////

let menuIcon = document.querySelector("#burger");
let navbar = document.querySelector("#side-bar");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
};

//logic for remove the side bar when clicking on any where on the website screen

// document.onclick = function(e){
//     if (!menuIcon.contains(e.target) && !navbar.contains(e.target)){
//         menuIcon.classList.remove('active');
//         navbar.classList.remove('active');
//     }
// }

// function myFunction()
// {
//     if( menuIcon = checked){
//         console.log("hi")
//     }
//     else{
//         navbar.setAttribute("class", "style1");
//     }
// }

// menuIcon.addEventListener('click',sss);
// function sss(){
//     navbar.style
// }
// menuIcon.onclick = () => {

// };

////////=======OUR SLOGAN ANIMATION TYPED.JS==========/////////

var typed = new Typed("#slogan1", {
  strings: ["et's make it more secure", "et's make it more secure"],
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
});


////////=======3 para about our company faded animation==========/////////

// var clutter = "";

// document.querySelector("#about_3>p").textContent.split("").forEach(function(dets){
//     clutter += `<span>${dets}</span>`

//     document.querySelector("#about_3>p").innerHTML = clutter;
// })

// gsap.to("#about_3>p>span",{
//   scrollTrigger:{
//       trigger:`#about_3>p>span`,
//       start:`top bottom`,
//       end:`bottom top`,
//       scroller:`#main`,
//       scrub:.5,
//   },
//   stagger:.2,
//   color:`#fff`
// })











////////////////////===========sliders============///////////////

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop:true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button"
  }
});

////////////////////===========sliders============///////////////
