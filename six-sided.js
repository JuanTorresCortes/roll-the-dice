const prompt = require('prompt-sync')({sigint: true});

let roll = prompt("To roll the dice hit the Enter key: ")
console.log(Math.floor(Math.random() * 6) + 1);