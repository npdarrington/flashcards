const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round.js');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let card4;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    card4 = new Card(4, 'What is the captial of Colorado?', ['Grand Junction', 'Colorado Springs', 'Denver'], 'Denver');
    deck = new Deck([card1, card2, card3, card4]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck of cards', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card in play', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should control the turn during a round of play', () => {
    expect(round.takeTurn).to.be.a('function');
  });

  it('should play a turn when a guess is made', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('pug');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should update the round each time a turn is played', () => {
    round.takeTurn('capybara');
    expect(round.turns).to.equal(1);
  });

  it('should store the id of the cards on incorrect guesses', () => {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('appendix');
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it('should return incorrect if the guess in wrong', () => {
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('should return correct if the guess in correct', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should return the percentage correct when user has finished game', () => {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('gotham');
    round.takeTurn('Denver');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});