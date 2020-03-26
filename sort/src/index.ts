class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }
  sort(): void {}
}

const sorter = new Sorter([3, 6, 2, 7]).sort();

console.log(sorter.collection);
