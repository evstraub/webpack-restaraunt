export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");
  const image = document.createElement("img");
  contentDiv.append(card);
  card.appendChild(title);
}
