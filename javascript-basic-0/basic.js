/*
what is javascript?🤔
javascript is high level(do not worry about memory and other complex things),object oriented(deal on real data),
multi paradiagm(so flexible) programming language(instruct the computer to do).
used as front end and backened side.
HTML->is responsible for structure
CSS->is responsible for presentation
JavaScript:is responsible for dynamic effect ,loading the data and many more...

Front end:
JS move to js framework like react.js,Angular.js,Vseu.js
Backened:
JS+Node.js
And many more like native mobile application native desktop app
*/

//lets gets started😀
console.log("hello word🖐");  //checking purpose

/*   
-----------------------Value and Variable----------------------

variable->that hold or contain the things
value->assign to the particular things
For e.g:
put the books in shelves

so in this case Book->value and shelves->variable
*/
//lets see how we declare the value and variable:

let shelves="Books";
console.log(shelves);

/*
---------------------Rules for naming variable-------------------
1) variable name does not start with number or any special key except $ and _
  for e.g 
        let 3man='mahesh'  ❌
        _man='mahesh'  or $man='mahesh    ✔
        but it is not good naming convesion 
        Always used meaningful name convenation for the readability
2) does not used reserved keyboard like function ,main etc
3) if your variable name is two word or more than 
 there is two ways to write the variable name
 1.firstName   or firstNameOfPet
 2.first_name   or first_name_of_pet
 4)variable name does not start with upper case.

*/

/*
---------------------------------DATA TYPE--------------------------------
*/

//Number->Floating point number->used for decimal and integer for e.g

let age=35;
console.log(age);

//String:Sequence of character->used for text for e.g

let firstName="kajal";
console.log(firstName);

//Boolean->Logical type that can only be true or false->used for taking a decision.

let fullAge=true;

//undefined:value taken by a variable that is not defined yet.

//Null:empty

//Symbol:value that is unique and cannot be changed

//bigINT:larger integer than the number type can load.


//javascript has a dynamic type:we do not have to manually defined the data type of the value.instead
// data type determined automatically.


//->single line comment
/**
 * ->used for multi line comment
 */

// typeof->used for to known the what type of data type 

console.log(typeof null) //return object(unexpected result)



 /**
  *   ---------------LET OR VAR OR CONST-----------------
  */

 //let:we can changed later for e.h(ES6)

 let age2=89;
 age2=78;
 console.log(age);   //78

 //var:we can change later for e.g(legacy)

 var age1=56;
 age1=67;
 console.log(age);

 //const->cannot changed later

 const age3=78;
 //age3=90;
 //console.log(age);   //it throw an error like identifier age is alreay used.


 
  //          -------------------BASIC OPERATOR---------------

  /**
   * Airthmatic operator->+,-,*,/,+=,++,--,-=,
   * comparator operator--><=,>=,===,==,
   * Boolean operator-->AND,OR
   * Logical operator-->&&,||,!=,!
   * 
   */

  //------------------SWITCH STATEMENT------------------------

  const day='monday';

  switch(day){
      case 'monday':
          console.log("monday😑");
          break;
      case 'sunday':
          console.log("sunday😊");
      default:
          console.log("🥴");
  }

  //-------------String & TEMPLATE

  const lastName="kumari";
  console.log(`my last name is ${lastName}`);//string literals

  //---------------------TAkING DECISON----------------


  //1.if-else
  const peopleAge=19; 
  if(peopleAge===15){
       console.log(`Not eligiable for vote ${peopleAge}`);
  }
  else{
      console.log(`eligiable for vote ${peopleAge}🤩`)
  }

  //2.if -else if -else

  let number=0;

  if(number<0){
      console.log(`negative number${number}`);
  }
  else if(number>0){
    console.log(`negative number${number}`);
  }
  else{
      console.log(`positive integer${number}`);
  }


  /**   --------------------FOR LOOP and WHILE LOOP---------------------------
   *   For loop->when we know the last loop like where it is start and where it is end
   * for(let i=0;i<8;i++)
   * while loop:when we do not know ending;
   * while(age<8)
   * {
   *   age++;
   * }
  */

// ----------------------------FUNCTION & ARRAY FUNCTION-------------------------
//Function decaration
function calculator(n1,n2){
    return n1-n2;
}
//calling 
calculator(6,7);//it does not print the value;
console.log(calculator(78,90));

//Array function

const calAge=(y)=> {
    console.log(y);
}
calAge(6);


//----------------------------Array-----------------

const friends=['manny','jjatin','halwa'];

console.log(friends[0]);    //manny
console.log(friends);       //['manny','jjatin','halwa']
for(let i=0;i<friends.length;i++){
    console.log(friends[i]);
}

friends.push('marine');
console.log(friends)   //(4) ['manny', 'jjatin', 'halwa', 'marine']
friends.pop()
console.log(friends)  //(3) ['manny', 'jjatin', 'halwa']

console.log(friends.unshift('jogn'))  //return the length

// indexOf->return the index;
//include->has or has not available

//----------------Introduction to object--------------

const jonas={
    firstName:"Rajni",
    age:22,
    myFriends:['me','goblu','none']
}

//---------------Accessiable method--------------------
//             DOT &BRACKET

console.log(jonas.myFriends[0]);  //me
  
//    continue->skip the logic when it will true
//  break->terminate the function when it will true






