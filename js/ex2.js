const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = number.filter(x => x % 2===0);

const divisable = number.filter(x => x%2===0 || x%5===0);

const square = number.filter(x => x % 3**2 ===0)

const test = number.reduce((acc,value) => acc + (value % 5 === 0 && value ** 2), 0);

console.log(odd);
console.log(divisable);
console.log(square);
console.log(test)