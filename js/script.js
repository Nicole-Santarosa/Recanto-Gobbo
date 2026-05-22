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
document.addEventListener('DOMContentLoaded', () => {
    
    // ... SEUS CÓDIGOS ANTERIORES DO MENU HAMBÚRGUER OU SUBMENUS FICAM AQUI ...


    // ==========================================================================
    // LÓGICA DO FORMULÁRIO DE CONTATO (WHATSAPP & VALIDAÇÃO)
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita recarregar a página

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validação manual cobrada
            if (!name || !email || !message) {
                formStatus.textContent = "Preencher todos os campos";
                formStatus.className = "form-status error";
                return;
            }

            // Efeito visual temporário no botão
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Configuração do link direto do WhatsApp do Recanto Gobbo
            const phoneNumber = "5516997703595"; 
            const textMessage = `Olá, Recanto Gobbo!\n\n` +
                                `Nova mensagem enviada pelo site:\n` +
                                `*Nome:* ${name}\n` +
                                `*E-mail:* ${email}\n` +
                                `*Mensagem:* ${message}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

            setTimeout(() => {
                // Mensagem limpa na tela substituindo o alert de navegador
                formStatus.textContent = "Mensagem enviada ao Recanto Gobbo";
                formStatus.className = "form-status success";

                contactForm.reset(); // Limpa as caixas de texto
                
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Redireciona para o WhatsApp
                window.open(whatsappUrl, '_blank');
            }, 1200);
        });
    }
}); // <--- Certifique-se de que este fechamento é a última linha do arquivo