// toggle style switcher. //
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.toggle("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme colors //

const alternativeStyles = document.querySelectorAll('.alternative-style');
function setActiveStyle(color) {
    alternativeStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    }
)}

// theme light and dark //

const themeLight = document.querySelector(".day-night");
themeLight.addEventListener("click", ()=>{
    themeLight.querySelector("i").classList.toggle("fa-sun");
    themeLight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark")){
        themeLight.querySelector("i").classList.add("fa-sun");
    }else{
        themeLight.querySelector("i").classList.add("fa-moon");
    }
})