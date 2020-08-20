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

  calculatePercentCorrect() {
    let percent = 0;
    if (this.incorrectGuesses.length === 0) {
      percent = 100;
    } else {
      percent = (this.incorrectGuesses.length / this.deck.cardSet.length) * 100;
    }
    return percent;
  }
}

module.exports = Round;