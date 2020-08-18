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

  evaluateGuess() {
    return (this.attemptedAnswer === this.currentCard.correctAnswer ?
      true : false);
  }
}

module.exports = Turn;