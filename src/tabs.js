import createMenu from "./menu";
import creatRestaurantHomePage from "./rrestaurant";
import createContact from "./conctact";

const createTabs = function () {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const home = document.createElement("div");
  home.classList.add("home");
  home.textContent = "Home";

  const menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.classList.add("menu");
  const contact = document.createElement("div");
  contact.textContent = "Contact";
  contact.classList.add("contact");

  document.body.insertBefore(tabs, content);
  tabs.append(home, menu, contact);

  menu.addEventListener("click", createMenu);
  home.addEventListener("click", creatRestaurantHomePage);
  contact.addEventListener("click", createContact);
};

export default createTabs;
