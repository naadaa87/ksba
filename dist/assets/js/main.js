document.documentElement.classList.add('js');
(() => {
  const header = document.getElementById('site-header');
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','메뉴 열기');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden','true');
    document.body.classList.remove('menu-open');
  };
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      if (open) return closeMenu();
      menuButton.classList.add('active');
      menuButton.setAttribute('aria-expanded','true');
      menuButton.setAttribute('aria-label','메뉴 닫기');
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden','false');
      document.body.classList.add('menu-open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());

  const topButton = document.querySelector('.to-top');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    if (topButton) topButton.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if (topButton) topButton.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}), {threshold:.12});
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));

  const params = new URLSearchParams(location.search);
  const typeMap = {founding:'창립회원 참여',partner:'파트너·제휴',expert:'전문위원 참여',standard:'표준문서 시범검토',education:'교육 협력'};
  const inquirySelect = document.getElementById('inquiry-type');
  if (inquirySelect && typeMap[params.get('type')]) inquirySelect.value = typeMap[params.get('type')];

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const error = document.getElementById('form-error');
      const required = [...form.querySelectorAll('[required]')];
      const invalid = required.find(el => el.type === 'checkbox' ? !el.checked : !el.value.trim());
      const email = form.querySelector('#email');
      if (invalid) {
        error.textContent = '필수 항목을 확인해 주세요.';
        invalid.focus(); return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        error.textContent = '이메일 주소를 정확히 입력해 주세요.'; email.focus(); return;
      }
      error.textContent = '';
      const data = new FormData(form);
      const subject = `[KSBA 문의] ${data.get('type')} - ${data.get('company') || data.get('name')}`;
      const body = [
        `문의 유형: ${data.get('type')}`,
        `이름·담당자: ${data.get('name')}`,
        `회사·브랜드명: ${data.get('company') || '-'}`,
        `이메일: ${data.get('email')}`,
        `연락처: ${data.get('phone') || '-'}`,
        `사업 분야: ${data.get('field') || '-'}`,
        '', '문의 내용', String(data.get('message') || '')
      ].join('\n');
      location.href = `mailto:runactivator@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();