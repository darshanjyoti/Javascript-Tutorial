//Jvascripts types are dynamic. This means that the same varible can 
//be used to store different data types

let x; //now x is undefined
x=10; //now x is a number
x="darshan"; //now x is a string

//three premitive data types : string , number and boolean

//Javascript arrays -> [10,5,2]
//javascript object -> {"darshan", "krishna", "ram"};

//undefined
// a varible without value has a type of undefined
let a;
console.log(typeof a);

let ab="";
//this is not undefined , this is a string type
console.log(typeof ab);

//null 
let myVarible=null;
console.log(typeof myVarible); //type of null is object. this is 
//a kind of bug of javascript

//BigInt
//we can store a number using javascript upto MAX_SAFE_INTEGER
let big_no=11121211221111112222222221112212222222;
console.log(big_no);

let big_no1=BigInt(11121211221111112222222221112212222222);
console.log(big_no1);

