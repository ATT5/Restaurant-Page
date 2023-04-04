const createContact = function () {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contactPage = document.createElement("div");
  contactPage.classList.add("page-content-contact");
  content.appendChild(contactPage);

  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact";
  contactPage.appendChild(contactTitle);

  const contactInfo = document.createElement("p");
  contactInfo.innerHTML = `Owner:<br>
                        555-555-5554<br>
                        totallyRealEmail@notFake.com`;
  contactPage.appendChild(contactInfo);

  const contactImg = document.createElement("img");
  contactImg.classList.add("contact-img");
  contactImg.setAttribute("src", "/contact.jpg");
  contactPage.appendChild(contactImg);
};

export default createContact;
