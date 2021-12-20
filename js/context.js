function hello() {
    console.log('Hello', this);
}

// hello();

const person = {
    name: 'Tomas',
    age: 21,
    sayHello: hello, // вызывает контекст person
    sayHelloWindow: hello.bind(window), //передаём контекст, который будет привязан к функции
    logInfo: function (job, phone) {
        console.group(`${this.name} info: `);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    },
};

const lena = {
    name: 'Elena',
    age: 23,
};

// person.logInfo.bind(lena, 'Frontend', '8-999-123-11')();
// person.logInfo.call(lena, 'Frontend', '8-999-123-11');
person.logInfo.apply(lena, ['Frontend', '8-999-123-11']);

// ========================================================================================================
// Пример контекста и прототипов

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     });
// }

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    });
};

console.log(array.multBy(20));
