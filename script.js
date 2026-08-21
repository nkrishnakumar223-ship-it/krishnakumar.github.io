/* =====================================================
   KRISHNA KUMAR - PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu when link is clicked */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= SCROLL TOP ================= */

const scrollTopButton =
    document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.style.display = "flex";

    } else {

        scrollTopButton.style.display = "none";

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".about-card, " +
    ".about-details, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".project-card, " +
    ".certificate-card, " +
    ".contact-info, " +
    ".contact-form"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");

        return;
    }


    /*
       This opens the user's email application.

       Replace yourmail@gmail.com with your real email.
    */

    const receiver = "yourmail@gmail.com";

    const emailSubject =
        encodeURIComponent(
            subject + " - Portfolio Contact"
        );

    const emailBody =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        `mailto:${receiver}?subject=${emailSubject}&body=${emailBody}`;

});


/* ================= PROJECT LINKS ================= */

/*
   You can replace the "#" links in index.html
   with your actual GitHub project URLs.
*/


/* ================= BUTTON RIPPLE EFFECT ================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.97)";

        setTimeout(() => {

            this.style.transform = "";

        }, 120);

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cWelcome to Krishna Kumar's Portfolio!",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "Portfolio successfully loaded."
);
