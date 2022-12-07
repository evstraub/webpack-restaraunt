export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");
  const title = document.createElement("div");
  contentDiv.append(card);
  card.appendChild(title);
}
