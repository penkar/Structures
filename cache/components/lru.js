export default class LRU {
  constructor(maxSize) {
    this._maxSize = maxSize;
    this._cache = new Map();
  }

  add(key, value) {
    if (this._maxSize <= 0) return null;

    if (this._cache.has(key)) {
      this._cache.delete(key);
      this._cache.set(key, value);
      return null;
    }

    if (this._cache.size >= this._maxSize) {
      const first = this._cache.keys().next().value;
      this._cache.delete(first);
    }

    this._cache.set(key, value);
    return null;
  }

  get(key) {
    const value = this._cache.get(key);
    if (value) {
      this._cache.delete(key);
      this._cache.set(key, value);
    }

    return this._cache.get(key) || null;
  }
}
