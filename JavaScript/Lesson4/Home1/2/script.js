"use strict"
let number=prompt("Укажите любое число?")
if(number>0){
    alert(`Число ${number} положительное`);
}else if(number<0){
    alert(`Число ${number} отрицательное`);
}else if(number==0){
    alert('Число равно нулю');
}else{
    alert('Вы ввели не число');
    alert('Возможно вам надо обратиться к врачу!')
}

