'use strict';

/**
 * функция складывает два числа
 * 
 * @param  {number} a
 * @param  {number} b
 * @returns {number} сумма двух чисел
 */
function summation(a, b) {
	return a + b;
}

/**
 * функция вычитает два числа
 * 
 * @param  {number} a
 * @param  {number} b
 * @returns {number} разность двух чисел
 */
function subtraction(a, b) {
	return a - b;
}

/**
 * функция умножает два числа
 * 
 * @param  {number} a
 * @param  {number} b
 * @returns {number} произведение двух чисел
 */
function multiply(a, b) {
	return a * b;
}

/**
 * функция делить два числа
 * 
 * @param {number} a 
 * @param {number} b
 * @returns {number} деление двух чисел
 */
function divide(a, b) {
	return a / b;
}

/**
 * функция производит выбранную юзером операцию с числами
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation оператор
 * @returns {number} возвращаем результат в зависимости от оператора
 */
function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'сложение':
		case '+':
			return summation(arg1, arg2);
		case 'вычетание':
		case '-':
			return subtraction(arg1, arg2);
		case 'умножение':
		case '*':
			return multiply(arg1, arg2);
		case 'деление':
		case '/':
			return divide(arg1, arg2);
	}
}

let num1 = Number(prompt('Введите первое число: '));//получаем первый аргумент и приводим его к числу
let num2 = Number(prompt('Введите второе число: '));//получаем второй аргумент и приводим его к числу
let operator = prompt('Введите оператор символом (+, -, *, /) или словом (сложение, вычетание, умножение, деление) ').toLowerCase();//получаем строку оператора и если введено буквами то на всякий случай приводим к нижнему регистру
let result = mathOperation(num1, num2, operator);


alert(result);