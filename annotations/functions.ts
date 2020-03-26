const add = (a: string, b: number): string => {
  return a + b;
};

const todaysWheather = {
  date: new Date(),
  whether: "sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
