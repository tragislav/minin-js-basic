const person1 = {
    name: 'Tomas',
    age: 21,
    greet: function () {
        console.log('greet');
    },
};

console.log(person1);

const person2 = new Object({
    name: 'Tomas',
    age: 21,
    greet: function () {
        console.log('greet');
    },
});

console.log(person2);

Object.prototype.sayHello = function () {
    console.log('hello');
};

console.log(person2.sayHello());

const lena = Object.create(person2);
// person2 будет прототипом обьекта lena у которого будет нижний прототип с функцией sayHello()
lena.name = 'Elena';
console.log(lena);
