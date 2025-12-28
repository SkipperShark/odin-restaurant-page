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

  contentNav(divNewContent) {
    this.clearContent();
    this.divContent.append(divNewContent);
  }
}

export default DOM;
