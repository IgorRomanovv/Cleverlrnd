"use strict"
let sum = 0;
while (true) {
  let value = +prompt("Введите число");

  if (!value) break; // (Не будет введено или нажата отмена цикл сбросится)

  sum += value;

};
alert( 'Сумма: ' + sum );