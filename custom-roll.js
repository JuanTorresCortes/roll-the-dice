const prompt = require('prompt-sync')({sigint: true});

let sides = Number(prompt("how many sides should the dice have: "))
console.log(sides)
let roll = (Math.floor(Math.random() * sides) + 1);
console.log(roll);
console.log(`you rolled a ${roll} on a ${sides} sided dice`);

