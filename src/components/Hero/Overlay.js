// Overlay.js

export const animatePrimaryOverlay = (heroText, heroImg, overlay, router) => {
    const primaryColors = ["#e1b711", "#ff6584", "#f5f5f5", "#333437"];
    heroText.classList.add("hero-text--hidden");
    heroImg.classList.add("hero-img-box--hidden");
    let index = 0;
    const intervalId = setInterval(() => {
      overlay.style.backgroundColor = primaryColors[index];
      overlay.classList.add("overlay--active");
      setTimeout(() => {
        overlay.classList.remove("overlay--active");
      }, 100);
      index++;
      if (primaryColors === primaryColors.length) {
        clearInterval(intervalId);
      }
    }, 380); // Color Traversal Interval
    const delay = primaryColors.length * 480; // Router Trigger Interval
    setTimeout(() => {
      router.push("/contact");
    }, delay);
  };

export const animateSecondaryOverlay = (heroText, heroImg, overlay, router) => {
    const secondaryColors = ["#ff6584", "#e1b711", "#f5f5f5", "#333437"];
    heroText.classList.add("hero-text--hidden");
    heroImg.classList.add("hero-img-box--hidden");
    let index = 0;
    const intervalId = setInterval(() => {
      overlay.style.backgroundColor = secondaryColors[index];
      overlay.classList.add("overlay--active");
      setTimeout(() => {
        overlay.classList.remove("overlay--active");
      }, 100);
      index++;
      if (secondaryColors === secondaryColors.length) {
        clearInterval(intervalId);
      }
    }, 380); // Color Traversal Interval
    const delay = secondaryColors.length * 480; // Router Trigger Interval
    setTimeout(() => {
      router.push("/services");
    }, delay);
};