"use strict"
function showMassage(){
    let massage=(age>=16)? "Добро пожаловать" : "Вы еще молоды";
    alert(massage)
}
let age=+prompt("Сколько вам лет?");
showMassage(age);
