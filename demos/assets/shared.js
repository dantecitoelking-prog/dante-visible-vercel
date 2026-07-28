const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true });

const burger = document.getElementById('burger'), mob = document.getElementById('mob');
let open = false;
burger.addEventListener('click', () => {
  open = !open;
  burger.classList.toggle('open', open);
  mob.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
function closeMob() {
  open = false;
  burger.classList.remove('open');
  mob.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.rev:not(.in)').forEach(el => obs.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); if (open) closeMob(); }
  });
});
