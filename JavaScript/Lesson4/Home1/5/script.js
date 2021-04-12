"use strict"
let number1=prompt("Введите первое число!");
let number2=prompt("Введите второе число!");
let number3=prompt("Введите третье число!");
if(number1>number2&&number1>number3){
    alert(number1)
}else if(number2>number1&&number2>number3){
    alert(number2)
}else if(number3>number2&&number3>number1){
    alert(number3)
}