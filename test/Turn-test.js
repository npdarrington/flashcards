const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should instantiate with two arguments, a string answer and card it\'s referenced to', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.attemptedAnswer).to.be.a('string');
    expect(turn.currentCard).to.be.an.instanceof(Card);
  });

  it('should have a function that returns the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    let returnValue = turn.returnGuess();
    
    expect(turn.returnGuess).to.be.a('function');
    expect(returnValue).to.equal('object');
  });

  it('should have a function that returns the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    let returnCard = turn.returnCard();
    
    expect(turn.returnCard).to.be.a('function');
    expect(returnCard).to.be.an.instanceof(Card);
    expect(returnCard).to.deep.equal(card);
  });

  it('should have a function that evalutes the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    
    expect(turn.evaluateGuess).to.be.a('function');
  });

  it('should return a bool when the guess is evaluated correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    const returnGuess = turn.evaluateGuess();
    
    expect(returnGuess).to.equal(false);
  });
});