export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");
  contentDiv.appendChild(card);
  card.classList.add("menu");
}
