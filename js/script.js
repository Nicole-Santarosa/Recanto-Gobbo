/* ================================
   MENU HAMBÚRGUER
================================ */

// Botão hambúrguer
const menuToggle = document.getElementById("menu-toggle");

// Menu principal
const navMenu = document.getElementById("nav-menu");

// Todos os links do menu
const navLinks = document.querySelectorAll(".nav-menu a");

// Todos os botões de submenu
const submenuButtons = document.querySelectorAll(".submenu-toggle");

/* ================================
   ABRIR / FECHAR MENU MOBILE
================================ */

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");

      document.body.classList.remove("menu-open");

      menuToggle.textContent = "☰";
    });
  });
}

/* ================================
   SUBMENUS MOBILE
================================ */

submenuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const parentItem = button.closest(".has-submenu");

    parentItem.classList.toggle("submenu-open");
  });
});


/* ================================
   CARROSSEL INSTAGRAM PÁGINA SOBRE MOBILE
================================ */

const instagramCards = document.querySelector(".instagram-cards");
const instagramPrev = document.querySelector(".instagram-slider .slider-arrow:first-child");
const instagramNext = document.querySelector(".instagram-slider .slider-arrow:last-child");

if (instagramCards && instagramPrev && instagramNext) {
  const getScrollAmount = () => {
    const firstImage = instagramCards.querySelector("img");

    if (!firstImage) return 0;

    const gap = 14;
    return firstImage.offsetWidth + gap;
  };

  instagramNext.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    const maxScroll = instagramCards.scrollWidth - instagramCards.clientWidth;

    if (instagramCards.scrollLeft >= maxScroll - 5) {
      instagramCards.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      instagramCards.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  });

  instagramPrev.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();

    if (instagramCards.scrollLeft <= 5) {
      instagramCards.scrollTo({
        left: instagramCards.scrollWidth,
        behavior: "smooth",
      });
    } else {
      instagramCards.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  });
}