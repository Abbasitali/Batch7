// alert("working");

// there are two data types
//primitive type
// refrence type

let store =[
    "aamk",
    15311,
    Boolean,
    true,
    false,
    "nhbu",
    Symbol("adscf"),
]; //array
// console.log(store)

store = {
    a: 1,
    b: 2,
    c: 3,
};
// console.log(store["c"]); object literal

//primitive types variables 
//store directly in the location variables accesses store on the stack

//string,number,bolean,symble,null,undefined

store = "something"; //string = text
store = 12345; // Number = number
store = true; // Boolean // 0 = false, 1 = true
store = false; // boolean
store = null; // null (khali hai)
store = undefined; // undefined
store = Symbol("values of symbol"); //symbol

//Primitive Vs Reference Type

//primitive example

let bilal_marks = 100;
let basit_marks = bilal_marks;

basit_marks = 90;
// console.log(bilal_marks);

//refrence example
 let bilal_marks_obj = {
    marks: 100,
}
let basit_marks_obj = {...bilal_marks_obj}; // basit k marks bilal k marks k brabr krdiye hain bbilal ka refrence agaaya basit ko ub agar hum change krty basit ko to also bilal k marks bhi change hojaengy
basit_marks_obj.marks = 90;  

// console.log(bilal_marks_obj, "bilal marks");
// console.log(basit_marks_obj, "basit marks");

const arrayone = [1,2,3];
const arraytwo = [...arrayone];
arraytwo.push= (4);
// console.log(arraytwo);
// console.log(arrayone);

// there are three types of variables
// let const var

//let
// let varibale work only inside of the scope
{let a  = 123;
    // console.log(a);
}
// console.log(a); //undefined

//constant variable
//constant variable also work only inside of the scope

{
    // const abc = 21;
    // console.log(abc);
}
// console.log(abc);  //unddefined error

//var
// var variable is not work in the scope except function

{
    var abc = 2135;
    // console.log(abc); //chal rha h
}
// console.log(abc); //chal rha h

function name() {
    var gamers = 123;
    console.log(gamers);     // error
}
// console.log(gamers);

const abadhadb= "course"  //letters
const ashb1234 = "course"  //letters + numbers
const squad_coder_dev = "course"  //underscore
const squadCoderDev = "course"  //camel case
const SquadCoderDev = "course"  //pascal case


//type conversation
// console.log(SquadCoderDev);
// console.log(typeof SquadCoderDev);

const mouse = "200"
// console.log(mouse);
// console.log(typeof mouse);

//1st method convert string to number
// console.log(parseInt(mouse), "convert string to number");
// console.log(typeof parseInt(mouse));

//2nd method convert string to number
// let pen = new Number("123");
// pen = new Number("string"); //NaN (not a number)
// pen = new Number(true); //1
// pen = new Number(false); //0
pen = new Number([1,2,3]); NaN

// console.log(pen);
// pen = 213.025;
// console.log(pen);
// console.log(typeof pen);
// console.log( parseFloat(pen));

//1st string method
// const pencil = new String("this is javascript");
// const pencil = new String(2365);
// const pencil = new String(true);

// console.log(typeof (pencil));

//2nd method
const check = "22515";

// testing_variable = check.toString();
// testing_variable = (2135).toString();
// console.log(testing_variable);

// testing_variable = "check".toUpperCase();
// console.log(testing_variable);

testing_variable = new Boolean(1);
console.log(testing_variable);

