const createMenu = function () {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const pageContentMenu = document.createElement("div");
  pageContentMenu.classList.add("page-content-menu");
  content.appendChild(pageContentMenu);

  const menu = document.createElement("h1");
  menu.textContent = "Menu";
  pageContentMenu.appendChild(menu);

  const tacos = document.createElement("div");
  tacos.classList.add("tacos");
  pageContentMenu.appendChild(tacos);

  const tacosTitle = document.createElement("h2");
  tacosTitle.textContent = "Tacos";
  tacos.appendChild(tacosTitle);

  const typeofTacos = document.createElement("p");
  typeofTacos.innerHTML = ` Carnitas:...............$3.50<br>
                            Carne Asada:........ $4.00<br>
                            Al Pastor:.............. $3.75<br>
                            Pollo:................... $3.25<br>
                            Barbacoa:............. $3.50<br>
                            Vegetarian:............ $3.00`;
  tacos.appendChild(typeofTacos);

  const tacoImg = document.createElement("img");
  tacoImg.classList.add("taco-img");
  tacoImg.setAttribute("src", "/menu-tacos.jpg");
  pageContentMenu.appendChild(tacoImg);

  const drinks = document.createElement("div");
  drinks.classList.add("menu-driks");
  pageContentMenu.appendChild(drinks);

  const driksTitle = document.createElement("h2");
  driksTitle.textContent = "Drinks";
  drinks.appendChild(driksTitle);

  const typeofTDrinks = document.createElement("p");
  typeofTDrinks.innerHTML = `Agua Fresca:..... $2.50<br>
                            Margarita:....... $8.00<br>
                            Cerveza:......... $4.00<br>
                            Soft drinks:..... $2.00`;
  drinks.appendChild(typeofTDrinks);

  const driksImg = document.createElement("img");
  driksImg.classList.add("drink-img");
  driksImg.setAttribute("src", "/drinks-menu.jpg");
  pageContentMenu.appendChild(driksImg);
};
export default createMenu;
