const cards = [
    "/img/credit-cards/Credit-Card-1.png",
    "/img/credit-cards/Credit-Card-2.png",
    "/img/credit-cards/Credit-Card-3.png",
    "/img/credit-cards/Credit-Card-4.png",
    "/img/credit-cards/Credit-Card-5.png"
  ]

export function gusPhoto() {
    return cards[Math.floor(Math.random() * cards.length)];
}