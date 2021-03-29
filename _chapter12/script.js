// -------------------makingHTTP requests (XHR)

/* const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todoss");
request.send(); */

// -----------------Callback func & async
/* const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "todos.json");
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("callback fired");
  //console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
 */

// ------------------------JSON data

/* const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
}; */

/* getTodos("todos/luigi.json", (err, data) => {
  console.log(data);
  getTodos("todos/mario.json", (err, data) => {
    console.log(data);
    getTodos("todos/shaun.json", (err, data) => {
      console.log(data);
    });
  });
}); */

// ----------------------Promice basics (promice example)
/* const getSmth = () => {
  return new Promise((resolve, reject) => {
    // fetch smth
    //resolve("some data");
    reject("some error");
  });
};*/

// version 1
/* getSmth().then(
  (data) => console.log(data),
  (err) => console.log(err)
); */

// version 2
/* getSmth()
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); 
*/

// --------------- Promice

/* const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => console.log("promise resolved:", data))
  .catch((err) => console.log("promise rejected:", err)); 
*/

// -----------------------Chaining Promises

/* const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  }); 
*/

// ----------------------Fetch API

/* fetch("todos/mario.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// ---------------------Async Await

const getTodos = async () => {
  const response = await fetch("todos/mario.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data!");
  }
  const data = await response.json();
  return data;
};

/* const test = getTodos(); //--> async func always return promise (not data)!
console.log(test); */

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
