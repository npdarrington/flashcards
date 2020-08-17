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
    const answer = 'function'
    const turn = new Turn(answer, card);

    expect(turn.attemptedAnswer).to.be.a('string');
    expect(turn.card).to.be.an.instanceof(Card);
  });
});