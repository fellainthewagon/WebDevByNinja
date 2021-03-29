//
// querySelector
//

/* const para = document.querySelector("body > h1");
console.log(para); */

/* const paras = document.querySelectorAll("p");
console.log(paras[2]);
paras.forEach((para) => {
  console.log(para);
});

const errors = document.querySelectorAll(".error");
console.log(errors); */

/* const title = document.getElementById("page-title");
console.log(title);

const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[2]); */

//
// adding changing page content
//

/* const para = document.querySelector("p");
console.log(para.innerText);
para.innerText = "Fella in the wagon"; */

/* const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " - new chapter";
}); */

/* const content = document.querySelector(".content");
//console.log(content.innerHTML);
//content.innerHTML += "<h2>This is a new h2!</h2>";

const people = ["mario", "luigi", "yoshi"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
}); */

//
// gettin & setting attribute
//

/* const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "thenetninja.co.uk");
link.innerHTML = "The Net Ninja Website";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "sucsess");
mssg.setAttribute("style", "color: green"); */

//
// changing CSS
//

/* const title = document.querySelector("h1");

//title.setAttribute("style", "margin: 50px;"); ----overwritting

console.log(title.style);
console.log(title.style.color);
title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px"; */

//
// addin & remove Classes
//

/* const content = document.querySelector("p");
console.log(content.classList);
content.classList.add("error");
content.classList.remove("error");
content.classList.add("success"); */

/* const paras = document.querySelectorAll("p");

paras.forEach((p) => {
  console.log(p.textContent);
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.textContent.includes("succes")) {
    p.classList.add("success");
  }
}); */

/* const title = document.querySelector(".title");
title.classList.toggle("test");
title.classList.toggle("test"); */

//
// parents children & siblings
//

/* const article = document.querySelector("article");
console.log(article.children);

console.log(Array.from(article.children));
Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

const title = document.querySelector("h2");
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children); */

//
// events
//
/* 
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("clicked");
}); */

/* const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    //    console.log(e.target);
    //   console.log(item);
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "red";
  });
}); */

//
// creating & removing el
//

/* const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "red";
    e.stopPropagation();
    e.target.remove();
  });
}); */

/* const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  //ul.innerHTML += "<li>something new</li>";
  const li = document.createElement("li");
  li.textContent = "somth very important";
  //ul.append(li);
  ul.prepend(li);
});

ul.addEventListener("click", (e) => {
  //console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
}); */

//
// other events
//

/* const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  console.log("Copyyyyy!");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  //console.log(e);
  //console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
}); */
