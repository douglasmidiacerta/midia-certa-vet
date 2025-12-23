// ==================== MOBILE MENU TOGGLE ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
}

// ==================== HEADER SCROLL EFFECT ====================
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==================== SMOOTH SCROLL ====================
function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Adicionar smooth scroll a todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    scrollToSection(target);
  });
});

// ==================== FAQ ACCORDION ====================
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const icon = button.querySelector('.faq-icon');
  
  // Fechar outros FAQs abertos
  const allFaqItems = document.querySelectorAll('.faq-item');
  allFaqItems.forEach(item => {
    if (item !== faqItem) {
      const otherAnswer = item.querySelector('.faq-answer');
      const otherIcon = item.querySelector('.faq-icon');
      otherAnswer.classList.remove('active');
      otherIcon.textContent = '+';
    }
  });
  
  // Toggle FAQ atual
  answer.classList.toggle('active');
  icon.textContent = answer.classList.contains('active') ? '−' : '+';
}

// ==================== CURRENT YEAR ====================
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// ==================== ANIMAÇÕES ON SCROLL (OPCIONAL) ====================
// Intersection Observer para animações suaves ao scrollar
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Adicionar animação aos cards (opcional - pode remover se não quiser)
const animatedElements = document.querySelectorAll('.problem-card, .solution-card, .result-card, .step-card, .portfolio-card');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ==================== PREVENÇÃO DE CLIQUES DUPLOS ====================
const buttons = document.querySelectorAll('button, a');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Adiciona feedback visual ao clicar
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 100);
  });
});

// ==================== LOG DE INICIALIZAÇÃO ====================
console.log('Landing Page Mídias Certa Vet - Carregada com sucesso! 🚀');
console.log('Todas as funcionalidades ativas:');
console.log('✅ Menu mobile');
console.log('✅ Smooth scroll');
console.log('✅ FAQ accordion');
console.log('✅ Animações on scroll');
console.log('✅ Header sticky com shadow');
