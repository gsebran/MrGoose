const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    formStatus.textContent = 'Thanks. This form will be active at launch.';
  });
}

const io = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('in');
}), {threshold:.10});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
