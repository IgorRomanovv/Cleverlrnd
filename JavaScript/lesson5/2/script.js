"use strict"
const n = +prompt('Введите целое положительное число');
for (let i = 0; i <= n * 2; i += 2) {
    if (i % 5 != 0) {
        alert ( i )
    };
};