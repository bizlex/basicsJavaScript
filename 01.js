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

// let n = 123;
// n = 12.345;
// Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
// alert( 1 / 0 ); // Infinity
// alert( Infinity ); // Infinity
// NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции
// alert( "не число" / 2 ); // NaN, такое деление является ошибкой
// Если где-то в математическом выражении есть NaN, то результатом вычислений с его участием будет NaN.
// alert( "не число" / 2 + 5 ); // NaN

// 2 -- bigInt
//тип «number» не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), 
//или меньше, чем -(253-1) для отрицательных чисел.

// символ "n" в конце означает, что это BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// 3 -- String

// Двойные кавычки: "Привет".
// Одинарные кавычки: 'Привет'.
// Обратные кавычки: `Привет`.

// 4 -- Boolean
// может принимать только два значения: true (истина) и false (ложь)

// 5 -- null
//Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
// let age = null; // значение переменной age неизвестно.

// 6 -- undefined
// означает, что «значение не было присвоено».
// let age;
// alert(age); // выведет "undefined"

// 7 -- object
// В объектах же хранят коллекции данных или более сложные структуры.

// 8 -- symbol
// используется для создания уникальных идентификаторов в объектах

// tasks

// 1
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya  


//6. Взаимодействие: alert, prompt, confirm

// alert("Hello");
//показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».

//result = prompt(title, [default]);
// код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.
// title Текст для отображения в окне.
// default лучше указывать хотя бы так ('') для EI
// Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.

// let title = 'Hi!'
// result = prompt(title, 'User');

//confirm
//result = confirm(question);
// Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
// Результат – true, если нажата кнопка OK. В других случаях – false.
// let result = confirm('How old are you?');

//Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать
// с остальной частью страницы до тех пор, пока окно не будет закрыто.

//tasks

//1
// let question = prompt('What is your name?', '');
// alert(`Answer: ${question}`);

//7. Преобразование типов

//Строковое преобразование
// Например, alert(value) преобразует значение к строке.
// Также мы можем использовать функцию String(value), чтобы преобразовать значение к строке

// let value = true;
// alert(typeof value); // boolean
// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string

// Численное преобразование
// alert( "6" / "2" ); // 3, строки преобразуются в числа

// Мы можем использовать функцию Number(value), чтобы явно преобразовать value к числу
// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // становится числом 123
// alert(typeof num); // number

// Правила численного преобразования:
// undefined	    NaN
// null	            0
// true / false	    1 / 0
// string	        Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, 
//                  иначе из непустой строки «считывается» число. При ошибке результат NaN.

// Логическое преобразование
// Правило преобразования:
// 0, null, undefined, NaN, ""	    false
// любое другое значение	        true

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("Привет!") ); // true
// alert( Boolean("") ); // false

// alert( Boolean("0") ); // true
// alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)

//8. Базовые операторы, математика
// Операнд – то, к чему применяется оператор. 
// Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2
// Унарным называется оператор, который применяется к одному операнду.
// x = -x
// Бинарным называется оператор, который применяется к двум операндам
// x = b - a

// Результат a % b – это остаток от целочисленного деления a на b.
// В выражении a ** b оператор возведения в степень умножает a на само себя b раз.
// квадратный корень является возведением в степень 1/2:
// alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)

// Сложение и преобразование строк — это особенность бинарного плюса +. 
// Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.

// alert( 6 - '2' ); // 4, '2' приводится к числу
// alert( '6' / '2' ); // 3, оба операнда приводятся к числам

// Не влияет на числа
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// Преобразует не числа в числа
// laert( +true ); // 1
// alert( +"" );   // 0
// На самом деле это то же самое, что и Number(...), только короче.

// let apples = "2";
// let oranges = "3";

// оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

// оператор присваивания может возвращать значение
// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1); // c = 0

// Инкремент/декремент можно применить только к переменной. 
// Попытка использовать его на значении, типа 5++, приведёт к ошибке.

// let counter = 1;
// let a = counter++;

// alert(a); // 1
// alert(counter); // 2

// let counter = 1;
// let a = ++counter;

// alert(a); // 2
// alert(counter); // 2

// Оператор «запятая» предоставляет нам возможность вычислять несколько выражений, разделяя их запятой ,.
// let a = (1 + 2, 3 + 4);
// alert( a ); // 7 (результат вычисления 3 + 4)
// Первое выражение 1 + 2 выполняется, а результат отбрасывается. 
// Затем идёт 3 + 4, выражение выполняется и возвращается результат.
// оператор , имеет очень низкий приоритет, ниже =, поэтому скобки важны в приведённом выше примере.

//tasks

//1
// let a = 1, b = 1;
// let c = ++a; // a = 2, c = 2
// let d = b++; // b = 2, d = 1

//2
// let a = 2;
// let x = 1 + (a *= 2); // a = 4, x = 5 

//3 
// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 45px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // Infinity (у меня было NaN)
// "  -9  " + 5 //   -9  5
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2  \n - перенос строки \t - табуляция

//4
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12


// 9. Операторы сравнения

// cтроки сравниваются посимвольно
// При сравнении значений разных типов JavaScript приводит каждое из них к числу.
// alert( '2' > 1 ); // true, строка '2' становится числом 2
// alert( '01' == 1 ); // true, строка '01' становится числом 1

// Строгое сравнение
// Использование обычного сравнения == может вызывать проблемы. Например, оно не отличает 0 от false:
// alert( 0 == false ); // true
// Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу. 
// В итоге, и пустая строка, и false становятся нулём.

// !Оператор строгого равенства === проверяет равенство без приведения типов.

// Другими словами, если a и b имеют разные типы, то проверка a === b немедленно возвращает false без попытки их преобразования.
// alert( 0 === false ); // false, так как сравниваются разные типы

// Сравнение с null и undefined
// ?При строгом равенстве ===
// Эти значения различны, так как различны их типы.
// alert( null === undefined ); // false

// ?При нестрогом равенстве ==
// !Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
// alert( null == undefined ); // true

// При использовании математических операторов и других операторов сравнения < > <= >=
// Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.

// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. 
// Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: 
// эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. 
// Поэтому (2) null == 0 ложно.

// !Значение undefined несравнимо с другими значениями:
// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)
// Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN, 
// а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.
// Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.

//!Относитесь очень осторожно к любому сравнению с undefined/null, кроме случаев строгого равенства ===.

// !Не используйте сравнения >= > < <= с переменными, которые могут принимать значения null/undefined, 
// разве что вы полностью уверены в том, что делаете. 

// !Если переменная может принимать эти значения, то добавьте для них отдельные проверки.

//tasks

//1
// 5 > 4  // true
// "ананас" > "яблоко" // false
// "2" > "12" // true because посимвольное сравнение (was false)
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false


// 10. Условное ветвление: if, '?'

// Для выполнения различных действий мы можем использовать инструкцию if и условный оператор ?, 
// который также называют оператором «вопросительный знак».

// Инструкция if (…) вычисляет выражение в скобках и преобразует результат к логическому типу.
// Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными» («falsy») значениями.
// Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»).

// Инструкция if может содержать необязательный блок «else» («иначе»). Он выполняется, когда условие ложно.

// Условный оператор „?“. 
// Его также называют «тернарный», так как этот оператор, единственный в своём роде, имеет три аргумента.
// let result = условие ? значение1 : значение2;
// Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.

// Иногда оператор «вопросительный знак» ? используется в качестве замены if:
// let company = prompt('Какая компания создала JavaScript?', '');
// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');
// Не рекомендуется использовать оператор вопросительного знака таким образом.
// Несмотря на то, что такая запись короче, чем эквивалентная инструкция if, она менее читабельна.

//tasks

//1
// if ("0") { 
//     alert( 'Привет' );
// }
// выводит сообщение, так как в условии не пустая строка, а значит true

//2
// let question = prompt('Какое «официальное» название JavaScript?', '');
// if (question == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }

//3
// let question = prompt('Inter a number', '');
// if (question > 0) {
//     alert('1');
// } else if (question < 0) {
//     alert('-1');
// } else if (question === 0) {
//     alert('0');
// } else {
//     alert('You need to inter a NUMBER');
// }

//4
// let result = (a + b < 4) ? 'Мало' : 'Много';

//5
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' : 
//     (login == '') ? message = 'Нет логина' : 
//     '';


// 11. Логические операторы
// В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).

// || (ИЛИ)
// Существует всего четыре возможные логические комбинации:
// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false
// Если значение не логического типа, то оно к нему приводится в целях вычислений.

// ИЛИ «||» находит первое истинное значение
// result = value1 || value2 || value3;

// Оператор || выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
// Если все операнды являются ложными (false), возвращает последний из них.
// Значение возвращается в исходном виде, без преобразования.

// Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.

// 1. Получение первого истинного значения из списка переменных или выражений.
// let currentUser = null;
// let defaultUser = "John";
// let name = currentUser || defaultUser || "unnamed";
// alert( name ); // выбирается "John" – первое истинное значение
// Если бы и currentUser, и defaultUser были ложными, в качестве результата мы бы наблюдали "unnamed".

// 2. Сокращённое вычисление.
// Операндами могут быть как отдельные значения, так и произвольные выражения. ИЛИ вычисляет их слева направо. 
// Вычисление останавливается при достижении первого истинного значения. 
// Этот процесс называется «сокращённым вычислением», поскольку второй операнд вычисляется только в том случае, 
// если первого недостаточно для вычисления всего выражения.
// let x;
// true || (x = 1);
// alert(x); // undefined, потому что (x = 1) не вычисляется
// Если бы первый аргумент имел значение false, то || приступил бы к вычислению второго и выполнил операцию присваивания:
// let x;
// false || (x = 1);
// alert(x); // 1
// Как мы видим, этот вариант использования || является "аналогом if". 
// Первый операнд преобразуется в логический. Если он оказывается ложным, начинается вычисление второго.

// && (И)
// В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// И «&&» находит первое ложное значение
// Оператор && выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение. 
// Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.

// Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.
// Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.
// Если первый операнд истинный,
// И возвращает второй:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// Можно передать несколько значений подряд. В таком случае возвратится первое «ложное» значение, на котором остановились вычисления.
// alert( 1 && 2 && null && 3 ); // null
// Когда все значения верны, возвращается последнее
// alert( 1 && 2 && 3 ); // 3
// Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.

// !(НЕ)
// Оператор принимает один аргумент и выполняет следующие действия:

// Сначала приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.

// alert( !true ); // false
// alert( !0 ); // true

// !В частности, двойное НЕ используют для преобразования значений к логическому типу:

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false
// То есть первое НЕ преобразует значение в логическое значение и возвращает обратное, 
// а второе НЕ снова инвертирует его. В конце мы имеем простое преобразование значения в логическое.

// Есть немного более подробный способ сделать то же самое – встроенная функция Boolean:
// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false

//!Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.

//tasks

//1
// alert( null || 2 || undefined ); // 2

//2
// alert( alert(1) || 2 || alert(3) ); // 1 and 2
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

// Первый оператор ИЛИ || выполнит первый alert(1).
// Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
// Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, 
// которое будет выведено внешним alert( .... ).
// Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.

//3
// alert( 1 && null && 2 ); // null

//4
// alert( alert(1) && alert(2) ); // 1, а затем undefined.
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
// Поэтому до правого alertдело не дойдёт, вычисления закончатся на левом.

//5
// alert( null || 2 && 3 || 4 ); // 3
// Приоритет оператора && выше, чем ||, поэтому он выполнится первым.
// Результат 2 && 3 = 3, поэтому выражение приобретает вид:
// null || 3 || 4
// Теперь результатом является первое истинное значение: 3.

//6
// let age = prompt('How old are you?', '');
// if (age >= 14 && age <= 90) {
//     alert('В диапазоне!');
// } else {
//     alert('Не в диапазоне!');
// }

//7
// if (!(age >= 14 && age <= 90))
// if (age < 14 && age > 90)

//8
// if (-1 || 0) alert( 'first' ); // -1 first
// if (-1 && 0) alert( 'second' ); // 0 e.i. false
// if (null || -1 && 1) alert( 'third' ); // 1 third

//9
// let user = prompt('Who are you?', '');
// if (user == 'Admin') {
//     let login = prompt('Inter password: ', '');
//     if (login == 'I am boss') {
//         alert('Hello!');
//     } else if (login === null || login == '') {
//         alert('Canceled');
//     } else {
//         alert('Incorrect password');
//     }
// } else if (user === null || user == '') {
//     alert('Canceled');
// } else {
//     alert(`I don't know you!`);
// }


// 12. Оператор объединения с null '??'

// Оператор объединения с null представляет собой два вопросительных знака ??.

// Результат выражения a ?? b будет следующим:

// a, если значение a определено,
// b, если значение a не определено.
// То есть оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.
// Вот как можно переписать выражение result = a ?? b, используя уже знакомые нам операторы:
// result = (a !== null && a !== undefined) ? a : b;

// Как правило, оператор ?? нужен для того, чтобы задать значение по умолчанию для потенциально неопределённой переменной.
// Кроме этого, можно записать последовательность из операторов ??, 
// чтобы получить первое значение из списка, которое не является null/undefined.

// Оператор ИЛИ || можно использовать для того же, что и ??

// Важное различие между ними заключается в том, что:

// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.

// Проще говоря, оператор || не различает false, 0, пустую строку "" и null/undefined. Для него они все одинаковые, 
// т.е. являются ложными значениями. Если первым аргументом для оператора || будет любое из перечисленных значений, 
// то в качестве результата мы получим второй аргумент.
// Однако на практике часто требуется использовать значение по умолчанию только тогда, 
// когда переменная является null/undefined. Ведь именно тогда значение действительно неизвестно/не определено.

// let height = 0;
// alert(height || 100); // 100
// alert(height ?? 100); // 0

// height || 100 проверяет, имеет ли переменная height ложное значение, что так и есть,
// поэтому результатом является второй аргумент, т.е. 100.
// height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку это не так,
// то результатом является сама переменная height, т.е. 0.

// По соображениям безопасности JavaScript запрещает использование оператора ?? вместе с && и ||, 
// если только приоритет явно не указан в круглых скобках.

// 13. Циклы while и for

// Цикл «while»
// while (condition) {
    // код
    // также называемый "телом цикла"
// }
// Код из тела цикла выполняется, пока условие condition истинно.

// Цикл «do…while»
// Проверку условия можно разместить под телом цикла, используя специальный синтаксис do..while:
// do {
    // тело цикла
//   } while (condition);
// Цикл сначала выполнит тело, а затем проверит условие condition, и пока его значение равно true, 
// он будет выполняться снова и снова.

// Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, 
// даже если условие окажется ложным. На практике чаще используется форма с предусловием: while(…) {…}.

// Цикл «for»
// for (начало; условие; шаг) {
    // ... тело цикла ...
// }
// начало	i = 0	Выполняется один раз при входе в цикл
// условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.
// тело	alert(i)	Выполняется снова и снова, пока условие вычисляется в true.

// Выполнить *начало*
// → (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
// → (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
// → (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
// → ...

// Прерывание цикла: «break»

// Обычно цикл завершается при вычислении условия в false.
// Но мы можем выйти из цикла в любой момент с помощью специальной директивы break.
// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сумма: ' + sum );

// Вообще, сочетание «бесконечный цикл + break» – отличная штука для тех ситуаций, когда условие, 
// по которому нужно прерваться, находится не в начале или конце цикла, а посередине.

// Переход к следующей итерации: continue

// Директива continue – «облегчённая версия» break. При её выполнении цикл не прерывается, 
// а переходит к следующей итерации (если условие все ещё равно true).
// Её используют, если понятно, что на текущем повторе цикла делать больше нечего.

// for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    // if (i % 2 == 0) continue;
//     alert(i); // 1, затем 3, 5, 7, 9
// }

//! Нельзя использовать break/continue справа от оператора „?“

// Метки для break/continue
// Бывает, нужно выйти одновременно из нескольких уровней цикла сразу.
// Метка имеет вид идентификатора с двоеточием перед циклом:
// labelName: for (...) {
//     ...
// }

// Вызов break <labelName> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец.
// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)
//       // сделать что-нибудь со значениями...
//     }
// }
// alert('Готово!');

// В примере выше это означает, что вызовом break outer будет разорван внешний цикл до метки с именем outer, 
// и управление перейдёт со строки, помеченной (*), к alert('Готово!').

// Вызов break/continue возможен только внутри цикла, и метка должна находиться где-то выше этой директивы.

//tasks

//1
// 0, because 0 is false

//2
//a 
// let i = 0;
// while (++i < 5) alert( i ); // 1 2 3 4
// Первое значение: i = 1, так как операция ++i сначала увеличит i, а потом уже произойдёт сравнение и выполнение alert.
// Далее 2, 3, 4… Значения выводятся одно за другим. 
// Для каждого значения сначала происходит увеличение, а потом – сравнение, так как ++ стоит перед переменной.
// При i = 4 произойдёт увеличение i до 5, а потом сравнение while (5 < 5) – это неверно. 
// Поэтому на этом цикл остановится, и значение 5 выведено не будет.

//b
// let i = 0;
// while ( i++ < 5) console.log(i); // 1 2 3 4 5

//3
//a 0 1 2 3 4 
//b 0 1 2 3 4 
// Увеличение i++ выполняется отдельно от проверки условия (2), 
// значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

//4
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

//5
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     ++i;
// };

//6
// for (;;) {
//     let value = +prompt('Inter a number geater than 100: ', '');
//     if (value <= 100 || value === null) {
//         break;
//     }
//     console.log(value);
// }
// variant 2
// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

//7
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//     }

//     console.log( i ); // простое число
// }


// 14. Конструкция "switch"

// Конструкция switch заменяет собой сразу несколько if.
// Конструкция switch имеет один или более блок case и необязательный блок default.

// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
  
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
// }

// Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
// Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, 
// до ближайшего break (или до конца switch).
// Если ни один case не совпал – выполняется (если есть) вариант default.

//tasks

//1
// if (browser == 'Edge') {
//     alert( "You've got the Edge!" );
// } else if (browser == 'Chrome' 
//         || browser == 'Firefox' 
//         || browser == 'Safari' 
//         || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

//2
// const number = +prompt('Введите число между 0 и 3', '');

// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }


// 15. Функции

// Для создания функций мы можем использовать объявление функции.
// function showMessage() {
//     alert( 'Всем привет!' );
// }
// Вначале идёт ключевое слово function, после него имя функции, затем список параметров в круглых скобках через запятую
// (в вышеприведённом примере он пустой) и, наконец, код функции, также называемый «телом функции», внутри фигурных скобок.

// Переменные, объявленные внутри функции, видны только внутри этой функции.
// Функция обладает полным доступом к внешним переменным и может изменять их значение.
// Внешняя переменная используется, только если внутри функции нет такой локальной.
// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.

// Переменные, объявленные снаружи всех функций называются глобальными.
// Глобальные переменные видимы для любой функции (если только их не перекрывают одноимённые локальные переменные).

// Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументами функции).
// Если параметр не указан, то его значением становится undefined.
// Например, вышеупомянутая функция showMessage(from, text) может быть вызвана с одним аргументом:
// showMessage("Аня");
// Это не приведёт к ошибке. Такой вызов выведет "Аня: undefined". 
// В вызове не указан параметр text, поэтому предполагается, что text === undefined.

// Если мы хотим задать параметру text значение по умолчанию, мы должны указать его после =:
// !function showMessage(from, text = "текст не добавлен") {
//     alert( from + ": " + text );
// }
// showMessage("Аня"); // Аня: текст не добавлен
// Теперь, если параметр text не указан, его значением будет "текст не добавлен"

// Возврат значения
// Функция может вернуть результат, который будет передан в вызвавший её код.
// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert( result ); // 3
// Директива return может находиться в любом месте тела функции. Как только выполнение доходит до этого места, 
// функция останавливается, и значение возвращается в вызвавший её код (присваивается переменной result выше).
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
// }
  
// let age = prompt('Сколько вам лет?', 18);
  
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }

// Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.

// function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Вам показывается кино" ); // (*)
    // ...
// }
// В коде выше, если checkAge(age) вернёт false, showMovie не выполнит alert.

// ?Результат функции с пустым return или без него – undefined
// Если функция не возвращает значения, это всё равно, как если бы она возвращала undefined:
// function doNothing() { /* пусто */ }
// alert( doNothing() === undefined ); // true

// Пустой return аналогичен return undefined:
// function doNothing() {
//     return;
// }
// alert( doNothing() === undefined ); // true

// !Никогда не добавляйте перевод строки между return и его значением
// Для длинного выражения в return может быть заманчиво разместить его на нескольких отдельных строках, например так:

// return
//  (some + long + expression + or + whatever * f(a) + f(b))
// Код не выполнится, потому что интерпретатор JavaScript подставит точку с запятой после return. Для него это будет выглядеть так:

// return;
//  (some + long + expression + or + whatever * f(a) + f(b))
// Таким образом, это фактически стало пустым return.

// Если мы хотим, чтобы возвращаемое выражение занимало несколько строк, нужно начать его на той же строке, что и return. Или, хотя бы, поставить там открывающую скобку, вот так:

// return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
// )

 //tasks

 //1
//  оба варианта одинаковы

//2
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18 || confirm('Родители разрешили?'));
// }

//3
// function getMin(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

//4
// let x = +prompt('x? :', '');
// let n = +prompt('n? :', '');
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }


// 16. Function Expression

// Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):

// function sayHi() {
//   alert( "Привет" );
// }
// Существует ещё один синтаксис создания функций, который называется Function Expression (Функциональное Выражение).

// Оно выглядит вот так:

// let sayHi = function() {
//   alert( "Привет" );
// };

// Мы можем скопировать функцию в другую переменную:
// function sayHi() {   // (1) создаём
//     alert( "Привет" );
//   }
  
//   let func = sayHi;    // (2) копируем
  
//   func(); // Привет    // (3) вызываем копию (работает)!
//   sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

// 1. Объявление Function Declaration (1) создало функцию и присвоило её значение переменной с именем sayHi.
// 2. В строке (2) мы скопировали её значение в переменную func. Обратите внимание (ещё раз): 
// нет круглых скобок после sayHi. Если бы они были, то выражение func = sayHi() 
// записало бы результат вызова sayHi() в переменную func, а не саму функцию sayHi.
// 3. Теперь функция может быть вызвана с помощью обеих переменных sayHi() и func().

// ?У вас мог возникнуть вопрос: Почему в Function Expression ставится точка с запятой ; на конце, а в Function Declaration нет:

// function sayHi() {
  // ...
// }

// let sayHi = function() {
  // ...
// };

// Нет необходимости в ; в конце блоков кода и синтаксических конструкций, которые их используют, 
// таких как if { ... }, for { }, function f { } и т.д.
// Function Expression использует внутри себя инструкции присваивания let sayHi = ...; как значение. 
// Это не блок кода, а выражение с присваиванием. Таким образом, точка с запятой не относится непосредственно 
// к Function Expression, она лишь завершает инструкцию.

// Функции-«колбэки»

// Давайте напишем функцию ask(question, yes, no) с тремя параметрами:

// question
// Текст вопроса
// yes
// Функция, которая будет вызываться, если ответ будет «Yes»
// no
// Функция, которая будет вызываться, если ответ будет «No»
// Наша функция должна задать вопрос question и, в зависимости от того, как ответит пользователь, вызвать yes() или no():
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);

// !Аргументы функции ask ещё называют функциями-колбэками или просто колбэками.

// Мы можем переписать этот пример значительно короче, используя Function Expression:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
// Здесь функции объявляются прямо внутри вызова ask(...). У них нет имён, поэтому они называются анонимными. 
// Такие функции недоступны снаружи ask (потому что они не присвоены переменным), но это как раз то, что нам нужно.
// Подобный код, появившийся в нашем скрипте выглядит очень естественно, в духе JavaScript.

// !Давайте разберём ключевые отличия Function Declaration от Function Expression.

// Во-первых, синтаксис: как определить, что есть что в коде.

// Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.

// Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =:

// Function Expression
// let sum = function(a, b) {
//   return a + b;
// };

// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// После того, как поток выполнения достигнет правой части выражения присваивания let sum = function… – с этого момента, 
// функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д. ).
// С Function Declaration всё иначе.
// Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).

// Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём 
// Function Declaration и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».
// И только после того, как все объявления Function Declaration будут обработаны, продолжится выполнение.
// В результате, функции, созданные, как Function Declaration могут быть вызваны раньше своих определений.

// ?В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

// Что можно сделать, чтобы welcome была видима снаружи if?

// Верным подходом будет воспользоваться функцией, объявленной при помощи Function Expression, 
// и присвоить значение welcome переменной, объявленной снаружи if, что обеспечит нам нужную видимость.

// Как правило, если нам понадобилась функция, в первую очередь нужно рассматривать синтаксис Function Declaration, 
// который мы использовали до этого. Он даёт нам больше свободы в том, как мы можем организовывать код. Функции, объявленные таким образом, можно вызывать до их объявления.

// Также функции вида function f(…) {…} чуть более заметны в коде, чем let f = function(…) {…}. 
// Function Declaration легче «ловятся глазами».

// …Но если Function Declaration нам не подходит по какой-то причине (мы рассмотрели это в примере выше), 
// то можно использовать объявление при помощи Function Expression.


// 17. Функции-стрелки, основы

// let func = (arg1, arg2, ...argN) => expression

// Такой код создаёт функцию func с аргументами arg1..argN и 
// вычисляет expression с правой стороны с их использованием, возвращая результат.

// Другими словами, это более короткий вариант такой записи:
// let func = function(arg1, arg2, ...argN) {
//   return expression;
// };

// let sum = (a, b) => a + b;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

// alert( sum(1, 2) ); // 3
// То есть, (a, b) => a + b задаёт функцию с двумя аргументами a и b, 
// которая при запуске вычисляет выражение справа a + b и возвращает его результат.

// Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить, сделав запись ещё короче:

// тоже что и
// let double = function(n) { return n * 2 }
// let double = n => n * 2;

// alert( double(3) ); // 6
// Если нет аргументов, указываются пустые круглые скобки:

// let sayHi = () => alert("Hello!");

// sayHi();

// Функции-стрелки могут быть использованы так же, как и Function Expression

// Многострочные стрелочные функции

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//   let result = a + b;
//   return result; // при фигурных скобках для возврата значения нужно явно вызвать return
// };

// alert( sum(1, 2) ); // 3

//tasks

//1
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );
