let obj = {
    name: 'weakMap.js',
};

// const arr = [obj];

// obj = null;
// console.log(arr);

const map = new WeakMap([[obj, 'obj data']]);
// get, set, delete, has - все методы WeakMap

obj = null;

// console.log(map);

// ===================================
const cache = new WeakMap();
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = { name: 'elena' };
let alex = { name: 'alex' };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));
