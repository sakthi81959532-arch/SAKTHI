// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// Fade animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = 1;

      entry.target.style.transform = "translateY(0)";

    }

  });

}, { threshold: 0.2 });

cards.forEach(card => {

  card.style.opacity = 0;

  card.style.transform = "translateY(40px)";

  card.style.transition = "all 0.6s ease-out";

  observer.observe(card);

});