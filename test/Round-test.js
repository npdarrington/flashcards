const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('..src/Deck');
const Round = require('../src/Round.js');

describe('Round', () => {
  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });
});