// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

function addIngredients(ingredient) {
  let ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientsRef.appendChild(ingredientRef);
}

ingredients.forEach(addIngredients);
