import Home from "./home.js";
import DOM from "./dom.js";
import Menu from "./menu.js";
import "./style.css";

class Controller {
  constructor() {
    this.dom = new DOM();
  }

  displayHome() {
    const homeContent = Home.content();
    this.dom.contentNav(homeContent);
  }

  displayMenu() {
    const menuContent = Menu.content();
    this.dom.contentNav(menuContent);
  }
  displayAbout() {}
}

const controller = new Controller();
controller.displayHome();
