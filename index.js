/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами.
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el)); // выведет каждый элемент массива
 */

const numbers1 = [1, 2, 3];

numbers1.forEach(function (el1) {
  console.log(el1);
});

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами.
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const newArray = map([1, 2, 3], (el) => el ** 2);
   console.log(newArray); // выведет [1, 4, 9]
 */
const numbers2 = [2, 3, 4]

const squares2 = numbers2.map(function (num2) {
  return num2 ** 2;
})

console.log(squares2);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами.
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   const sum = reduce([1, 2, 3], (all, current) => all + current);
   console.log(sum); // выведет 6
 */

const numbers3 = [1, 2, 3, 4, 5, 6, 7]

const sum3 = numbers3.reduce(function (all, current) {
  return all + current;
})

console.log(sum3)

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   const keys = upperProps({ name: 'Сергей', lastName: 'Петров' });
   console.log(keys) // выведет ['NAME', 'LASTNAME']
 */

const keys = upperProps({
    name: 'Сергей',
    lastname: 'Петров'
});

function upperProps (obj) {
  return Object.keys(obj).map(function (key) {
    key.toUpperCase();
  })
}

console.log(keys)

// export { forEach, map, reduce, upperProps };
