// JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object.

//To determine the current type of the value stored in a variable, you use the typeof operator:
let counter = 120;
console.log(typeof counter);
console.log(typeof bbb); //undefined : typeof returns when variable that hasn’t been declared
let obj = null;
console.log(typeof obj); //The typeof null returns object

// undefined type: not initialized
let aaa;
console.log(aaa); //undefined

// null type:
let obj1 = null;
console.log(null == undefined); //true

//number type: represent both integer and floating-point numbers.
let price = 12.4;
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log("a" / 2); //Nan : invalid number - division of a string by a number returns NaN
console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

//string type
let greeting = "Hi";
let message = "I'm also a valid string"; // use \ to escape the single quote (')

let str = "JavaScript";
str = str + " String";
console.log(str); //JavaScript String

let s = "JavaScript";
s[0] = "j";
console.log(s); //JavaScript  (not 'javaScript')

//boolen type
let inProgress = true;
let completed = false;
console.log(typeof completed); // boolean

console.log(Boolean("Hi")); // true   : o convert values of other types into boolean valuesmuse Boolean() function
console.log(Boolean("")); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

console.log(Boolean({ foo: 100 })); // true on non-empty object
console.log(Boolean(null)); // false

//object type : is a collection of properties, where each property is defined as a key-value pair.

let person = {
  firstName: "John",
  lastName: "Doe",
}; //person object with two properties: firstName and lastName.

let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
}; //A property of an object can hold an object.

console.log(contact.lastName);
console.log(contact['email']);  //To access an object’s property, you can use . or []



/**
 * dynamically typed language, meaning that a variable isn’t associated with a specific type.
 * JavaScript automatically converts a floating-point number into an integer if the number appears to be a whole number.
 *   The reason is that Javascript always wants to use less memory since a floating-point value uses twice as much memory as an integer value
 * JavaScript strings are immutable, meaning that they cannot be modified once created. However, you can create a new string from an existing one
 *
 */
