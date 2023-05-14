const wrapper = document.querySelector(".site__header");
const toggleButton = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const menuItem = Array.from(menu.querySelectorAll("li a"));

// toggleButton.addEventListener("click", (e) => {
//    const target = e.currentTarget;
//    if (!target.classList.contains("active")) {
//       target.classList.add("active");
//       wrapper.classList.add("darkmode");
//    } else {
//       target.classList.remove("active");
//       wrapper.classList.remove("darkmode");
//    }
// });

// menu.addEventListener("click", (e) => {
//    let target = e.target;
//    menuItem.forEach((item) => item.classList.remove("active"));
//    target.classList.add("active");
// });


const adminlink = document.getElementById("admin-panel-nv")
const logoutlink = document.getElementById("logout-nv")
const authlink = document.getElementById("auth-nv")
const mytick = document.getElementById("mytick-nv")

const navVisible = () => {
   logoutlink.style.display = 'none'
   adminlink.style.display = "none"
   authlink.style.display = 'none'
   if (isAuthedUser()) {
      logoutlink.style.display = 'block'
      if (isAdminAuthed()) {
         adminlink.style.display = 'block'

      }
   } else {
      authlink.style.display = 'block'
   }


}

navVisible()