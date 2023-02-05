const cards = document.querySelectorAll(".itemCard");
// cards.forEach((card) => console.log(card.id));

const addToCardBtn = document.querySelectorAll(".addToCardBtn");
const addToCardSection = document.querySelector("#addToCardSection");
addToCardBtn.forEach((btn) => btn.addEventListener("click", showId));

console.log(`this is addToCardSection --- ${addToCardSection}`);
console.log(addToCardSection);

function showId() {
  const id = this.id;
  takeInnerHtml(id);
}

function takeInnerHtml(id) {
  cards.forEach((card) => {
    if (card.id === id) {
      let innerHtml = document.getElementById(`${card.id}`).innerHTML;
      console.log(innerHtml);
      addToCard(innerHtml, card.id);
    }
  });
}

function addToCard(innerHTM, id) {
  let div = document.createElement("div");
  div.classList.add("itemCard");
  div.id = id;

  div.innerHTML = innerHTM;
  console.log(div);
  addToCardSection.appendChild(div);

  console.log(`add to card section ${addToCardSection}`);
  console.log(addToCardSection);
}
