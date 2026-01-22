/**
 * A variable is a label that references a value like a number or string
 * A variable name can be any valid identifier.
 * By default, a variable has a special value undefined if you don’t assign it a value.
 * Variable names are case-sensitive. This means that the message and Message are different variables.
 * Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces.
 * variable names must begin with a letter, an underscore (_) or a dollar sign ($).
 * Variable names cannot use the reserved words.
 * By convention, variable names use camelCase like message, yourAge, and myName.
 * JavaScript is a dynamically typed language.
 *    - don’t need to explitly specify the variable’s type in the declaration like other static-typed languages such as Java or C#.
 *    - can assign a value of a different type to a variable. (Not Recommended)
 * ES6 : let keyword to declare a variable
 * Initializing a variable
 *    - After declaring a variable, you can initialize it with a value. (equals sign (=) and a value) 
 *    - variableName = initialValue;
 *    - JavaScript allows you to declare two or more variables using a single statement. To separate two variable declarations, you use a comma (,) 
 *    - After declaring or initializing a variable, you can change its value by setting a different value.
 * 
 * An undefined variable is a variable that has been declared but has not been initialized with a value.
 * An undeclared variable is a variable that has not been declared
 * 
 * const Keyword:
 *  - A constant holds a value that doesn’t change.
 *  - When defining a constant, you need to initialize it with a value immediately
 *  - Once you define a constant, you cannot change its value.
 * -  Use the const keyword to define a readonly reference to a value means you cannot reassign the variable to a different value after initialization..
 */

//Declaring a variable
var variableName;
let message;
const counter=90;

//Initializing a variable (variableName = initialValue;)
let messages='Hello';

//Changing a variable
messages=100;

//Undefined
let mess;
console.log(mess); // undefined

//Undeclared
// console.log(count);  //ReferenceError: counter is not defined

//const keyword :
const obj = { name: "John" };
obj.name = "Jane"; // Allowed - modifying property : Mutability of Contents
// modifies the name property of the object. This is permitted because const only prevents reassignment of the variable itself, not mutations to the object's contents.
// obj = {}; // Error - cannot reassign the reference : Immutability of Reference:

const arr = [1, 2, 3];
arr.push(4); // Allowed - modifying array :
// arr = []; // Error - cannot reassign the reference'


/**
 * An identifier is a name (sequence of characters) used to identify variables, functions, objects, classes, etc.
 * A variable is a storage location in memory that holds a value (e.g., a number, string, object).
 * It is declared using keywords like var, let, or const, and its name is an identifier.
 * let message = "Hello"; – Here, message is the identifier (name), and the variable holds the string "Hello".
 * Identifier is just the name/label.
 * Variable is the actual entity (storage) that the identifier refers to.
 * Every variable has an identifier as its name, but not every identifier is a variable (e.g., function names are identifiers but not variables).
 */
