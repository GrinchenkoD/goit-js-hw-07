// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector('#value');
const decButRef = document.querySelector('[data-action="decrement"]');
const incButRef = document.querySelector('[data-action="increment"]');

const increaceCounter = () => ++valueRef.textContent;
const decreaceCounter = () => --valueRef.textContent;

decButRef.addEventListener('click', decreaceCounter);
incButRef.addEventListener('click', increaceCounter);
