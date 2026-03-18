const myArray = [0,1,2,3,4];
console.log(myArray);

let arr = new Array(1,2,3,4);
console.log(arr);

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(9);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(20));
const newArr = myArray.join();
console.log(newArr);

console.log("A ",newArr);

// slice and splice.

const hero = ["Adarsh","Ranveer","Ojha"];
const newHero = ["Priya","Sanket","Daksh"];
// newHero.push(hero);
// console.log(newHero);

// let newArray = newHero.concat(hero);
// console.log(newArray);

// spread operator

const all_new_heros = [...newHero,...hero];
console.log(all_new_heros);











