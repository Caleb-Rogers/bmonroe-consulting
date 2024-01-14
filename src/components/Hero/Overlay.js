// Overlay.js

export const animatePrimaryOverlay = (heroText, heroImg, overlay, router) => {
    const primaryColors = ["#e1b711", "#ff6584", "#f5f5f5", "#333437"];
    heroText.classList.add("hero-text--hidden");
    heroImg.classList.add("hero-img-box--hidden");
    let index = 0;
    const intervalId = setInterval(() => {
      overlay.classList.remove("overlay--primary-initial");
      overlay.style.backgroundColor = primaryColors[index];
      index++;
      if (primaryColors === primaryColors.length) {
        clearInterval(intervalId);
      }
    }, 350); // Color Traversal Interval
    const delay = primaryColors.length * 460; // Router Trigger Interval
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
      overlay.classList.remove("overlay--secondary-initial");
      overlay.style.backgroundColor = secondaryColors[index];
      overlay.classList.add("overlay--active");
      setTimeout(() => {
        overlay.classList.remove("overlay--active");
      }, 100);
      index++;
      if (secondaryColors === secondaryColors.length) {
        clearInterval(intervalId);
      }
    }, 350); // Color Traversal Interval
    const delay = secondaryColors.length * 460; // Router Trigger Interval
    setTimeout(() => {
      router.push("/services");
    }, delay);
};