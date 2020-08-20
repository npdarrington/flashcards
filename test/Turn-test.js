const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('function', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should accept an answer and card as arguments', () => {
    expect(turn.attemptedAnswer).to.be.a('string');
    expect(turn.currentCard).to.be.an.instanceof(Card);
  });

  it('should return a guess', () => {
    expect(turn.returnGuess()).to.equal('function');
  });

  it('should return the current card in play', () => {
    expect(turn.returnCard()).to.be.an.instanceof(Card);
    expect(turn.returnCard()).to.deep.equal(card);
  })

  it('should return true when the guess is evaluated correct', () => {
    turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false when the guess is evaluated incorrect', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return answer is incorrect', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should return answer is correct', () => {
    turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });
});