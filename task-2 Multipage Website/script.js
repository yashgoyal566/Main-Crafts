
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");

});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});


// --- Form Input Validation Architecture ---
function validateForm() {
    let name = document.forms["contactForm"]["name"].value.trim();
    let email = document.forms["contactForm"]["email"].value.trim();

    if (name === "" || email === "") {
        alert("Please complete both the Name and Email fields before submitting.");
        return false; 
    }
    
    alert("Inquiry successfully validated and sent!");
    return true; 
}



document.addEventListener("DOMContentLoaded",()=>{


const animatableElements = document.querySelectorAll(".reveal-on-scroll");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.12
};

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Visible:", entry.target);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
};

const scrollObserver = new IntersectionObserver(
    handleIntersection,
    observerOptions
);

animatableElements.forEach(element => {
    scrollObserver.observe(element);
});

// Mouse tracking Spotlight glow effect for service card


const cards =document.querySelectorAll(".service-card");

cards.forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
        const rect=card.getBoundingClientRect();

        const x=e.clientX - rect.left;
        const y=e.clientY-rect.top;
        card.style.setProperty("--mouse-x",`${x}px`);
        card.style.setProperty("--mouse-y",`${y}px`);
    });
});

});