"use strict"
let N=+prompt("Выберите единицу длинны?");
let l=+prompt("Назовите длинну отрезка");
switch(N){
    case(1):
        alert(`Длинна отрезка ${l/10} м`)
        break;
    case(2):
        alert(`Длинна отрезка ${l*1000} м`)
        break;
    case(3):
        alert(`Длинна отрезка ${l} м`)
        break;
    case(4):
        alert(`Длинна отрезка ${l/1000} м`)
        break;
    case(5):
        alert(`Длинна отрезка ${l/100} м`)
        break;
    default:
        alert(`Всего пять единиц измерения длинны, а вы выбрали ${l}`)
}