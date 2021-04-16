"use strict"
let hourse = new Date().getHours();
let name = prompt('Как тебя зовут?')
if(6 >= hourse >= 9){
    alert(`Доброе утро, ${name}`);
}else if(10 >= hourse >= 17){
    alert(`Добрый день, ${name}`);
}else if(18 >= hourse >= 23){
    alert(`Добрый вечер, ${name}`);
}else{
    alert(`Доброй ночи, ${name}`);
};