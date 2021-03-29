/* let email = "fellainthewagon@gmail.com";
let index = email.indexOf("@");
console.log(index);

let lastName = "Rylkou";
console.log(lastName.length); */

//__________________________
//common string methods

/* let email = "fellainthewagon@gmail.com";

let resultIndex = email.lastIndexOf("l");
let resultSlise = email.slice(0, 15);
let resultSubstr = email.substr(16, 5);
let resultReplace = email.replace("l", "j");

console.log(resultReplace); */

//_____________________________
//numbers

/* let radius = 10;
const pi = 3.14;

let result = pi * radius ** 2;
radius++;
radius += 10;

console.log(radius);
console.log(radius * "hi"); */

//_____________________________
//template strings

/* const title = "Best reads of 2021";
const author = "Mario";
const likes = 55;

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

let html = `
<h2>${title}</h2>
<p> ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html); */

//_____________________________
// loops

/* for (let i = 0; i < 8; i++) {
  console.log("in loop:", i);
}
console.log("loop finished"); */

/* const names = ["denis", "alex", "ina"];

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
} */

/* let i = 0;

while (i < 5) {
  console.log("in loop:", i);
  i++;
} */

/* const names = ["vinchi", "colt", "diablo"];
let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++;
} */

/* const score = [20, 45, 95, 83, 0, 29, 100, 71, 5];

for (let i = 0; i < score.length; i++) {
  if (score[i] === 0) {
    continue;
  }

  console.log("your score:", score[i]);

  if (score[i] === 100) {
    console.log("Congrats, you got the top score!");
    break;
  }
} */

/* const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  default:
    console.log("not a valid grade");
} */

/* let userName = "Valentin";

if (true) {
  let userName = "Grisha";
  console.log(userName);
  if (true) {
    let userName = "Filipp";
    console.log(userName);
  }
}

console.log(userName); */

//_____________________________
//funcs & methods

/* const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

const area = calcArea(5);
console.log(area); */

/* const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log(area); */

/* let cities = ["Gothem", "Soligorsk", "Melburn"];
let names = ["Sasha", "Oleg", "Nik"];

const logItems = (item, index) => console.log(`${index} - ${item}`);

cities.forEach(logItems);
names.forEach(logItems); */
//cities.forEach((city, index) => console.log(index, city));

/* const ul = document.querySelector(".people");
const people = ["ronnie", "chris", "dorian", "jey", "phill"];

let html = ``;
people.forEach(
  (person) => (html += `<li style="color: purple">${person}</li>`)
);

console.log(html);
ul.innerHTML = html;

const ulTwo = document.querySelector(".cities");
const cities = ["Soligorsk", "Minsk", "Krugloe", "Brest"];

let htmlTwo = ``;
cities.forEach((city) => (htmlTwo += `<li style="color: green">${city}</li>`));

console.log(htmlTwo);
ulTwo.innerHTML = htmlTwo; */

//_____________________________
//objects

/* const blogs = [
  { title: "Why mac and chees rules", likes: 30 },
  { title: "10 things to make whith marmate", likes: 50 },
];
console.log(blogs); */

/* let user = {
  name: "Brandon",
  age: 30,
  blogs: [
    { title: "Why mac and chees rules", likes: 30 },
    { title: "10 things to make whith marmate", likes: 50 },
  ],
  logBlogs() {
    console.log(`${this.name} has written the following blogs:`);
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

user.logBlogs();
console.log(user.blogs); */

/* console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.51;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random number

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100)); */

//_____________________________
//reference type

/* let builder = {
  name: "ronnie",
  age: 30,
  weight: 135,
};

let builderCopy = builder;
console.log(`${builder.weight} kilos`, `${builderCopy.weight} kilos`);

builderCopy.weight = 145;
console.log(`${builder.weight} kilos`, `${builderCopy.weight} kilos`);
 */
