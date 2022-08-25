
//->js string can be written with single or double quote.
let my_name="darshan";

//->to find the length of a string "lenght" is used
console.log(my_name.length);
//->escape character \' for single quote , \" for double quote
console.log("darshan is a \"very good\" code");
//-> \n for new line
//-> \t for tab horizontal
//-> \v for tab vertical

//string indexing 
let Name="darshan"; //indexing start with 0
console.log(Name[3]);

//strings are immutable. string can not be changed, only replaced.
//charCodeAt
//it returns the unicode of char at specific index
Name="Talukdar";
let char=Name.charCodeAt(0);
console.log(char);

//string methods
//  1->trim()
//it removes the spaces.
//it doesnot change the original string rather make a new string
let a="  dArsHaN   ";
console.log(a);
let newString=a.trim();
console.log(newString);
//if we dont want to make a new variable then
a=a.trim();
console.log(a); //it will work as same

// 2->toUpperCase 
let up=a.toUpperCase();
console.log(up);
// 3-> toLowerCase
let lower=a.toLowerCase();
console.log(lower);

// 4-> slice(start pos, end pos) //end pos not include
//it extract a part of string returns the extracted part as a new string

let part_str=a.slice(1,4);
console.log(part_str);
//we can use substr also

// 5-> replacing string content
let text="this is a string";
let new_text=text.replace("string","not string");
console.log(new_text);

// 6-> split()
//using split string can be converted into arrays
//text.split(",")  split using comma
//text.split(" ") split using space
//text.split("|") split uisng pipe
let split_text=text.split(" ");
console.log(split_text);

// 7->typeof operator
console.log(typeof text);
console.log(typeof 7);
console.log(typeof true);

// 8-> convert number to string
//just add one blank space with the number
let num=8;
console.log(typeof num);
num=num + ""; //num is converted to string
console.log(typeof num);
      //or
num=String(num);

// 9-> convert string to number
//just add + before the string
let my_str="this is a string";
console.log(typeof my_str);
my_str=+(my_str);  //my_str is converted to number
console.log(typeof my_str);
    //or
my_str=Number(my_str);

// 10-> string concatenation
let str1="string1";
let str2="string2";
let full_str=str1+ " " +str2;
console.log(full_str);
//concatenation happen with number also   
 let num1=10;
let full_str1=str1 + num1;
console.log(full_str1);

// 11-> template string
let  age=22;
let firstName="darshan";
//now you need to ptint "my name is darshan and my age is 22"
//one way of doing this
let aboutMe="my name is " + firstName + " and my age is " + age;
console.log(aboutMe);
//but this is veru tedious work and we need to carefull about speces
//easy way to print that is by using templte string
//for this use ` ` and ${} sign.
aboutMe=`my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);

