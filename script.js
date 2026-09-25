console.log("Vy Dang's portfolio is running!");


// ==============================
// SMOOTH SCROLLING
// ==============================


        // Close mobile menu after clicking
        navMenu.classList.remove("active");

    });

});


// ==============================
// REVEAL SECTIONS WHEN SCROLLING
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(function(section) {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

// Run once when page loads
revealSections();


// ==============================
// MOBILE HAMBURGER MENU
// ==============================

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-links");

menuButton.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});