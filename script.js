// Mobile navigation
document.addEventListener("DOMContentLoaded", function () {
  // Typed.js initialization dengan pengecekan
  if (typeof Typed !== "undefined") {
    var typed = new Typed(".multiple-text", {
      strings: ["Student", "Programmer", "Philosopher", "Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  }

  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navList = document.querySelector(".nav-list");

  if (hamburgerMenu && navList) {
    // Toggle menu ketika hamburger diklik
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
      navList.classList.toggle("active");
    });

    // Tutup menu ketika mengklik di mana saja di dokumen
    document.addEventListener("click", (event) => {
      // Cek apakah yang diklik bukan hamburger menu dan menu sedang aktif
      if (
        !hamburgerMenu.contains(event.target) &&
        navList.classList.contains("active")
      ) {
        hamburgerMenu.classList.remove("active");
        navList.classList.remove("active");
      }
    });

    // Hindari menu tertutup ketika mengklik link navigasi
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  // Contact form handling tetap sama
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert(`Thank you, ${name}! We will contact you at ${email}.`);
      contactForm.reset();
    });
  }
});
