class Deck {
  constructor(cardDeck) {
    this.cardSet = cardDeck;
  }

  countCards() {
    return this.cardSet.length;
  }
}

module.exports = Deck;