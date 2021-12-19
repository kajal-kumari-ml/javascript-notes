"use strict";
/**
 * LECTURE: Values and Variables
 *  1. Declare variables called 'country', 'continent' and 'population' and
 *   assign their values according to your own country (population in millions)
 *  2. Log their values to the console
 */

const country="India";
const continent="Asia";
let population=10000000000

console.log(`${country} ${continent} ${population}`);

/**
 * LECTURE: Data Types
 * 1. Declare a variable called 'isIsland' and set its value according to your 
 * country. The variable should hold a Boolean value. Also declare a variable
 * 'language', but don't assign it any value yet
 * 2. Log the types of 'isIsland', 'population', 'country' and 'language'
 * to the console
 */
const isIsland=false;
let language="English";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//function

const percentageOfWord1=(population)=>{
    return Math.floor((population/7900)*100);
}

const me=percentageOfWord1(1441)
console.log(me);
