//1. Привет, мир!
// alert('Hello World2!') 

//2. Структура кода
// alert('Hello'); alert('friend')
// same
// alert('Hello') 
// alert('friend')
// alert(3+
// 1
// +2)
// [1,2].forEach(alert)
// alert("Error");
// [1, 2].forEach(alert)

//3. Строгий режим — "use strict"
//В начале скрипта писать "use strict", чтобы работали современные фичи языка
//Если используешь классы и модули -- строгий режим сам включается

//4. Переменные
// let message;
// message = 'Hello!';
// message = 'World!'; //change data
// alert(message);

// let hello = 'Hello World!';
// message = hello; // copy data
// alert(message);
// alert(hello);

// let 1a; //can't
// let $; //can
// let _; //can

// let apple;
// let Apple; //different variable

//tasks

//1
// let name = 'Джон';
// let admin;
// admin = name;
// alert(admin);

//2
// let planetEarth;
// let currentUser;

//3
//можно использовать заглавные буквы для константы const BIRTHDAY = '18.04.1982'; 
//(так как они известна до выполения кода). А для const AGE = someCode(BIRTHDAY); нет, так как код вычисляется

//5. Типы данных
// 8 basic data types
//«динамически типизированными». Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.
// Не будет ошибкой
// let message = "hello";
// message = 123456;

// 1 -- Number
let n = 123;
n = 12.345;
// Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
// NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции
alert( "не число" / 2 ); // NaN, такое деление является ошибкой
// Если где-то в математическом выражении есть NaN, то результатом вычислений с его участием будет NaN.
alert( "не число" / 2 + 5 ); // NaN

//тип «number» не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), 
//или меньше, чем -(253-1) для отрицательных чисел.









