class DOM {
  constructor() {
    this.divContent = document.getElementById("content");
    this.btnHome = document.getElementById("navHome");
    this.btnMenu = document.getElementById("navMenu");
    this.btnAbout = document.getElementById("navAbout");
  }

  clearContent() {
    this.divContent.innerHTML = "";
  }

  modifyContentTo(divNewContent) {
    this.clearContent();
    this.divContent.append(divNewContent);
  }

  bindHomeButton(handler) {
    this.btnHome.addEventListener("click", handler);
  }

  bindMenuButton(handler) {
    this.btnMenu.addEventListener("click", handler);
  }

  bindAboutButton(handler) {
    this.btnAbout.addEventListener("click", handler);
  }
}

export default DOM;
