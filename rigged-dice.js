const prompt = require('prompt-sync')({sigint: true});
// 3 is the rigged dice 
let pro = prompt("To roll the dice hit the Enter key: ")

let roll = (Math.floor(Math.random() * 7) + 1);

if(roll === 1 || roll === 2 || roll === 4 || roll === 5 || roll === 6 || roll === 7){
    console.log(Math.floor(Math.random() * 5) + 1)    
}else if(roll === 7){
    console.log(Math.floor(Math.random() * 5) + 1) 
}else{console.log(3)}
