import odinLogo from "../assets/images/odin-logo.png";

class DOM {
  constructor() {
    self.divContent = document.getElementById("content");
  }

  clearContent() {
    self.divContent.innerHTML = "";
  }

  displayHomePage() {
    this.clearContent();

    const logo = document.createElement("img");
    logo.src = odinLogo;
    logo.altText = "An icon of the odin project logo";

    const title = document.createElement("h1");
    title.innerText = "Odin Restaurant Page";

    const headline = document.createElement("p");
    headline.innerText =
      "Hello! Welcome to the best food in valhalla! Hope you enjoy :)";

    self.divContent.append(logo, title, headline);
  }
}

export default DOM;
