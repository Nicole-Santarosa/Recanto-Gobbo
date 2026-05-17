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