// Subtle parallax on starfield
document.addEventListener('mousemove', (e) => {
  const stars = document.getElementById('stars');
  if (!stars) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  stars.style.transform = `translate(${x}px, ${y}px)`;
});

// Animate stat bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = width; }, 100);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statusWindow = document.querySelector('.status-window');
if (statusWindow) observer.observe(statusWindow);

// Typing effect for the system notification header (optional flair)
const systemHeader = document.querySelector('.hero-window .window-header span:last-child');
if (systemHeader) {
  const text = systemHeader.textContent;
  systemHeader.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      systemHeader.textContent += text[i++];
      setTimeout(type, 60);
    }
  };
  setTimeout(type, 500);
}