/* ==============================================
   BILL MUNDIAL – script.js
   Particles · Products · Nav · Interactions
   ============================================== */

'use strict';

// ─────────────────────────────────────────────
// PRODUCTS DATA
// ─────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, icon: '⚡', img: 'images/chatgpt-pro.jpeg',
    category: 'ia',
    title: 'Chat GPT Pro / 1 Mes',
    desc: 'Activación solo con tu correo!!',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 15, priceUSDT: 7,
    fullDesc: '<strong>Máxima Potencia sin Límites:</strong> Acceso total y prioritario a 5.4 Pro y los modelos de razonamiento avanzado o1, sin restricciones de mensajes y con respuestas instantáneas.<br><br><strong>Análisis y Creación Profesional:</strong> Procesa bases de datos complejas en Excel, genera imágenes en alta resolución con DALL-E 3 e investiga con acceso a internet en tiempo real.<br><br><strong>Contexto y Memoria Expandida:</strong> Capacidad para leer y analizar documentos masivos (libros o códigos extensos) en una sola sesión sin perder el hilo de la información.<br><br><strong>Interacción Multimodal:</strong> Usa el Modo de Voz Avanzado para diálogos naturales y la Visión de IA para analizar fotos, diagramas o notas manuscritas al instante.'
  },
  {
    id: 2, icon: '🎨', img: 'images/panel-canva-500.jpeg',
    category: 'diseno',
    title: 'Panel Canva 500 usuarios / 3 años',
    desc: 'Activación solo con tu correo!!',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 25, priceUSDT: 9,
    fullDesc: '<strong>Habilitar el modo PRO hasta un máximo de 500 personas.</strong><br><br><strong>IA de un clic:</strong> Borra fondos, elimina objetos y cambia el tamaño de tus diseños automáticamente.<br><br><strong>Contenido Total:</strong> Uso ilimitado de 100 millones de fotos, videos y audios premium sin marcas de agua.<br><br><strong>Control de Marca (solo el admin):</strong> Guarda tus logos, colores y fuentes para que todo combine siempre de forma automática.<br><br><strong>Potencia de Archivo:</strong> 1 TB de espacio y descargas en máxima calidad (fondo transparente y vectores).<br><br><strong>Asistente Inteligente:</strong> Redacción automática de textos y programación de publicaciones en redes sociales.'
  },
  {
    id: 3, icon: '📘', img: 'images/office-365.jpeg',
    category: 'productividad',
    title: 'Microsoft Office 365 / 1 Año',
    desc: 'Activación solo con tu correo!!',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 20, priceUSDT: 9,
    fullDesc: '<strong>Multi-instalación:</strong> Instala y usa las aplicaciones completas (Word, Excel, PowerPoint) en hasta 5 dispositivos a la vez.<br><br><strong>Nube Gigante:</strong> Obtienes 1 TB (1,000 GB) de almacenamiento privado en OneDrive con autoguardado y recuperación de versiones.<br><br><strong>Diseño con IA:</strong> Crea diapositivas automáticas en PowerPoint y obtén correcciones avanzadas de estilo y tono en Word.<br><br><strong>Contenido Pro:</strong> Acceso libre a miles de imágenes de stock, iconos, fuentes exclusivas y edición de video en 4K con Clipchamp.<br><br><strong>Excel y Correo Pro:</strong> Desbloqueas funciones de datos avanzadas en Excel y un Outlook sin publicidad con seguridad reforzada.'
  },
  {
    id: 4, icon: '🎯', img: 'images/canva-pro-personal.jpeg',
    category: 'diseno',
    title: 'Canva PRO - personal / 3 años',
    desc: 'Activación solo con tu correo!!',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 8, priceUSDT: 4,
    fullDesc: '<strong>Habilitar el modo PRO hasta un máximo de 500 personas por 3 años.</strong><br><br><strong>IA de un clic:</strong> Borra fondos, elimina objetos y cambia el tamaño de tus diseños automáticamente.<br><br><strong>Contenido Total:</strong> Uso ilimitado de 100 millones de fotos, videos y audios premium sin marcas de agua.<br><br><strong>Potencia de Archivo:</strong> 1 TB de espacio y descargas en máxima calidad (fondo transparente y vectores).<br><br><strong>Asistente Inteligente:</strong> Redacción automática de textos y programación de publicaciones en redes sociales.'
  },
  {
    id: 5, icon: '🎬', img: 'images/capcut-pro.jpeg',
    category: 'diseno',
    title: 'CapCut Pro / 1 Mes',
    desc: 'Se te brinda una cuenta',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 18, priceUSDT: 8,
    fullDesc: '<strong>IA de Edición Pro:</strong> Elimina fondos de video sin pantalla verde, usa retoque corporal avanzado y vincula objetos al movimiento con Seguimiento de Cámara.<br><br><strong>Recursos Exclusivos:</strong> Acceso total a efectos, transiciones, filtros y una biblioteca de música y sonidos premium sin marcas de agua.<br><br><strong>Audio Inteligente:</strong> Genera subtítulos automáticos con estilos Pro, elimina el ruido de fondo y separa la voz de la música con un solo clic.<br><br><strong>Calidad de Cine:</strong> Exporta tus proyectos en máxima resolución 4K a 60 FPS para una fluidez profesional en cualquier pantalla.<br><br><strong>Nube y Marca Limpia:</strong> Sincroniza tus proyectos entre PC y celular con almacenamiento ampliado y elimina cualquier logo de CapCut al exportar.'
  },
  {
    id: 10, icon: '🎬', img: 'images/capcut-pro.jpeg',
    category: 'diseno',
    title: 'CapCut Pro / 3 Meses',
    desc: 'Se te brinda una cuenta',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 35, priceUSDT: 12,
    fullDesc: '<strong>IA de Edición Pro:</strong> Elimina fondos de video sin pantalla verde, usa retoque corporal avanzado y vincula objetos al movimiento con Seguimiento de Cámara.<br><br><strong>Recursos Exclusivos:</strong> Acceso total a efectos, transiciones, filtros y una biblioteca de música y sonidos premium sin marcas de agua.<br><br><strong>Audio Inteligente:</strong> Genera subtítulos automáticos con estilos Pro, elimina el ruido de fondo y separa la voz de la música con un solo clic.<br><br><strong>Calidad de Cine:</strong> Exporta tus proyectos en máxima resolución 4K a 60 FPS para una fluidez profesional en cualquier pantalla.<br><br><strong>Nube y Marca Limpia:</strong> Sincroniza tus proyectos entre PC y celular con almacenamiento ampliado y elimina cualquier logo de CapCut al exportar.'
  },
  {
    id: 6, icon: '🖥️', img: 'images/windows-11-pro.jpeg',
    category: 'sistema',
    title: 'Windows 11 Pro / Permanente',
    desc: 'Clave KEY Original',
    detail: 'Licencia de por vida · Entrega digital',
    priceSoles: 35, priceUSDT: 12,
    fullDesc: '<strong>Activación Perpetua:</strong> Licencia original de por vida que no caduca nunca y se reactiva automáticamente al formatear o reinstalar el sistema.<br><br><strong>Cifrado BitLocker:</strong> Seguridad profesional que blinda todo tu disco duro para que nadie acceda a tus archivos si te roban la computadora.<br><br><strong>Escritorio Remoto:</strong> Capacidad de conectarte y controlar tu PC desde cualquier lugar del mundo usando otro dispositivo.<br><br><strong>Seguridad Virtualizada:</strong> Incluye un Sandbox (entorno aislado) para abrir archivos sospechosos sin riesgo de infectar tu sistema principal.<br><br><strong>Control Total:</strong> Gestión avanzada de actualizaciones, directivas de grupo y Hyper-V para crear máquinas virtuales de forma nativa.'
  },
  {
    id: 7, icon: '🔍', img: 'images/perplexity-pro.jpeg',
    category: 'ia',
    title: 'Perplexity Pro / 1 Año',
    desc: 'Activación solo con tu correo!!',
    detail: 'Acceso inmediato · Entrega digital',
    priceSoles: 30, priceUSDT: 12,
    fullDesc: '<strong>Multimodelo de IA:</strong> Elige libremente entre los mejores cerebros del mundo (GPT-5.4, Claude 4.6, Gemini 3.1 Pro y Kimi K 2.5).<br><br><strong>Búsqueda Profunda (Pro Search):</strong> Realiza investigaciones exhaustivas en cientos de fuentes con más de 300 consultas diarias guiadas.<br><br><strong>Análisis de Archivos:</strong> Sube documentos, PDFs o libros completos de forma ilimitada para que la IA los resuma o extraiga datos.<br><br><strong>Privacidad y Velocidad:</strong> Navegación ultra rápida con prioridad en servidores y opción de proteger tus datos para que no entrenen a la IA.'
  },
  {
    id: 8, icon: '🛡️', img: 'images/avast-premium.jpeg',
    category: 'seguridad',
    title: 'Avast Premium Security / 1 Año',
    desc: 'Clave KEY Original',
    detail: 'Licencia original · Entrega digital',
    priceSoles: 25, priceUSDT: 9,
    fullDesc: '<strong>Privacidad Total:</strong> Bloquea el acceso no autorizado a tu webcam, protege tus contraseñas y destruye archivos sensibles para que sean irrecuperables.<br><br><strong>Escudo Anti-Hackers:</strong> Incluye un Firewall avanzado y bloquea intentos de control remoto para que nadie manipule tu PC a distancia.<br><br><strong>Navegación Segura:</strong> Verifica que los sitios web sean reales (Protección DNS) para evitar estafas bancarias y robos de datos al comprar.<br><br><strong>Anti-Secuestro de Datos:</strong> Su escudo contra Ransomware impide que virus cifren tus fotos o documentos para pedirte dinero por ellos.<br><br><strong>Entorno Seguro (Sandbox):</strong> Permite abrir archivos sospechosos en un espacio aislado para que, si tienen virus, no dañen tu computadora.'
  },
  {
    id: 9, icon: '🔒', img: 'images/mcafee-total.jpeg',
    category: 'seguridad',
    title: 'McAfee Total Protection / 1 Año',
    desc: 'Clave KEY Original',
    detail: 'Licencia original · Entrega digital',
    priceSoles: 30, priceUSDT: 11,
    fullDesc: '<strong>Vigilancia de Identidad:</strong> Monitorea la Dark Web para avisarte si tus correos o tarjetas se filtran y te guía para protegerte.<br><br><strong>VPN Segura Ilimitada:</strong> Cifra tus datos automáticamente en redes Wi-Fi públicas para que nadie rastree tu ubicación o tus cuentas.<br><br><strong>Defensa Inteligente:</strong> Antivirus con IA y un Firewall de alto nivel que bloquean hackers, virus y secuestros de datos (ransomware).<br><br><strong>Privacidad en la Web:</strong> Bloquea rastreadores de anuncios, detecta sitios de estafa antes de que hagas clic y gestiona tus contraseñas.<br><br><strong>Limpieza Irreversible:</strong> Incluye el Shredder para destruir archivos sensibles de forma que nadie pueda recuperarlos jamás.'
  },
];

function openWhatsApp(productName, productDesc) {
  const msg = encodeURIComponent(`Hola, me interesa comprar: ${productName} - ${productDesc}. ¿Me pueden dar más información?`);
  window.open(`https://wa.me/51918790322?text=${msg}`, '_blank', 'noopener');
}
window.openWhatsApp = openWhatsApp;

function toggleDescription(btn) {
  const card = btn.closest('.product-card');
  const descPanel = card.querySelector('.card-full-desc');
  const isOpen = descPanel.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}
window.toggleDescription = toggleDescription;

function togglePayment(btn) {
  const card = btn.closest('.product-card');
  const payPanel = card.querySelector('.card-payment-methods');
  const isOpen = payPanel.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}
window.togglePayment = togglePayment;

// ─────────────────────────────────────────────
// RENDER PRODUCT CARDS
// ─────────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const waIconSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;

  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product-card reveal reveal-delay-${i + 1}" data-index="${p.id}" data-category="${p.category}">
      <div class="card-glow"></div>
      <div class="card-inner">
        ${p.img ? `
        <div class="card-mockup card-mockup--img">
          <img src="${p.img}" alt="${p.title}" class="card-product-img" />
        </div>
        ` : `
        <div class="card-mockup">
          <div class="mockup-3d">
            <div class="mockup-face mockup-face--front">
              <div class="mockup-icon">${p.icon}</div>
              <div class="mockup-label">DIGITAL</div>
            </div>
            <div class="mockup-face mockup-face--side"></div>
            <div class="mockup-face mockup-face--bottom"></div>
          </div>
          <div class="mockup-reflection"></div>
        </div>
        `}
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.desc}</p>
          <p class="card-detail">${p.detail}</p>
          <div class="card-price">
            <div class="price-tag price-tag--soles">
              <span class="price-value">S/ ${p.priceSoles}</span>
            </div>
            <span class="price-divider">ó</span>
            <div class="price-tag price-tag--usdt">
              <span class="price-value">${p.priceUSDT} USDT</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn--buy" onclick="openWhatsApp('${p.title}', '${p.desc}')">
              ${waIconSVG}
              Comprar
            </button>
            <button class="btn-desc-toggle" onclick="togglePayment(this)" aria-expanded="false">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z"/><path d="M1 10h22"/></svg>
              Métodos de pago
            </button>
            <button class="btn-desc-toggle" onclick="toggleDescription(this)" aria-expanded="false">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Descripción
            </button>
          </div>
          <div class="card-payment-methods">
            <img src="images/yape-logo.png" alt="Yape" class="pay-logo-img" onerror="this.outerHTML='<span class=\\'pay-badge yape-badge\\'>yape</span>'" />
            <img src="images/plin-logo.png" alt="Plin" class="pay-logo-img" onerror="this.outerHTML='<span class=\\'pay-badge plin-badge\\'>plin</span>'" />
            <img src="images/binance-logo.png" alt="Binance" class="pay-logo-img" onerror="this.outerHTML='<span class=\\'pay-badge binance-badge\\'>binance</span>'" />
            <img src="images/paypal-logo.png" alt="PayPal" class="pay-logo-img" onerror="this.outerHTML='<span class=\\'pay-badge paypal-badge\\'>paypal</span>'" />
          </div>
          <div class="card-full-desc">
            <p>${p.fullDesc}</p>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}


// ─────────────────────────────────────────────
// HEADER – scroll shadow & active nav
// ─────────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 120;
      if (window.scrollY >= top) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─────────────────────────────────────────────
// HAMBURGER MENU
// ─────────────────────────────────────────────
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on nav link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// ─────────────────────────────────────────────
// SCROLL REVEAL (IntersectionObserver)
// ─────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────
// CARD TILT ON HOVER (subtle 3D tilt effect)
// ─────────────────────────────────────────────
function initCardTilt() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ─────────────────────────────────────────────
// ADD REVEAL CLASS TO SECTIONS
// ─────────────────────────────────────────────
function addRevealClasses() {
  const targets = document.querySelectorAll(
    '.section-header, .contact__inner > *'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${(i % 5) + 1}`);
  });
}

// ─────────────────────────────────────────────
// MASONRY LAYOUT (horizontal order, no gaps)
// ─────────────────────────────────────────────
function initMasonry() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  function getColConfig() {
    const w = window.innerWidth;
    if (w <= 480) return { cols: 1, gap: 16 };
    if (w <= 768) return { cols: 2, gap: 16 };
    if (w <= 1100) return { cols: 2, gap: 20 };
    return { cols: 4, gap: 24 };
  }

  function layout() {
    const cards = Array.from(grid.querySelectorAll('.product-card'));
    if (!cards.length) return;

    const { cols, gap } = getColConfig();
    const gridWidth = grid.clientWidth;
    const colWidth = (gridWidth - (cols - 1) * gap) / cols;
    const colHeights = new Array(cols).fill(0);

    cards.forEach((card, i) => {
      const col = i % cols;
      card.style.width = colWidth + 'px';
      card.style.left = (col * (colWidth + gap)) + 'px';
      card.style.top = colHeights[col] + 'px';
      colHeights[col] += card.offsetHeight + gap;
    });

    grid.style.height = (Math.max(...colHeights) - gap) + 'px';
  }

  // Initial layout
  layout();

  // Enable smooth top transitions after first paint
  requestAnimationFrame(() => {
    grid.classList.add('masonry-init');
  });

  // Relayout on window resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 80);
  });

  // Observe card size changes for smooth relayout during description toggle
  const ro = new ResizeObserver(() => {
    requestAnimationFrame(layout);
  });
  grid.querySelectorAll('.product-card').forEach(card => ro.observe(card));

  // Relayout after images finish loading
  grid.querySelectorAll('.card-product-img').forEach(img => {
    if (!img.complete) img.addEventListener('load', layout, { once: true });
  });
}

// ─────────────────────────────────────────────
// SMOOTH SCROLL POLYFILL for anchor links
// ─────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ─────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  addRevealClasses();

  // Run after cards are in DOM
  requestAnimationFrame(() => {
    initHeader();
    initMobileNav();
    initScrollReveal();
    initCardTilt();
    initSmoothScroll();
    initMasonry();
  });
});
