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

  giveFeedback() {
    const checkEvaluatedGuess = this.evaluateGuess();
    return (checkEvaluatedGuess ? `correct!` : `incorrect!`);
  }
}

module.exports = Turn;