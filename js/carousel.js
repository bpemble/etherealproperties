document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track  = carousel.querySelector('.carousel-track');
  const imgs   = track.querySelectorAll('img');
  const dotsEl = carousel.querySelector('.carousel-dots');
  let current  = 0;

  imgs.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Photo ${i + 1}`);
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });

  function goTo(n) {
    current = (n + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  carousel.querySelector('.carousel-btn--prev').addEventListener('click', () => goTo(current - 1));
  carousel.querySelector('.carousel-btn--next').addEventListener('click', () => goTo(current + 1));

  setInterval(() => goTo(current + 1), 5000);

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });
});
