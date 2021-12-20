// Number
const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;

console.log(num);
console.log(float);
console.log(pow);

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); // максимально допустимое целочисленное число
console.log('Math.pow 53', Math.pow(2, 53) - 1);
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE', Number.MAX_VALUE);
console.log('MIN_VALUE', Number.MIN_VALUE);
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
console.log('1 / 0', 1 / 0);
console.log('Not a Number', Number.NaN);

const weird = 2 / undefined;
console.log(isNaN(weird));
console.log(Number.isNaN(42));
console.log(Number.isFinite(42));

const stringInt = '40';
const stringFloat = '40.42';
console.log(stringInt + 2); // Получится 422, так как первое - строка, а второе - канкантинируется(?).
console.log(Number.parseInt(stringInt) + 2);
console.log(+stringInt + 2); // +stringInt --> преобразует строчку в число

console.log(parseInt(stringFloat) + 2);
