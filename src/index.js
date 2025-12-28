import Home from "./home.js";
import DOM from "./dom.js";
import Menu from "./menu.js";
import About from "./about.js";
import "./style.css";

class Controller {
  constructor() {
    this.dom = new DOM();
    const homeContent = Home.content();

    this.dom.bindHomeButton(() => {
      this.dom.modifyContentTo(homeContent);
    });

    this.dom.bindMenuButton(() => {
      this.dom.modifyContentTo(Menu.content());
    });

    this.dom.bindAboutButton(() => {
      this.dom.modifyContentTo(About.content());
    });

    this.dom.modifyContentTo(homeContent);
  }
}

new Controller();
