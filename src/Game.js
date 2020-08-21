const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    const mappedDataToCards = prototypeQuestions.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer);
    });
    const deck = new Deck(mappedDataToCards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printQuestion(round);
    this.printMessage(deck, round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;