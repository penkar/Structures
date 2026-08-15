import { assert } from 'chai';
import MRU from '../components/mru.js';

describe('Most Recently Used.', () => {
  it('should add and retrieve values correctly', () => {
    const mru = new MRU(2);
    mru.add('a', 1);
    mru.add('b', 2);
    assert.equal(mru.get('a'), 1);
    assert.equal(mru.get('b'), 2);
  });

  it('should evict the least recently used item when maxSize is exceeded', () => {
    const mru = new MRU(2);
    mru.add('a', 1);
    mru.add('b', 2);
    mru.add('c', 3); // This should evict 'b'
    assert.equal(mru.get('a'), 1);
    assert.equal(mru.get('b'), null);
    assert.equal(mru.get('c'), 3);
  });
});
