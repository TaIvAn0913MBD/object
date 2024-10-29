const too = [
  {
    color: "purple",
    mark: "toyota",
    power: 600,
  },
  {
    color: "purple",
    mark: "benz",
    power: 700,
  },
  {
    color: "purple",
    mark: "bmw",
    power: 800,
  },
  {
    color: "purple",
    mark: "ford",
    power: 900,
  },
  {
    color: "purple",
    mark: "mustang",
    power: 1000,
  },
];
let sum = 0;
const davt = too.length;
for (let i = 0; i < davt; i++) {
  let ner = i.toString();
  let shine = {
    color: "red",
    mark: ner,
    power: i * 100 + 100,
  };
  sum += too[i].power;
  too.push(shine);
  console.log(shine.power);
}

console.log(sum / davt);
const myf = () => {
  console.log("hello");
};
myf();
