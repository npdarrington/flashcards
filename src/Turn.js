class Turn {
  constructor(attemptedAnswer, currentCard) {
    this.attemptedAnswer = attemptedAnswer;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.attemptedAnswer;
  }
}

module.exports = Turn;