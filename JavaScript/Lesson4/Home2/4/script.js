"use strict"
let x=+prompt("Выберете число в диапазоне от 1 до 5");
switch(x){
    case(1):
        alert("Плохо");
        break;
    case(2):
        alert("Неудовлетворительно");
        break;
    case(3):
        alert("Удовлетворительно");
        break;
    case(4):
        alert("Хорошо");
        break;
    case(5):
        alert("Отлично");
        break;
    default:
        alert("Неверное значение")
}