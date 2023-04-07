//Navigation Toggle Icon 
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
    navlist.classList.toggle("active");
});

window.onscroll = () => {
    navlist.classList.remove("active");
};


// Change the Copyright Year Every Year
const copyright = `<p> © ${new Date().getFullYear()} Copyright Debuggers</p>`;
document.getElementById("copyright-year").innerHTML = copyright;