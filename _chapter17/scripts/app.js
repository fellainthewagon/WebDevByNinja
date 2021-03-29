// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

// add a new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mess = newChatForm.message.value.trim();
  chatroom
    .addChat(mess)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // upd name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  // reset the form
  newNameForm.reset();
  // show then hide the update message
  updMssg.innerHTML = `Your name was updated to ${newName}`;
  setTimeout(() => (updMssg.innerText = ""), 3000);
});

// update the chat room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

//check LS for a name
const username = localStorage.username ? localStorage.username : "anon";

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

// get chats and render
chatroom.getChats((data) => {
  //console.log(data);
  chatUI.render(data);
});
