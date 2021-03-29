/* захват поле сабмита
добавляем ивентлистнер, убираем дефолт сабмита
прячем введенный вэлью в переменную
создаем функцию переноса вэлью в иннерэйчтимл (переменная)
в функции создаем хтмл переменную и прячем туда теги добавляя ${вэлью} 
захват листа дел и добавляем туда этот тег с внутренним тесктом вэлью
фиксим отправку пустого сообщения с помощью проверки ленгса
фиксим и делаем пустую строку после сабмита
схватили юл - для того чтобы новые тудушки тоже можно было удалять
удаляем из листа тудушку при нажатии на корзину -> 
-> хватаем за таргет контаин класс делит (см хтмл) - ремув()
хватаем инпут поиска добваляем листнер
прячем вэлью.трим в переменную ТЕРМ
создаем функцию из массива списка всех дел фильтруем те кторые НЕ содержат ТЕРМ
присваиваем отфильтрованному массиву класс фильтред и скрываем его в цсс*/

const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fas fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
  }
  addForm.add.value = "";
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// keyup event
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
