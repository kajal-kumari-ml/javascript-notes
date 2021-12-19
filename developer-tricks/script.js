//we are gonna use strict mode in all scripts now;
// we gonna use prettier for formater [it will easy developer life]
//you can also edit functionality of prettier for that u gonna make configuration file(.prettierrc).


'use strict';

const x = '23';
if (x === 23) console.log(23);

//we are writing console.log() word by word so there is one trick write co and it automatically write whole sentenced
//for that got to file->Prefrences->User snippet->new global suppoted file->give name do the work
//set prefix that you want (I have set co)
//"Print to console": {
//    "scope": "javascript,typescript",
//    "prefix": "co",
//    "body": ["console.log();"],
//    "description": "Log output to console"
 // }
// here we are ready to used 🤩 now u will write co and enter it will generate console.log()

console.log(23);

const calAge = birthyear => console.log(birthyear);

/**
 * Extra point:Live server
 * there is two ways to used it simply download the package in vscode
 * download the nodejs from browser 
 * for checking it is availble or net simple write node -v
 * the write npm install live-server -g 
 * after downloading u can simply write live-server it will open live-server 
 * 
 */