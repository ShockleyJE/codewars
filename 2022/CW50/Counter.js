function count(string) {
  class Counter {
    constructor() {}

    update(c) {
      if (this[c] != undefined) {
        this[c] = this[c] + 1;
      } else {
        this[c] = 1;
      }
    }
  }

  // The function code should be here
  ctr = new Counter();
  string.split("").forEach((x) => ctr.update(x));
  return ctr;
}
