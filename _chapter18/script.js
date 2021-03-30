/* // rest param
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(12, 23, 43, 5, 723, 445, 7, 8, 4);
console.log(result);

// spread arr
const person = ["mia", "jules", "vincent"];
console.log(...person);
const people = ["marcelos", "butch", "zed", ...person];
console.log(people);

//spread obj
const men = { name: "jules", age: 40, job: "bad boy" };
const menClone = { ...men, location: "toluca lake" };
console.log(menClone);
console.log(men);
 */
// sets
/* const namesArr = ["vincent", "jules", "mia", "vincent"];
//console.log(namesArr);

//const namesSet = new Set(namesArr);
//console.log(namesSet);

//const uNames = [...namesSet];
const uNames = [...new Set(namesArr)];
console.log(uNames);

const ages = new Set();
ages.add(45);
ages.add(20).add(34);
ages.add(20);
console.log(ages);
ages.delete(20);
console.log(ages, ages.size);
console.log(ages.has(27));

ages.clear();
console.log(ages); */

// symbol

const symbolOne = Symbol("mia");
const symbolTwo = Symbol("mia");

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const person = {};
person.age = 30;
person["hair color"] = "black";

person[symbolOne] = "mia";
person[symbolTwo] = "vincent";

console.log(person);
