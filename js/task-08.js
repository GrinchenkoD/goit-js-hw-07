// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const renderRef = document.querySelector('[data-action=render]');
const destroyRef = document.querySelector('[data-action=destroy]');

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  for (let i = 0; i < amount; i++) {
    boxWidth += 10 * i;
    boxHeight += 10 * i;

    boxesRef.insertAdjacentHTML(
      'beforeend',
      `<div style="background-color:${randColor()}; width: ${boxWidth}px; height: ${boxHeight}px; border: 1px solid black"></div>`,
    );
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

renderRef.addEventListener('click', () => {
  inputRef.value == 0
    ? alert('Введите количество квадратов')
    : createBoxes(inputRef.value);
});
destroyRef.addEventListener('click', () => {
  destroyBoxes();
});
