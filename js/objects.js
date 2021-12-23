const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear);
        }, // Данный метод будет лежать в прототипе обьекта
    },
    {
        name: {
            value: 'Tomas',
            enumerable: true,
            writable: true,
            configurable: true,
        },
        birthYear: {
            value: 2000,
            enumerable: false, // Влияет на возможность чтения, по стандарту false
            writable: false, // Влияет на возможность перезаписи, по стандарту false
            configurable: false, // Влияет на возможность удаления, по стандарту false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear;
            },
            set(value) {
                document.body.style.background = 'red';
                console.log(`Set age`, value);
            },
        },
    }
);

// console.log(person);
// person.name = 'Maxim';

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]);
    }
}
