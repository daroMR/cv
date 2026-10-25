/* ==========================================================================
   CV & PORTAFOLIO — HESVIN DARIO MOLINA RIOS
   Interactividad Sobria: html2pdf, Notificación Silenciosa, Galería y Temas
   ========================================================================== */

(function () {
  'use strict';

  const GALLERY_DIR = 'galeria/';

  // Obras visuales maestras curadas (13 ítems)
  const CURATED_WORKS = [
    { name: "HMI_01 - Blender - Photoshop.png", title: "HMI 01 — Interfaz SCADA Industrial", tool: "Blender & Photoshop", orig: "HMI_01%20-%20Blender%20-%20Photoshop.png" },
    { name: "HMI_02 - Blender - photoshop.png", title: "HMI 02 — Panel Telemetría en Tiempo Real", tool: "Blender & Photoshop", orig: "HMI_02%20-%20Blender%20-%20photoshop.png" },
    { name: "HMI_04 - Blender - photoshop.gif", title: "HMI 04 — Simulación Operativa Dinámica", tool: "Blender 3D", orig: "HMI_04%20-%20Blender%20-%20photoshop.gif" },
    { name: "HMI_Scada01 - Blender - Photoshop.gif", title: "HMI SCADA 01 — Tanques de Almacenamiento", tool: "Blender & Photoshop", orig: "HMI_Scada01%20-%20Blender%20-%20Photoshop.gif" },
    { name: "Botonera_02 - Inventor.png", title: "Botonera de Control 02 — Ensamble 3D", tool: "Autodesk Inventor", orig: "Botonera_02%20-%20Inventor.png" },
    { name: "Patin_01 - Blender.gif", title: "Patín de Medición 01 — Animación Mecánica", tool: "Blender 3D", orig: "Patin_01%20-%20Blender.gif" },
    { name: "Patin_02 - Blender.gif", title: "Patín de Medición 02 — Tuberías & Válvulas", tool: "Blender 3D", orig: "Patin_02%20-%20Blender.gif" },
    { name: "Triptico - Blender - Photoshop.png", title: "Infografía Técnica Volumétrica 3D", tool: "Blender & Photoshop", orig: "Triptico%20-%20Blender%20-%20Photoshop.png" },
    { name: "Logo_01 - 3DMax - Gimp.png", title: "Identidad Visual 01 — Render 3D", tool: "3ds Max", orig: "Logo_01%20-%203DMax%20-%20Gimp.png" },
    { name: "Logo_02 - 3DMax - Gimp.png", title: "Identidad Visual 02 — Modelado y Sombreado", tool: "3ds Max", orig: "Logo_02%20-%203DMax%20-%20Gimp.png" },
    { name: "wall - 3DMax.jpg", title: "Wall Study 3D — Texturas e Iluminación", tool: "3ds Max", orig: "wall%20-%203DMax.jpg" }
  ];

  // Documentos Técnicos Oficiales en PDF (13 ítems)
  const CURATED_PDFS = [
    { title: "Control Volumétrico (TMS-SCADA) — Presentación Técnica", orig: "Soft_Ctrl_Vol%20-%20PwrPoint%20%20.pdf", type: "TMS / CRE" },
    { title: "Ficha Técnica Software HOH VOL", orig: "Triptico%20VOL%20-%20Blender%20-%20Inkscape.pdf", type: "Datasheet" },
    { title: "Plano Botonera de Control (Inventor)", orig: "Botonera_01%20-%20Inventor.pdf", type: "Inventor 3D" },
    { title: "Diagrama Isométrico 3D de Disparos", orig: "Disparos%20-%20Autocad%203D.pdf", type: "AutoCAD 3D" },
    { title: "Sistema Gas y Fuego — Plano 01", orig: "GasyFuego_01%20-%20Autocad.pdf", type: "Seguridad Industrial" },
    { title: "Sistema Gas y Fuego — Plano 02", orig: "GasyFuego_02%20-%20Autocad.pdf", type: "Seguridad Industrial" },
    { title: "Patín de Medición Móvil — Ingeniería de Detalle", orig: "Patin_Med_Movil%20-%20Autocad.pdf", type: "Ingeniería Mecánica" },
    { title: "Protector Mecánico 01 — Plano 3D", orig: "Protector%201%20-%20Autocad%203D.pdf", type: "AutoCAD 3D" },
    { title: "Protector Mecánico 02 — Ensamble", orig: "Protector_2%20-%20Autocad%203D.pdf", type: "AutoCAD 3D" },
    { title: "Trayectorias de Conducción — Hoja 02", orig: "Trayectorias_02%20-%20Autocad.pdf", type: "Piping & Trays" },
    { title: "Trayectorias de Conducción — Hoja 03", orig: "Trayectorias_03%20-%20Autocad.pdf", type: "Piping & Trays" },
    { title: "Trayectorias de Conducción — Hoja 04", orig: "Trayectorias_04%20-%20Autocad.pdf", type: "Piping & Trays" },
    { title: "Trayectorias de Conducción — Hoja 05", orig: "Trayectorias_05%20-%20Autocad.pdf", type: "Piping & Trays" }
  ];

  let activeLightboxIndex = 0;
  let isLightboxActive = false;

  // 1. Notificación Discreta en Segundo Plano (Gratuita desde GitHub Pages)
  // Puede configurarse con tu Telegram Bot Token y Chat ID o un webhook simple
  function sendDiscreetNotification(actionType) {
    try {
      const now = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });
      const referrer = document.referrer || 'Acceso directo';
      const userAgent = navigator.userAgent;
      const message = `📄 CV Hesvin Molina: [${actionType}] registrado el ${now}.\nReferrer: ${referrer}`;

      // Configuración de Telegram (puedes personalizar tu token o chat_id en localStorage o directo aquí)
      const tgBotToken = localStorage.getItem('tg_bot_token') || '';
      const tgChatId = localStorage.getItem('tg_chat_id') || '';

      if (tgBotToken && tgChatId) {
        fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: message
          })
        }).catch(() => {});
      }

      // Webhook alternativo (si se define en localStorage)
      const webhookUrl = localStorage.getItem('daro_webhook_url') || '';
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: actionType, time: now, referrer })
        }).catch(() => {});
      }
    } catch (e) {
      // Silencioso por diseño
    }
  }

  // 2. Generador Dinámico de PDF (Captura exacta de lo que se ve en la web)
  let html2pdfLoadingPromise = null;
  function loadHtml2Pdf() {
    if (window.html2pdf) return Promise.resolve(window.html2pdf);
    if (html2pdfLoadingPromise) return html2pdfLoadingPromise;

    html2pdfLoadingPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => resolve(window.html2pdf);
      script.onerror = () => reject(new Error('No se pudo cargar html2pdf'));
      document.head.appendChild(script);
    });
    return html2pdfLoadingPromise;
  }

  async function generateLivePDF() {
    const btn = document.getElementById('btn-download-pdf');
    const originalText = btn ? btn.innerHTML : 'Descargar PDF';

    if (btn) {
      btn.innerHTML = '<span>⏳</span> Generando PDF...';
      btn.style.pointerEvents = 'none';
    }

    // Disparar notificación discreta
    sendDiscreetNotification('DESCARGA_PDF_CLIC');

    try {
      const html2pdf = await loadHtml2Pdf();
      const element = document.getElementById('cv-document');

      if (!element) throw new Error('Elemento de CV no encontrado');

      const opt = {
        margin: [8, 8, 8, 8],
        filename: 'CV_Hesvin_Dario_Molina_Rios_2026.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm',
          format: 'letter',
          orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf().set(opt).from(element).save();
      showToast('✓ PDF generado y descargado correctamente');
    } catch (error) {
      console.warn('html2pdf fallback a window.print():', error);
      // Respaldo transparente: ventana de impresión nativa
      window.print();
    } finally {
      if (btn) {
        btn.innerHTML = originalText;
        btn.style.pointerEvents = '';
      }
    }
  }

  // 3. Tema Claro / Oscuro Sobrio
  function initTheme() {
    const saved = localStorage.getItem('daro-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeLabel(saved);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('daro-theme', next);
        updateThemeLabel(next);
      });
    }
  }

  function updateThemeLabel(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.textContent = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
    }
  }

  // 4. Renderizado de Galería Visual (13 Ítems)
  function renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;
    container.innerHTML = '';

    CURATED_WORKS.forEach((work, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.onclick = () => openLightbox(index);

      const img = document.createElement('img');
      img.className = 'gallery-thumb';
      img.src = GALLERY_DIR + work.orig;
      img.alt = work.title;
      img.loading = 'lazy';

      const info = document.createElement('div');
      info.className = 'gallery-card-info';

      const name = document.createElement('span');
      name.className = 'gallery-card-name';
      name.textContent = work.title.split('—')[0].trim();

      const tool = document.createElement('span');
      tool.textContent = work.tool;

      info.appendChild(name);
      info.appendChild(tool);

      card.appendChild(img);
      card.appendChild(info);
      container.appendChild(card);
    });
  }

  // 5. Renderizado de Documentos Técnicos PDF (13 Ítems)
  function renderPDFs() {
    const container = document.getElementById('pdf-docs-list');
    if (!container) return;
    container.innerHTML = '';

    CURATED_PDFS.forEach(pdf => {
      const link = document.createElement('a');
      link.className = 'pdf-item-link';
      link.href = GALLERY_DIR + pdf.orig;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = `Abrir ${pdf.title}`;

      link.onclick = () => {
        sendDiscreetNotification(`PDF_CONSULTADO: ${pdf.title}`);
      };

      const title = document.createElement('span');
      title.className = 'pdf-item-title';
      title.textContent = pdf.title;

      const tag = document.createElement('span');
      tag.className = 'pdf-item-tag';
      tag.textContent = `[${pdf.type}] ↗`;

      link.appendChild(title);
      link.appendChild(tag);
      container.appendChild(link);
    });
  }

  // 6. Lightbox Limpio
  function openLightbox(index) {
    activeLightboxIndex = index;
    isLightboxActive = true;

    const overlay = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');

    if (!overlay || !img) return;

    const item = CURATED_WORKS[activeLightboxIndex];
    img.src = GALLERY_DIR + item.orig;
    img.alt = item.title;
    if (cap) cap.textContent = `${item.title} — ${item.tool}`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const overlay = document.getElementById('lightbox');
    if (overlay) overlay.classList.remove('open');
    isLightboxActive = false;
    document.body.style.overflow = '';
  }

  function stepLightbox(delta) {
    activeLightboxIndex = (activeLightboxIndex + delta + CURATED_WORKS.length) % CURATED_WORKS.length;
    const item = CURATED_WORKS[activeLightboxIndex];
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    if (img) {
      img.src = GALLERY_DIR + item.orig;
      img.alt = item.title;
    }
    if (cap) cap.textContent = `${item.title} — ${item.tool}`;
  }

  function initLightbox() {
    const overlay = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!isLightboxActive) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') stepLightbox(1);
      if (e.key === 'ArrowLeft') stepLightbox(-1);
    });
  }

  // 7. Acciones Rápidas (Copiar correo, botón PDF, etc.)
  function initActions() {
    const pdfBtn = document.getElementById('btn-download-pdf');
    if (pdfBtn) {
      pdfBtn.addEventListener('click', (e) => {
        e.preventDefault();
        generateLivePDF();
      });
    }

    const printBtn = document.getElementById('btn-print');
    if (printBtn) {
      printBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    }

    const copyBtn = document.getElementById('btn-copy-email');
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('drqbeat@gmail.com').then(() => {
          showToast('✓ Correo copiado: drqbeat@gmail.com');
        }).catch(() => {
          showToast('drqbeat@gmail.com');
        });
      });
    }

    // Notificación discreta de visita (1 sola vez por sesión)
    if (!sessionStorage.getItem('visited_session')) {
      sessionStorage.setItem('visited_session', '1');
      sendDiscreetNotification('NUEVA_VISITA');
    }
  }

  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'subtle-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2600);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderGallery();
    renderPDFs();
    initLightbox();
    initActions();
  });
})();
