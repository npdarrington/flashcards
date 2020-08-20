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

  takeTurn(guess) {
    const cardInPlay = this.returnCurrentCard();
    const turn = new Turn(guess, cardInPlay);
    const userFeedback = turn.giveFeedback();
    if (!turn.evaluateGuess()) this.incorrectGuesses.push(cardInPlay.id);
    this.turns++;
    turn.currentCard = this.returnCurrentCard();
    return userFeedback;
  }
}

module.exports = Round;