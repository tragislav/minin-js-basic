// 1) Переменные
// Variable
// var name = 'Stanislove'; // Устаревший синтаксис, лучше использовать const и let.
// Constante
// const firstName = 'Tomas';
// const lastName = 'Dykomenko'; // string
// const age = 21; // number
// const isProgrammer = true; // boolean
// Возможные написания нейминга в JS.
// const _private = 'private';
// const $value = 'some value';
// const if = 'else'; error --> нельзя использовать зарезервированные имена.
// const withNum5 = 5;
// const 5withNum = 5 error --> нельзя начинать имя с цифры

// name = 'Vlad';
// lastName = 'Byevich'; --> Так нельзя, потому что константы доступны только для чтения.
// age = 22;

// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log(isProgrammer);

// 2) Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age);
// В данном примере переменная firstName является строкой, а переменная age является числом,
// и JS приводит переменную age к строке, что выглядит как age.toString().

// const lstName = prompt('Введите фамилию');
// alert(
//     'Имя человека: ' +
//         firstName +
//         ', фамилия человека: ' +
//         lstName +
//         ', а возраст человека: ' +
//         age
// );

// 3) Операторы
// let currentYear = 2021;
// const birthYear = 2000;

// const age = currentYear - birthYear;
// console.log(age);

// const a = 10;
// const b = 5;
// let c = 32;

// c = c + a;
// c += a; // две одинаковые операции, но последняя новее.

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(c);
// console.log(currentYear++); // должны были получить 2022, но вывело 2021, потмоу что мы сначала вывели currentYear, а только потом инкрементировали.
// console.log(++currentYear);
// console.log(currentYear--);
// console.log(--currentYear);

// 4) Типы данных
// const isProgrammer = true;
// const name = 'Stas';
// const age = 26;
// let x;

// console.log(typeof isProgrammer); // boolean
// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof x); // undefined
// console.log(typeof null); // object --> ошибка, с которой нужно смириться.

// 5) Приоритет операторов
// const fullAge = 21;
// const birthYear = 2000;
// const currentYear = 2021;
// Операторы сравнения: > < >= <=;
// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

// 6) Условные операторы
// const courseStatus = 'fail'; // Здесь могут быть различные статусы: ready, fail, pending.

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить');
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработке');
// } else {
//     console.log('Курс не получился');
// }

// const isReady = true;

// Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!');

// const num1 = 42; // number
// const num2 = '42'; // string

// console.log(num1 == num2); // проверяется по значению.
// console.log(num1 === num2); // проверяется по типу и значению.

// 7) Булевая логика

// 8) Функции
// function calculateAge(year) {
//     return 2021 - year;
// }

// const myAge = calculateAge(2000);
// console.log(myAge);

// function logInfoAbout(name, year) {
//     const age = calculateAge(year);

//     if (age > 0) {
//         console.log(
//             'Человек по имени: ' + name + ' сейчас имеет возраст: ' + age
//         );
//     } else {
//         console.log('Вообще-то это уже будущее');
//     }
// }

// logInfoAbout('Stas', 2000);
// logInfoAbout('Pavel', 2022);

// 9) Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд'];
// const cars = new Array('Мазда', 'Мерседес', 'Форд');

// console.log(cars);
// console.log(cars);
// console.log(cars[1]);

// cars[0] = 'Porshe';
// cars[cars.length] = 'Mazda'; // тоже самое что и cars[3] в нашем случае.
// console.log(cars);

// 10) Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд'];

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car);
// }

// Тоже самое что выше, но с укороченным современным синтаксисом.
// for (let car of cars) {
//     console.log(car);
// }

// 11) Объекты
const person = {
    firstName: 'Stanislove',
    lastName: 'Dykomenko',
    year: 2000,
    languages: ['ru', 'eng', 'bel'],
    hasWife: false,
    greet: function () {
        console.log('greet from person');
    },
};

console.log(person.firstName);
console.log(person['lastName']);
const key = 'languages';
console.log(person[key]);
person.greet();
person.hasWife = true; // Ключи в объекте можно изменять.
person.isProgrammer = true; //Можно добавлять ключи в объект.
console.log(person);
