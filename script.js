const io = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('in');
}), {threshold:.10});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
