export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");
  const header = document.createElement("header");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");
  const title = document.createElement("p");
  const sumCard = document.createElement("div");
  const hoursCard = document.createElement("p");
  const locCard = document.createElement("p");

  header.appendChild(button1);
  header.appendChild(button2);
  header.appendChild(button3);
  card.appendChild(header);
  card.appendChild(title);
  card.appendChild(sumCard);
  card.appendChild(hoursCard);
  card.appendChild(locCard);
  contentDiv.appendChild(card);

  sumCard.classList.add("sum");
  hoursCard.classList.add("hours");
  locCard.classList.add("location");
  card.classList.add("menu");
  title.classList.add("title");

  sumCard.textContent =
    "I love coming here withmy family I love Dib so much she makes the best stink pot pie! -Ethan";
  hoursCard.textContent =
    "Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm";
  locCard.textContent = "10101992 peepee poopee drive hollywood CA";
  title.textContent = "Dib's";
  button1.textContent = "HOME";
  button2.textContent = "MENU";
  button3.textContent = "CONTACT";
}
