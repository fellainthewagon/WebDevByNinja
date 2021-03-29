/* class User {
  constructor(username, age, mail) {
    this.username = username;
    this.age = age;
    this.mail = mail;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just log in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

// subclasses & super for consructor
class Admin extends User {
  constructor(username, age, mail, title) {
    super(username, age, mail);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = new User("mario", 30, "mario@mail.ru");
const userTwo = new User("maxim", 25, "maxim@mail.ru");
const userThr = new Admin("masha", 35, "masha@mail.ru", "ninja");

//console.log(userOne, userTwo, userThr);

//userOne.login().incScore().incScore().logout();

let users = [userOne, userTwo, userThr];
console.log(users);

userThr.deleteUser(userTwo);
console.log(users); */

//---------------------constructor (no class)

/* function User(username, mail) {
  this.username = username;
  this.mail = mail;
  this.login = function () {
    console.log(`${this.username} has logged in`);
  };
}

const userOne = new User("mario", 30, "mario@mail.ru");
const userTwo = new User("maxim", 25, "maxim@mail.ru");

console.log(userOne, userTwo);
userOne.login(); */

//---------------------prototype Model

/* function User(username, mail) {
  this.username = username;
  this.mail = mail;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

//--------------proto inheritance model

function Admin(username, mail, title) {
  User.call(this, username, mail);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype); //--> inherit proto
Admin.prototype.deleteUser = function () {
  // delete code
};

const userOne = new User("mario", "mario@mail.ru");
const userTwo = new User("maxim", "maxim@mail.ru");
const userThr = new Admin("masha", "masha@mail.ru", "ninja");

console.log(userOne, userTwo, userThr);
userTwo.login().logout(); */
