class Turn {
  constructor(attemptedAnswer, currentCard) {
    this.attemptedAnswer = attemptedAnswer;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.attemptedAnswer;
  }

  returnCard() {
    return this.currentCard;
  }
}

module.exports = Turn;