// bono
(function () {
  const lightbox   = document.querySelector('.lightbox');
  const imgEl      = document.querySelector('.lightbox-img');
  const titleEl    = document.querySelector('.lightbox-title');
  const descEl     = document.querySelector('.lightbox-desc');
  const closeBtn   = document.querySelector('.lightbox-close');

  // 
  
  function openLightbox(src, title, desc) {
    imgEl.src = src || '';
    imgEl.alt = title || '';
    titleEl.textContent = title || '';
    descEl.textContent  = desc || '';
    lightbox.setAttribute('aria-hidden', 'false');

    // fix
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    //
    lightbox.style.overflow = 'auto';
  }

  // 
  
  
  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
    // Restore page scroll
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    lightbox.scrollTop = 0; }

  
  // Desktops gallery
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.pop-card img');
    if (img) {
      const src   = img.getAttribute('src');
      const title = img.dataset.title || img.getAttribute('alt') || '';
      const desc  = img.dataset.desc  || '';
      openLightbox(src, title, desc);
    }

  });

  // Tablet
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.menu-list .item img');
    if (img) {
      const src    = img.getAttribute('src');
      const item   = img.closest('.item');
      const title  = item?.querySelector('h3')?.textContent?.trim() || img.alt || '';
      const desc   = item?.querySelector('p')?.textContent?.trim()  || '';
      openLightbox(src, title, desc);
    }
  });

  // 
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // 
  
  function adjustImageSize() {
    imgEl.style.maxHeight = '80vh';
    imgEl.style.width = 'auto';
    imgEl.style.height = 'auto';
  }
  window.addEventListener('resize', adjustImageSize);
})();