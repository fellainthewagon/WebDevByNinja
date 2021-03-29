//---------------------filter method

/* const scores = [10, 30, 15, 25, 50, 40, 5];

const result = scores.filter((score) => {
  return score > 20;
});
console.log(result);

const users = [
  { name: "phill", premium: true },
  { name: "ernesto", premium: false },
  { name: "glenn", premium: false },
  { name: "john", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers); */

// --------------------map method

/* const praces = [10, 30, 15, 25, 50, 40, 5];

const result = praces.map((price) => price * 0.8);
console.log(result);

const products = [
  { name: "shugar", price: 20 },
  { name: "tea", price: 40 },
  { name: "banana", price: 30 },
  { name: "mushroom", price: 10 },
  { name: "potato", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(saleProducts); */

// --------------------reduce method

/* const scores = [10, 90, 15, 25, 50, 40, 70, 30];

const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);

console.log(result); */

/* const scores = [
  { player: "phill", score: 50 },
  { player: "ernesto", score: 30 },
  { player: "glenn", score: 40 },
  { player: "ernesto", score: 60 },
];

const ernestoTotal = scores.reduce((acc, curr) => {
  if (curr.player === "ernesto") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(ernestoTotal); */

// --------------------find method

/* const scores = [10, 90, 15, 25, 100, 40, 70, 30];

const firstHightScore = scores.find((score) => score > 90);
console.log(firstHightScore); */

// --------------------sort method

/* const names = ["phill", "jay", "evan", "regan", "antoine", "ronnie"];

names.sort();
names.reverse();
console.log(names); */

/* const scores = [10, 90, 15, 25, 100, 40, 70, 30];
scores.sort(); //--- по первой цифре
//scores.reverse();
console.log(scores);

scores.sort((a, b) => a - b);
console.log(scores); */

/* const players = [
  { player: "phill", score: 50 },
  { player: "gordon", score: 30 },
  { player: "glenn", score: 40 },
  { player: "ernesto", score: 35 },
  { player: "jay", score: 60 },
  { player: "dean", score: 70 },
];

players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});
console.log(players);
players.sort((a, b) => b.score - a.score);
console.log(players); */

// --------------------chaining array methods

/* const products = [
  { name: "shugar", price: 20 },
  { name: "tea", price: 40 },
  { name: "banana", price: 30 },
  { name: "mushroom", price: 35 },
  { name: "potato", price: 50 },
];

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);
console.log(promos); */
