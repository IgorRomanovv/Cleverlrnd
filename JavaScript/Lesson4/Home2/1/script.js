"use strict"
let a = +prompt("Напишите число месяца чтобы узнать пору года");
switch(a){
    case 12:
    case 1:
    case 2:
        alert("Вы выбрали зиму");
        break;
    case 3:
    case 4:
    case 5:
        alert("Вы выбрали весну");
        break;
    case 6:
    case 7:
    case 8:
        alert("Вы выбрали лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Вы выбрали осень");
    default:
        alert("Ты ошибся в году 12 месяцев");
};