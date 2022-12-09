// typing animation
var typed = new Typed(".typing", {
    strings: ["", "designer.", "developer.", "youtuber."],
    typeSpeed: 100,
    BackSpeed: 70,
    loop: true
});

// aside
const navigation = document.querySelector(".nav"),
    navList = navigation.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for (let index = 0; index < totalNavList; index++) {
        const a = navList[index].querySelector("a");
        a.addEventListener("click", function(){

            for (let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                    console.log();
                }
               navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        })
    }
    function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
           allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }