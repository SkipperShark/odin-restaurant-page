class About {
  static content() {
    console.log("About content");
    const title = document.createElement("h1");
    title.innerText = "About";

    const about = document.createElement("p");
    about.innerHTML = "A project to practice creating HTML via JavaScript";
    const divContainer = document.createElement("div");

    divContainer.append(title, about);
    return divContainer;
  }
}

export default About;
