const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

pepsi[0] = "asdf";

const carSpects: [number, number] = [400, 3345];

const carStats = {
  horsepower: 400,
  weight: 3354
};
