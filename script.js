// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to Krishnakumar's Portfolio!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Scroll animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-section");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

    // Current year in footer
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact button message
    const contactButton = document.querySelector(".contact-btn");

    if (contactButton) {
        contactButton.addEventListener("click", function () {
            alert("Thank you for visiting my portfolio!");
        });
    }

});
