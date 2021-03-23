// Iteration 1: Names and Input

const hacker1 = "Mario"
    console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Dhiren"
    console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length>hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
}
// Iteration 3: Loops

/* for (let i=0;i<hacker1.length; i++) {
   console.log(hacker1[i].toUpperCase())
 } This would print for every iteration whilst the condition is met
 M
 A
 R
 I
 O
 */

let auxiliaryString = ""
//create a variable with empty string

for (let i=0;i<hacker1.length; i++) {
    
    auxiliaryString += hacker1[i].toUpperCase() + " "
    console.log(auxiliaryString) 
    // if we console log INSIDE the loop, we print EVERY iteration
} 
console.log(auxiliaryString) // consoling it outside the for loop will just print the final result after all iterations

3.2 
let reverseName = ""
for (let i = hacker2.length-1; i>=0; i--) {
    reverseName += hacker2[i];

} console.log(reverseName)

3.3
let alphabetName = hacker1.localeCompare(hacker2)
// console.log(alphabetName) --> 1
if (alphabetName === - 1) {
    console.log("The driver's name goes first")
} else if (alphabetName === 1) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both have the same name?")
}