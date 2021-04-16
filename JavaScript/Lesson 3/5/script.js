"use strict"
const a = 0, b = null, c = undefined, d = "Привет";
let hello = a || b || c || d;
alert(hello);
hello = a && b && c && d;
alert(hello);
alert(a > b > c > d);
alert(a >= b == c != d);