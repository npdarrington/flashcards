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
    const correctGuesses = (this.turns - this.incorrectGuesses.length);
    return Math.round((correctGuesses / this.turns) * 100);
  }

  endRound() {
    console.log(`** Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;