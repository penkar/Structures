import {assert} from 'chai';
import CC from './caesarcipher/caesarcipher.js';
import PI from './pifrommontecarlo/pifrommontecarlo.js';

describe('Caesar Cipher', () => {
  it("Simple Caesar Cipher implementation.", () => {
    assert.equal(CC('a', 1), 'b');
    assert.equal(CC('a',-1), 'z');
    assert.equal(CC('z', 1), 'a');
    assert.equal(CC('z',-1), 'y');
  });

  it("Short string implementation.", () => {
    assert.equal(CC('hello', 1), 'ifmmp');
  });
})

describe('With a set of random numbers you should be able to find PI.', () => {
  it('Should return a number that vaguely resembles Pi.', () => {
    assert.equal(parseInt(PI(5000000) * 100), 314);
  })
})