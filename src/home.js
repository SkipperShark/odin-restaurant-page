import odinLogo from "../assets/images/odin-logo.png";

class Home {
  static content() {
    console.log("HomePage content");
    const logo = document.createElement("img");
    logo.src = odinLogo;
    logo.altText = "An icon of the odin project logo";

    const title = document.createElement("h1");
    title.innerText = "Odin Restaurant Page";

    const headline = document.createElement("p");
    headline.innerText =
      "Hello! Welcome to the best food in valhalla! Hope you enjoy :)";

    const divContainer = document.createElement("div");

    divContainer.append(logo, title, headline);
    return divContainer;
  }
}

export default Home;
