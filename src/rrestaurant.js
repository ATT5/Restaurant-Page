//restauratne.js

const creatRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content-restaurant");
  content.appendChild(pageContent);

  const restName = document.createElement("h1");
  restName.textContent = "Taquería La Frontera";
  pageContent.appendChild(restName);

  const taco = document.createElement("img");
  taco.setAttribute("src", "/taco-img.svg");
  pageContent.appendChild(taco);

  const restaurantInfo = document.createElement("div");
  restaurantInfo.classList.add("rest-info");
  restaurantInfo.textContent = `Taqueria La Frontera is a vibrant and authentic Mexican restaurant that serves 
    up delicious tacos and other traditional Mexican dishes. The restaurant has a warm and inviting atmosphere with colorful decor, vibrant murals, and lively music.`;
  pageContent.appendChild(restaurantInfo);

  const openingHours = document.createElement("div");
  openingHours.classList.add("open-hours");
  pageContent.appendChild(openingHours);

  const hours = document.createElement("h2");
  hours.textContent = "Opening Hours";
  openingHours.appendChild(hours);

  const schedule = document.createElement("p");
  schedule.innerHTML = `
                            Sunday: 8am - 8pm<br>
                            Monday: 6am - 6pm<br>
                            Tuesday: 6am - 6pm<br>
                            Wednesday: 6am - 6pm<br>
                            Thursday: 6am - 10pm<br>
                            Friday: 6am - 10pm<br>
                            Saturday: 8am - 10pm`;
  openingHours.appendChild(schedule);

  const location = document.createElement("div");
  location.classList.add("location");
  pageContent.appendChild(location);

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = " Location";
  location.appendChild(locationTitle);

  const locationInfo = document.createElement("p");
  locationInfo.textContent = "215 S El Paso St, El Paso, TX 79901, EE. UU.";
  location.appendChild(locationInfo);
};

export default creatRestaurantHomePage;
