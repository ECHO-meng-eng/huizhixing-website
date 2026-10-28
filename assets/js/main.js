
document.addEventListener('DOMContentLoaded',function(){
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});}
 document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰';}));
 const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
});

/* ===== Homepage banner carousel controls ===== */
(function () {
  const hero = document.querySelector("#home-hero");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const dots = Array.from(hero.querySelectorAll(".hero-dot"));
  const prev = hero.querySelector(".hero-prev");
  const next = hero.querySelector(".hero-next");

  if (slides.length !== 4 || dots.length !== 4) return;

  let current = 0;
  let timer;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      dot.setAttribute("aria-pressed", String(i === current));
    });
  }

  function startAutoPlay() {
    clearInterval(timer);
    timer = setInterval(() => {
      showSlide(current + 1);
    }, 3000);
  }

  prev.addEventListener("click", () => {
    showSlide(current - 1);
    startAutoPlay();
  });

  next.addEventListener("click", () => {
    showSlide(current + 1);
    startAutoPlay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
      startAutoPlay();
    });
  });

  hero.addEventListener("mouseenter", () => clearInterval(timer));
  hero.addEventListener("mouseleave", startAutoPlay);

  showSlide(0);
  startAutoPlay();
})();

/* ===== Inner page banner carousel controls ===== */
document.querySelectorAll(".page-banner").forEach(function (hero) {
  const slides = Array.from(hero.querySelectorAll(".page-banner-slide"));
  const dots = Array.from(hero.querySelectorAll(".page-banner-dot"));
  const prev = hero.querySelector(".page-banner-prev");
  const next = hero.querySelector(".page-banner-next");

  if (slides.length !== 4 || dots.length !== 4 || !prev || !next) return;

  let current = 0;
  let timer;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      dot.setAttribute("aria-pressed", String(i === current));
    });
  }

  function startAutoPlay() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 3000);
  }

  prev.addEventListener("click", () => {
    showSlide(current - 1);
    startAutoPlay();
  });

  next.addEventListener("click", () => {
    showSlide(current + 1);
    startAutoPlay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startAutoPlay();
    });
  });

  hero.addEventListener("mouseenter", () => clearInterval(timer));
  hero.addEventListener("mouseleave", startAutoPlay);

  showSlide(0);
  startAutoPlay();
});
