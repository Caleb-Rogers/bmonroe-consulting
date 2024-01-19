// Overlay.js

export const animatePrimaryOverlay = (heroText, heroImg, heroOverlay, router) => {
    const primaryColors = ["#e1b711", "#ff6584", "#4b77bc", "#333437"];
    heroText.classList.add("hero-text--hidden");
    heroImg.classList.add("hero-img-box--hidden");
    let index = 0;
    const intervalId = setInterval(() => {
      heroOverlay.classList.remove("hero-overlay--primary-initial");
      heroOverlay.style.backgroundColor = primaryColors[index];
      heroOverlay.classList.add("hero-overlay--active");
      setTimeout(() => {
        heroOverlay.classList.remove("hero-overlay--active");
      }, 100);
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

export const animateSecondaryOverlay = (heroText, heroImg, heroOverlay, router) => {
    const secondaryColors = ["#ff6584", "#e1b711", "#4b77bc", "#333437"];
    heroText.classList.add("hero-text--hidden");
    heroImg.classList.add("hero-img-box--hidden");
    let index = 0;
    const intervalId = setInterval(() => {
      heroOverlay.classList.remove("hero-overlay--secondary-initial");
      heroOverlay.style.backgroundColor = secondaryColors[index];
      heroOverlay.classList.add("hero-overlay--active");
      setTimeout(() => {
        heroOverlay.classList.remove("hero-overlay--active");
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

export const animateTertiaryOverlay = (aboutText, aboutImg, aboutOverlay, router) => {
  const tertiaryColors = ["#4b77bc", "#e1b711", "#ff6584", "#333437"];
  aboutImg.classList.add("about-sec-icon-group--hidden");
  aboutImg.classList.add("tertiary-btn--hidden");
  aboutText.classList.add("about-text--hidden");
  aboutImg.classList.add("about-sec-img-box--hidden");
  aboutOverlay.classList.add("about-overlay--active");
  let index = 0;
  const intervalId = setInterval(() => {
    aboutOverlay.classList.remove("about-overlay--tertiary-initial");
    aboutOverlay.style.backgroundColor = tertiaryColors[index];
    aboutOverlay.classList.add("about-overlay--active");
    setTimeout(() => {
      aboutOverlay.classList.remove("about-overlay--active");
    }, 100);
    index++;
    if (tertiaryColors === tertiaryColors.length) {
      clearInterval(intervalId);
    }
  }, 350); // Color Traversal Interval
  const delay = tertiaryColors.length * 460; // Router Trigger Interval
  setTimeout(() => {
    router.push("/services");
  }, delay);
};

export const animateServiceOverlay = (serviceText, serviceGrid, serviceOverlay, router) => {
  const serviceColors = ["#ff6584", "#e1b711", "#4b77bc", "#333437"];
  serviceText.classList.add("serv-sec-text--hidden");
  serviceGrid.classList.add("serv-row--hidden");
  serviceOverlay.classList.add("service-overlay--active");
  let index = 0;
  const intervalId = setInterval(() => {
    serviceOverlay.classList.remove("service-overlay--serv-initial");
    serviceOverlay.style.backgroundColor = serviceColors[index];
    serviceOverlay.classList.add("service-overlay--active");
    setTimeout(() => {
      serviceOverlay.classList.remove("service-overlay--active");
    }, 100);
    index++;
    if (serviceColors === serviceColors.length) {
      clearInterval(intervalId);
    }
  }, 350); // Color Traversal Interval
  const delay = serviceColors.length * 460; // Router Trigger Interval
  setTimeout(() => {
    router.push("/services");
  }, delay);
};