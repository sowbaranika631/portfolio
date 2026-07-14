/* ==========================================
            TYPING ANIMATION
========================================== */

const words = [
    "Aspiring Software Engineer",
    "Frontend Developer",
    "Java Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, deleting ? 60 : 100);

}

type();


/* ==========================================
        SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});


/* ==========================================
            ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
            SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
    ".info,.stat-card,.education-card,.skill-category,.project-card,.experience-card,.learning-grid div,.contact-form"
).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* ==========================================
            MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ==========================================
        ANIMATED STATS
========================================== */

const counters = document.querySelectorAll(".stat-card h2");

const speed = 200;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target =
                parseInt(counter.innerText);

            let count = 0;

            const update = () => {

                const increment = target / speed;

                if (count < target) {

                    count += increment;

                    counter.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    if (target === 1) {

                        counter.innerText = "1";

                    } else {

                        counter.innerText = target + "+";

                    }

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================================
        NAVBAR BACKGROUND
========================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(7,11,20,.9)";

        navbar.style.backdropFilter = "blur(20px)";

    } else {

        navbar.style.background = "rgba(7,11,20,.75)";

    }

});


/* ==========================================
        SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
        BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


/* ==========================================
        PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

console.log("Portfolio Loaded Successfully 🚀");