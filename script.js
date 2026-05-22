const menuButton = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");

menuButton?.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll("[data-nav] a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll(".skill-card, .project-card, .timeline article").forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const heroVisual = document.querySelector(".hero-visual");
const heroImage = document.querySelector(".hero-visual img");

heroVisual?.addEventListener("mousemove", (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroImage.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 8}deg) translateY(-8px)`;
});

heroVisual?.addEventListener("mouseleave", () => {
    heroImage.style.transform = "";
});
