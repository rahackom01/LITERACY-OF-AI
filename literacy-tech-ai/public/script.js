const searchInput = document.getElementById('toolSearch');
const filterButtons = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.tool-card')];
const emptyState = document.getElementById('emptyState');
let activeCategory = 'All';
function updateTools() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesCategory = activeCategory === 'All' || card.dataset.category === activeCategory;
    const haystack = `${card.dataset.search} ${card.innerText}`.toLowerCase();
    const matchesSearch = haystack.includes(query);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeCategory = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  updateTools();
}));
searchInput.addEventListener('input', updateTools);
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
