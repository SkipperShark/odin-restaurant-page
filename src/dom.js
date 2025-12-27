class DOM {
  constructor() {
    self.document = document;
    self.divContent = document.getElementById("content");
  }

  displayHomePage() {
    img = document.createElement("img");
    h1 = document.createElement("h1");
    h1.innerText = "Odin Restaurant Page";

    headline = document.createElement("p");
    headline.innerText =
      "Hello! Welcome to the best food in valhalla! Hope you enjoy :)";
  }
}
