interface Vechile {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const OldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVechile = (vehicle: Vechile): void => {
  console.log(vehicle.summary());
  console.log(vehicle.name);
};

printVechile(OldCivic);

interface Reportable {
  summary(): string;
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} g of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

//same interface - different properties
printSummary(OldCivic);
printSummary(drink);
