const list = document.querySelector("ul");
const form = document.querySelector("form");
const btnUnsubscr = document.querySelector("button");

// add recipes to UI

const addRecipe = (recipe, id) => {
  //console.log(recipe.created_at.toDate());
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
  //console.log(html);
  list.innerHTML += html;
};

// del recipes from UI

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// checking real-time database changes & add/del to UI

const unsub = db.collection("recipes").onSnapshot((snapshot) => {
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

//grabing the formvalue & adding recipes to firebase

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  form.reset();

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((err) => console.log(err));
});

// deleting data from firebase

list.addEventListener("click", (e) => {
  //console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    //console.log(id);
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted");
      });
  }
});

// unsubscr from database changes

btnUnsubscr.addEventListener("click", (e) => {
  unsub();
});
