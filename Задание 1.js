
let x = prompt('Введите значение');
let y = +x;

console.log(typeof y);

if (Number.isNaN(y)) {
  console.log('Упс')
} else if (y% 2 == 0) {
  console.log('Это четное число')
} else if (isNaN(y)) {
  console.log('Упс, кажется, вы ошиблись')
}  else {
  console.log('Это нечетное число')
}