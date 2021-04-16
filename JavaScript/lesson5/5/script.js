"use strict"
const x = +prompt("Введите число");
for(let i = 1; i <= x; i++){
    if(x % i === 0){
        alert(i);
    };
};