const people = [
    { name: 'Tomas', age: 21, budget: 100 },
    { name: 'Elena', age: 17, budget: 7654 },
    { name: 'Vasilisa', age: 15, budget: 5500 },
    { name: 'Volha', age: 27, budget: 100000 },
    { name: 'Vladilen', age: 25, budget: 11000 },
    { name: 'Victor', age: 22, budget: 1500 },
];

// For
for (let i = 0; i < people.length; i++) {
    // console.log(people[i]);
}

// for of
for (let person of people) {
    // console.log(person);
}

// ForEach
people.forEach((person) => {
    // console.log(person);
});

// Map
const newPeople = people.map((person) => person.age * 3);
// console.log(newPeople);

// Filter
const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// Reduce
const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log(amount);

// Find
const tomas = people.find((person) => person.name === 'Tomas');
// console.log(tomas);

// FindIndex
const tomasIndex = people.findIndex((person) => person.name === 'Tomas');
// console.log(tomasIndex);

// ================================================
const newAmount = people
    .filter((person) => person.budget > 3000)
    .map((person) => {
        return {
            info: `${person.name}(${person.age})`,
            budget: Math.sqrt(person.budget),
        };
    })
    .reduce((total, person) => total + person.budget, 0);

console.log(newAmount);
