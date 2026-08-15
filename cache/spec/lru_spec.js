import { assert } from 'chai';
import LRU from '../components/lru.js';

describe('Least Recently Used.', () => {
  it('should do nothing when maxSize is 0', () => {
    const lru = new LRU(0);
    lru.add('a', 1);
    assert.equal(lru.get('a'), null);
  });

  it('should add and retrieve values correctly', () => {
    const lru = new LRU(2);
    lru.add('a', 1);
    lru.add('b', 2);
    assert.equal(lru.get('a'), 1);
    assert.equal(lru.get('b'), 2);
  });

  it('should evict the least recently used item when maxSize is exceeded', () => {
    const lru = new LRU(2);
    lru.add('a', 1);
    lru.add('b', 2);
    lru.add('c', 3); // This should evict 'a'
    assert.equal(lru.get('a'), null);
    assert.equal(lru.get('b'), 2);
    assert.equal(lru.get('c'), 3);
  });
});
