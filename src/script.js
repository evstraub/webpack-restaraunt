export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");

  //const heading = document.createElement("h1");
  //heading.textContent = "Dib's";
  //contentDiv.appendChild(heading);
  contentDiv.append(card);
  //card.appendChild(image);
  card.classList.add("menu-card");

  //CARDS
  const card1 = document.createElement("p");
  card1.classList.add("card1");
  card.appendChild(card1);

  const card2 = document.createElement("p");
  card2.classList.add("card2");
  card.appendChild(card2);

  const card3 = document.createElement("p");
  card3.classList.add("card3");
  card.appendChild(card3);
}
