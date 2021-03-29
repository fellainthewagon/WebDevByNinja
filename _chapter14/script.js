/* // ----------------store data in LS

localStorage.setItem("name", "mario");
localStorage.setItem("age", 30);

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name, age);

//------------------updating data
localStorage.setItem("name", "luigi");
localStorage.age = "31";

name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age); */

// -----------------delete storage data
//localStorage.removeItem("name"); //-remove item
//localStorage.clear(); // remove all items

// -------------------- parsing & stringifying!!!!!!!

/* const todos = [
  { text: "make fun of Luigi", author: "Mario" },
  { text: "rescue peach", author: "Mario" },
  { text: "go kart racing", author: "Mario" },
];

//console.log(JSON.stringify(todos));

localStorage.setItem("todos", JSON.stringify(todos));
const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored)); */
