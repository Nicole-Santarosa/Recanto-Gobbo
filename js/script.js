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

/* ================================
   ANIMAÇÃO DE ENTRADA - SERVICE CARDS
================================ */

const serviceCards = document.querySelectorAll('.service-card');

if (serviceCards.length > 0) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.addEventListener('transitionend', () => {
          entry.target.style.transitionDelay = '0s';
        }, { once: true });
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -200px 0px" });

  serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
    cardObserver.observe(card);
  });
}

/* ================================
   CARROSSEL 3D - BONÉ PRODUTO
================================ */

const boneCarousel = document.getElementById('bone-carousel');

if (boneCarousel) {
  const slides = Array.from(boneCarousel.querySelectorAll('.bone-carousel-slide'));
  const prevBtn = boneCarousel.querySelector('.bone-carousel-btn--prev');
  const nextBtn = boneCarousel.querySelector('.bone-carousel-btn--next');
  const total = slides.length;
  let current = 0;

  function getConfig(offset) {
    const abs = Math.abs(offset);
    const sign = offset < 0 ? -1 : 1;
    if (abs === 0) return { tx: '-50%',                              tz: 0,    ry: 0,           scale: 1,    opacity: 1,    z: 5 };
    if (abs === 1) return { tx: `calc(-50% + ${sign * 210}px)`,     tz: -150, ry: sign * -42,  scale: 0.78, opacity: 0.8,  z: 3 };
    if (abs === 2) return { tx: `calc(-50% + ${sign * 360}px)`,     tz: -300, ry: sign * -60,  scale: 0.55, opacity: 0.4,  z: 1 };
    return null;
  }

  function updateCarousel() {
    slides.forEach((slide, i) => {
      let offset = ((i - current) % total + total) % total;
      if (offset > total / 2) offset -= total;

      const config = getConfig(offset);

      if (!config) {
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
        slide.style.pointerEvents = 'none';
        return;
      }

      slide.style.transform = `translateX(${config.tx}) translateY(-50%) translateZ(${config.tz}px) rotateY(${config.ry}deg) scale(${config.scale})`;
      slide.style.opacity = config.opacity;
      slide.style.zIndex = config.z;
      slide.style.pointerEvents = offset === 0 ? 'auto' : 'none';
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % total;
    updateCarousel();
  });

  const stage = boneCarousel.querySelector('.bone-carousel-stage');
  let touchStartX = 0;
  stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      current = dx < 0 ? (current + 1) % total : (current - 1 + total) % total;
      updateCarousel();
    }
  });

  updateCarousel();
}

//card produtos
function changeImage(element){

  const mainImage = document.getElementById("mainProductImage");

  mainImage.src = element.src;

  document.querySelectorAll(".thumb").forEach(img => {
    img.classList.remove("active-thumb");
  });

  element.classList.add("active-thumb");

}