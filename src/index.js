import Home from "./home.js";
import DOM from "./dom.js";
import "./style.css";

class Controller {
  constructor() {
    this.dom = new DOM();
  }

  displayHome() {
    const homeContent = Home.content();
    this.dom.contentNav(homeContent);
  }

  _init() {}
}

const controller = new Controller();
controller.displayHome();
