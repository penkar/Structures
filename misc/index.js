import {assert} from 'chai';
import CC from './caesarcipher/caesarcipher.js';

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