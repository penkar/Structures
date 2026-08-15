export default class MRU {
  constructor(size) {
    if (size < 1) throw new Error('Size must be greater than 0');
    this.size = size;
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return null;
  }

  add(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.size) {
      let mostRecentKey;
      for (const key of this.cache.keys()) {
        mostRecentKey = key;
      }
      this.cache.delete(mostRecentKey);
    }
    this.cache.set(key, value);
  }
}
