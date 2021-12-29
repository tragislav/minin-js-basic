const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

set.add(10).add(20).add(30).add(30);
console.log(set);
console.log(set.has(42)); //false
console.log(set.size);
console.log(set.delete(1));
console.log(set.size);
set.clear();
console.log(set.size);

console.log(set.keys());

for (let key of set) {
    console.log(key);
}

// ===================================
function uniqValues(array) {
    return [...new Set(array)];
}

console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 6]));
