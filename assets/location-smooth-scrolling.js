class SmoothScrollElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.querySelectorAll(".grid__item").forEach((item) => {
      item.addEventListener("click", this.handleClick.bind(this));
    });
  }

  handleClick(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 200,
        behavior: "smooth",
      });
    }
  }
}
customElements.define("smooth-scroll-element", SmoothScrollElement);
