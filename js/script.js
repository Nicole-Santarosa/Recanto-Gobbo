/* ================================
   MENU HAMBÚRGUER
   Controla abertura e fechamento do menu mobile
================================ */

// Seleciona o botão hambúrguer
const menuToggle = document.getElementById("menu-toggle");

// Seleciona o menu de navegação
const navMenu = document.getElementById("nav-menu");

// Seleciona todos os links do menu
const navLinks = document.querySelectorAll(".nav-menu a");

// Verifica se os elementos existem
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    // Adiciona/remove classe no menu
    navMenu.classList.toggle("active");

    // Adiciona/remove classe no body
    document.body.classList.toggle("menu-open");

    // Verifica se abriu
    const isOpen = navMenu.classList.contains("active");

    // Troca o ícone
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