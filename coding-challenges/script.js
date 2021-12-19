/**
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:✍
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:✔
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK😀 
 */

// let markMass=78;
// let markHeight=1.69
// let johnMass=92;
// let johnHeight=1.95;

let markMass=95;
let markHeight=1.88
let johnMass=85;
let johnHeight=1.76;

const markBmi=markMass/markHeight**2;
const johnBmi=johnMass/johnHeight**2;

console.log(markBmi);
console.log(johnBmi);

const markHigherBMI=markBmi>johnBmi
console.log(markHigherBMI);

/**
 Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
 */

if(markBmi>johnBmi){
    console.log(`Mark's BMI(${markBmi}) is higher than John's!`);
}
else{
    console.log(`John's BMI(${johnBmi}) is higher than Mark's!`);
}

