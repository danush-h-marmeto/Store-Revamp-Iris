class CustomPopup extends HTMLElement {
  constructor() {
    super();

    // Initialize references to elements within this instance
    this.hPopup = this.querySelector(".h-popup");
    const backgroundOverlay = document.querySelector(".background-overlay");
    const closeBtn = document.querySelector(".close-popup-btn");
    this.tryAtHomeWrapper = document.querySelector(".try-at-home-wrapper");

    // Add click event listeners specific to this instance
    if (this.hPopup) {
      this.hPopup.addEventListener("click", this.showPopup.bind(this));
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", this.hidePopup.bind(this));
    }
    if (backgroundOverlay) {
      backgroundOverlay.addEventListener("click", this.hidePopup.bind(this));
    }
    if (this.tryAtHomeWrapper) {
      this.tryAtHomeWrapper.addEventListener(
        "click",
        this.toggleTryAtHome.bind(this)
      );
    }
  }

  // Handler for showing the popup
  showPopup() {
    const whatsThisPopup = document.querySelector(".whats-this-popup");
    if (whatsThisPopup) {
      whatsThisPopup.classList.remove("hidden");
      document.body.classList.add("no-scroll");
    }
  }

  // Handler for hiding the popup
  hidePopup() {
    const whatsThisPopup = document.querySelector(".whats-this-popup");
    if (whatsThisPopup) {
      whatsThisPopup.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    }
  }

  // Handler for toggling the try-at-home wrapper
  toggleTryAtHome() {
    if (this.tryAtHomeWrapper) {
      this.tryAtHomeWrapper.classList.toggle("active");
    }
  }
}

// Define the custom element
customElements.define("custom-popup", CustomPopup);
