const stage = document.getElementById('vinyl-stage');
const aboutPage = document.querySelector('.about-page');

/** Users cannot scroll past this Y offset on the About page. */
const MAX_ABOUT_SCROLL_Y = 1200;

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function capAboutScroll() {
  const y = aboutPage ? aboutPage.scrollTop : window.scrollY || window.pageYOffset || 0;
  if (y > MAX_ABOUT_SCROLL_Y) {
    if (aboutPage) {
      aboutPage.scrollTop = MAX_ABOUT_SCROLL_Y;
    } else {
      window.scrollTo(0, MAX_ABOUT_SCROLL_Y);
    }
  }
}

function animateAboutHero() {
  capAboutScroll();
  if (!stage) return;

  const viewport = aboutPage ? aboutPage.clientHeight : window.innerHeight || 1;
  const scrollContainerHeight = aboutPage
    ? aboutPage.scrollHeight
    : document.documentElement.scrollHeight;
  const naturalMaxScroll = Math.max(
    scrollContainerHeight - viewport,
    0
  );
  const maxScroll = Math.min(naturalMaxScroll, MAX_ABOUT_SCROLL_Y);
  const currentY = aboutPage ? aboutPage.scrollTop : window.scrollY || window.pageYOffset || 0;
  const scrollY = Math.min(currentY, MAX_ABOUT_SCROLL_Y);
  const stageTop = stage.offsetTop;

  // Start once the hero is near view, then keep animating until capped scroll end.
  const start = Math.max(stageTop - viewport * 0.7, 0);
  const end = Math.max(maxScroll, start + 1);
  const progress = clamp((scrollY - start) / Math.max(end - start, 1), 0, 1);

  // about1 -> about2 style transition
  const sleeveX = -180 * progress;
  const sleeveY = 10 * progress;
  const sleeveScale = 1 - 0.08 * progress;
  const discX = 240 * progress;
  const discY = -10 * progress;
  const discScale = 1 - 0.04 * progress;
  const discRotate = 180 * progress;

  stage.style.setProperty('--sleeve-x', `${sleeveX}px`);
  stage.style.setProperty('--sleeve-y', `${sleeveY}px`);
  stage.style.setProperty('--sleeve-scale', `${sleeveScale}`);
  stage.style.setProperty('--disc-x', `${discX}px`);
  stage.style.setProperty('--disc-y', `${discY}px`);
  stage.style.setProperty('--disc-scale', `${discScale}`);
  stage.style.setProperty('--disc-rotate', `${discRotate}deg`);
}

window.addEventListener('resize', animateAboutHero);
if (aboutPage) {
  aboutPage.addEventListener('scroll', animateAboutHero, { passive: true });
} else {
  window.addEventListener('scroll', animateAboutHero, { passive: true });
}
animateAboutHero();
