// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(
    ".container, .content-card, .projects-grid, .hero, .card"
  );

  fadeItems.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(12px)";
    setTimeout(() => {
      el.style.transition = "all .6s cubic-bezier(.2,.9,.2,1)";
      el.style.opacity = 1;
      el.style.transform = "none";
    }, 120 + i * 80);
  });

  // Auto-set year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = y;
});

// Contact Form Handler
function submitContact(e) {
  e.preventDefault();

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const subject = document.getElementById("subject")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill all fields.");
    return;
  }

  // Simulated success (replace with real API if needed)
  setTimeout(() => {
    alert("Thank you! Your message has been sent.");
    document.getElementById("contactForm")?.reset();
  }, 600);
}

// Mobile Hamburger Menu
function toggleMenu() {
  const burger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  burger.classList.toggle("active");
  navMenu.classList.toggle("show");

  // optional: disable scroll when menu is open
  document.body.style.overflow = navMenu.classList.contains("show")
    ? "hidden"
    : "auto";
}

// Attach click listener to hamburger
document.getElementById("hamburgerBtn")?.addEventListener("click", toggleMenu);

// Optional: clicking outside menu closes it
document.addEventListener("click", (e) => {
  const navMenu = document.getElementById("navMenu");
  const burger = document.getElementById("hamburgerBtn");

  if (!burger || !navMenu) return;

  if (
    navMenu.classList.contains("show") &&
    !navMenu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    navMenu.classList.remove("show");
    burger.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
