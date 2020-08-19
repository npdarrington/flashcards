class Round {
  constructor(cards) {
    this.deck = cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
}

module.exports = Round;