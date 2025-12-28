class Menu {
  static content() {
    console.log("Menu content");
    const title = document.createElement("h1");
    title.innerText = "Odin Restaurant Page";

    const orderedList = document.createElement("ol");

    const menuItem1 = document.createElement("li");
    menuItem1.innerText = "Roasted Elk with looted beer";

    const menuItem2 = document.createElement("li");
    menuItem2.innerText = "Grilled duck with ransacked mead";

    const menuItem3 = document.createElement("li");
    menuItem3.innerText = "Fried boar with pillaged wine";

    orderedList.append(menuItem1, menuItem2, menuItem3);

    const divContainer = document.createElement("div");

    divContainer.append(title, orderedList);
    return divContainer;
  }
}

export default Menu;
