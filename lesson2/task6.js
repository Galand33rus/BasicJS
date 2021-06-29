'use strict';

let num = prompt('Какую сумму вы хотите положить на счёт?');//запрашиваем сумму и получаем строку 
let numLength = num.length;//считаем длину строки
let lastSymbol = Number(num.charAt(numLength - 1));//получаем последний символ и приводим его к числу
let penultimateSymbol = Number(num.charAt(numLength - 2));//получаем предпоследний символ и приводим его к числу

/**
 * функция находит правильное окончание для слова 'рубль'
 * @param {number} atr число для сравнения
 * @returns {string} получаем окончание
 */
function ending(atr) {
	switch (atr) {
		case 1:
			return 'ь';
		case 2:
		case 3:
		case 4:
			return 'я';
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 0:
			return 'ей';
	}
}

if (penultimateSymbol === 1) {
	alert('Ваша сумма в ' + num + ' рублей успешно зачислена'); //если предпоследний символ равен 1 то верно будет 'рублей'
} else {
	alert('Ваша сумма в ' + num + ' рубл' + ending(lastSymbol) + ' успешно зачислена');//иначе находим правильное окончание
}