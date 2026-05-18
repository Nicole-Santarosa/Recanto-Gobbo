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

/* Aguarda o carregamento do DOM , intercepta o envio do formulário, evitando que a página recarregue e 
 permitindo que você envie os dados para uma API futuramente.*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Evita o comportamento padrão de recarregar a página
            event.preventDefault();

            // Captura dos dados informados pelo usuário
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Exemplo de Feedback Visual para o usuário (Substitua pela lógica de envio real)
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Obrigado pelo contato, ${formData.name}! Sua mensagem sobre "${formData.subject}" foi simulada com sucesso.`);
                
                // Reseta o formulário e o botão
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});