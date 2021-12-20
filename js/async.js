console.log('start');

console.log('start2');

function timeout2sec() {
    console.log('timeout2sec');
}

setTimeout(function () {
    console.log('Inside timeout, after 5 seconds');
}, 5000);

setTimeout(timeout2sec, 2000);

setTimeout(function () {
    console.log('Inside timeout, after 0 seconds');
}, 0);

console.log('end');
