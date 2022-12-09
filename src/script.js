export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");
  const header = document.createElement("header");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");
  const title = document.createElement("p");

  header.appendChild(button1);
  header.appendChild(button2);
  header.appendChild(button3);
  card.appendChild(header);
  card.appendChild(title);
  contentDiv.appendChild(card);
  card.classList.add("menu");
  title.classList.add("title");

  title.textContent = "Dib's";
  button1.textContent = "HOME";
  button2.textContent = "MENU";
  button3.textContent = "CONTACT";
}
