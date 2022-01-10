const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 3,
};

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2,
};

// Spread

// console.log(...citiesRussia);
// console.log(...citiesEurope);

// const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope];
// console.log(allCities);

//console.log(...citiesRussiaWithPopulation); // Ошибка
// console.log({ ...citiesRussiaWithPopulation }); // Новый обьект в который мы развернули другой обьект
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation });

// Spread PRACTICE
// const numbers = [5, 37, 42, 17];
// console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...numbers));

// const divs = document.querySelectorAll('div');
// const nodes = [...divs];
// console.log(divs, Array.isArray(divs));
// console.log(nodes, Array.isArray(nodes));

// Rest
function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(sum(...numbers)); // В скобках Spread

// const a = numbers[0];
// const b = numbers[1];

// const [a, b, ...other] = numbers;

// console.log(a, b, other);

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia',
};

const { name, age, ...address } = person;

console.log(name, age, address);
