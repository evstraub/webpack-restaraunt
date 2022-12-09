export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const card = document.createElement("div");
  const btnbox = document.createElement("div");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");
  const image = document.createElement("img");
  image.classList.add("resimage");
  image.src = "../res.jpg";
  image.alt = "image";
  btnbox.appendChild(image);
  button1.textContent = "MENU";
  button2.textContent = "CONTACT";
  button3.textContent = "HOME";
  contentDiv.appendChild(btnbox);
  btnbox.appendChild(button1);
  btnbox.appendChild(button2);
  btnbox.appendChild(button3);
  contentDiv.append(card);

  btnbox.classList.add("btnbox");
  button1.classList.add("button1");
  button2.classList.add("button2");
  button3.classList.add("button3");
  card.classList.add("menu-card");

  //CARDS
  const card1 = document.createElement("p");
  card1.classList.add("card1");
  card.appendChild(card1);
  card1.textContent =
    "foood food so so so oso s oaos so ao ss aos xsddnd goo do oa fh sd shjbsasjdhsd jskjddhfd";

  const card2 = document.createElement("p");
  card2.classList.add("card2");
  card.appendChild(card2);
  card2.textContent =
    "foood food so so so oso s oaos so ao ss aos xsddnd goo do oa fh sd shjbsasjdhsd jskjddhfd";

  const card3 = document.createElement("p");
  card3.classList.add("card3");
  card.appendChild(card3);
  card3.textContent =
    "foood food so so so oso s oaos so ao ss aos xsddnd goo do oa fh sd shjbsasjdhsd jskjddhfd";
}

// const title = document.createElement("h1");
// button2.appendChild(title);
// title.textContent = "Dib's";
