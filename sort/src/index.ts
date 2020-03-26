class Sorter {
  constructor(public collection: number[] | string[]) {
    this.collection = collection;
  }
  sort(): void {
    this.collection.sort((n1: number | string, n2: number | string) => {
      if (n1 > n2) {
        return 1;
      }

      if (n1 < n2) {
        return -1;
      }

      return 0;
    });
  }
}

const sorter = new Sorter(["a", "c", "d"]);
sorter.sort();

console.log(sorter.collection);
