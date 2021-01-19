// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputRef = document.querySelector('#validation-input');
const dataRef = inputRef.getAttribute('data-length');

function checkInput(event) {
  const inputLength = event.target.value.split('').length;
  inputLength >= 6
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}

inputRef.addEventListener('blur', checkInput);
