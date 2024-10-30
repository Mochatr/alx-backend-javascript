export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw new TypeError('size must be a number');
    }

    this._size = newSize;
  }

  get location() {
    return this.location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._location = newLocation;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }

    if (hint === 'string') {
      return this._location;
    }

    return this;
  }
}
