"use strict"
const onetrip = 1, tentrip = 10, sixtytrip = 60;
const oneprice = 15, tenprice = 125, sixtyprice = 440;
let onetripcoll, tentripcoll, sixtytripcoll;
let n = +prompt("Сколько поездок вы хотите совершить? Наша программа расчитает относительно наших проездых, более выгодный вариант покупки.");
sixtytripcoll = Math.trunc(n/sixtytrip);
let x = n % sixtytrip;
if(x > tentrip){
    tentripcoll = Math.trunc(x / tentrip);
    onetripcoll = x % tentrip;
}else if(x === 10){
    tentripcoll = 1;
}else if(x < 10){
    tentripcoll = 0;
    onetripcoll = x;
};
alert(`Вам нужно будет купить ${sixtytripcoll} проездых по 60 билетов, ${tentripcoll} по 10 билетов и ${onetripcoll} по одному билету!`);
let x1 = onetripcoll * oneprice, x2 = tentripcoll * tenprice, x3 = sixtyprice * sixtytripcoll;
let pricetrip = x1 + x2 + x3;
let minprace = pricetrip/n;
alert(`Минимальная цена за билет составит ${minprace}! Удачи в дороге, будем рады и дальше вам помогать!)`);