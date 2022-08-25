//let var and const are used to declare variable
//in general to eclare a variable which may change later "let" is used
//for constant "const" is used

//let
/*-> variable defined with let can not be redeclared
->Variables defined with let must be Declared before use.
-> let has block scope

block scope::
variable declared inside {} block cant be acccesed from outside 
of the block.
eg-
{
    let x=2;
}
//x can not be used here
 ->varible declared with var keyword have global scope.
 eg-
 {
     var x=2;
 }
 //x can be used here

 Redeclaring varible :
 -> redeclaring a var varible inside a block will also redeclare
 the variable outside the block
 eg-
 var x=10;
 //here x is 10
 {
     var x=2;
     //here x=2
 }
 //here also x=2 not 10
-> using let, redeclaring varible inside a block will not redeclare 
variable outside the block
eg-
let x=10;
//here x is 10
{
    let x=2;
    //here x is 2
}
//here x is 10

Redeclaring:
 -> redeclaring a varible with var is allowed anywhere in the programe
 eg-
 var x=2;
 //x is 2 here
 var x=3;
 //x is 3 here

 ->with let, redeclaring a variable in the same block is not alowed. 
 in different block it can be redefined.
 eg-
 {
     let x=2;
     let x=3;   //not allowed
 }
 {
     let x=2;
 }                     //this is allowed
 {
     let x=3;   
 }

 ->varible declared with const cannt be redeclared
 ->varible declared with const cannt be reassigned
 ->varible declared with const have block scope
 */