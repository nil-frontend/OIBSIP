////////////====  tooltip pop-up animation javascript with cdn  =====/////////////

tippy(".admin_logo", {
  animation: "scale",
  arrow: true,
  placement: "bottom",
  size: "large",
  theme: "admin-popup",
  zIndex: "100000",
});

////////////====  tooltip pop-up animation javascript with cdn  =====/////////////

////////===== light mode & dark mode switch =====//////////

const checkbox = document.getElementById("check-box");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark_theme");
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
