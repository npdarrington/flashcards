const Turn = require('./Turn');

class Round {
  constructor(cards) {
    this.deck = cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardSet[this.turns];
  }

  
}

module.exports = Round;