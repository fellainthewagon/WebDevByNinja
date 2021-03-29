/* const form = document.querySelector(".signup-form");
//const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(username.value);
  console.log(form.username.value);
}); */

// testing Regex

/* const username = "guccci";
const pattern = /^[a-z]{6,}$/; */

/* let result = pattern.test(username);
if (result) {
  console.log("regex :)");
} else {
  console.log("regex :(");
} */

/* let result = username.search(pattern);
console.log(result); */

// ____________________________________

/* const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value);

  // validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid!";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only & be 6-12 characters long";
  }
});

// realtime validation

form.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    console.log("passed");
    form.username.setAttribute("class", "success");
  } else {
    console.log("failed");
    form.username.setAttribute("class", "error");
  }
}); */
