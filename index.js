class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  load(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutofBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce(function(acc, value) {
        return acc + value;
      }, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce(function(acc, value) {
        return acc + value;
      }, 0);
      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
