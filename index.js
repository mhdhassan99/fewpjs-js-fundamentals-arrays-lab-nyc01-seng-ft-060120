// Write your solution here!

const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

append.push("Odie");
console.log(append);

prepend.unshift("Odie");
console.log(append);

removeLast.pop();
console.log(removeLast);

removeFirst.shift();
console.log(removeFirst);