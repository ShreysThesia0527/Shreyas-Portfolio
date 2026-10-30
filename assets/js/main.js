(() => {
 const toggle = document.querySelector('.menu-toggle');
 const nav = document.querySelector('.header nav');
 if (toggle && nav) {
   toggle.addEventListener('click', () => {
     const open = nav.classList.toggle('open');
     toggle.setAttribute('aria-expanded', String(open));
   });
   nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
     nav.classList.remove('open');
     toggle.setAttribute('aria-expanded', 'false');
   }));
 }
 document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
 const filterButtons = [...document.querySelectorAll('[data-filter]')];
 const projectCards = [...document.querySelectorAll('.project-card[data-category]')];
 filterButtons.forEach(button => button.addEventListener('click', () => {
   const filter = button.dataset.filter;
   filterButtons.forEach(item => {
     const active = item === button;
     item.classList.toggle('active', active);
     item.setAttribute('aria-pressed', String(active));
   });
   projectCards.forEach(card => {
     const visible = filter === 'all' || card.dataset.category === filter;
     card.classList.toggle('is-hidden', !visible);
   });
 }));
})();