"use strict"
function showNamber(){
    if(n > 10){
        return alert(n ** 2);
    }else if(n < 7){
        return alert("Число меньше 7");
    }else if(n === 8 || 9){
        return alert(--n);
    };
    
};
let n = +prompt("Напишите число");
showNamber();