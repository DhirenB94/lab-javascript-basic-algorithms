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

// bonus 1
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu semper arcu. Sed nec fermentum libero. Cras posuere ex ac ex aliquam, at malesuada lorem venenatis. Nunc eleifend arcu et mauris ullamcorper semper. Sed rutrum lectus vitae tortor faucibus, nec suscipit ipsum tincidunt. Donec ac ante turpis. Nulla molestie lorem a porttitor rhoncus. Donec tempus consectetur tortor, id eleifend lectus vulputate non. Cras et sem et urna varius auctor. Duis pharetra, metus quis pulvinar scelerisque, risus lorem accumsan ex, semper molestie magna magna eu ex. Vestibulum molestie orci varius, efficitur purus ut, dictum sapien. Proin vel mi suscipit, sagittis felis quis, congue mauris. Nam faucibus tincidunt sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestasEtiam ac iaculis arcu, ut tincidunt ligula. Fusce congue nunc vel magna pharetra elementum. Praesent odio arcu, maximus eu sagittis nec, facilisis eu ante. Etiam eleifend eros nulla, et dapibus mi consequat ut. Suspendisse iaculis ante et neque tincidunt, quis molestie libero consectetur. Sed tincidunt sagittis posuere. Phasellus facilisis laoreet porttitor. Fusce imperdiet mauris sed dui tempor, at aliquet felis efficitur. Curabitur sit amet sem ac dui tincidunt scelerisque. Praesent in turpis orci. Mauris massa ante, ornare eu elementum nec, condimentum sed nisi.Vestibulum vel suscipit quam. Integer ullamcorper mauris in gravida pretium. Phasellus id lorem et ex aliquet pellentesque non et erat. Mauris vel nunc dolor. Praesent sed sem congue, vehicula ante id, egestas erat. Donec ut faucibus diam. Nulla interdum non justo non lobortis. Morbi viverra justo ut sem elementum fringilla. Aliquam eros nulla, blandit eu bibendum vitae, varius euismod dui. In ligula tortor, placerat at nunc et, aliquam efficitur neque"
//number of words
const paraArray = paragraph.split(" ");
console.log(paraArray.length);

//number of times 'et' appears

let etCount = 0
for (let i=0; i<paraArray.length; i++) {
    if (paraArray[i]=== "et") {
        etCount++;
    }

}
console.log(etCount);

//bonus 2
const phraseToCheck = "a man, a plan, a canal, panama"
let newPhrase =""
for (let i=0; i<phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] ===",") {
        continue;
    } newPhrase +=phraseToCheck[i];
}

console.log(newPhrase)


let reverse = ""
for (let i=newPhrase.length-1; i>=0;i--) {
    if(newPhrase[i] === " " || newPhrase[i] ===","){
        continue;
    }
        reverse += newPhrase[i];
}
console.log(reverse)

if (newPhrase === reverse) {
    console.log("palindrome") 
} else (
    console.log("Not a palindrome")
)

