//  1. What is a variable in JavaScript?
// Variable is a container which stores the data 

// 2. How do you declare a variable using var? Give an example.
// A var variable will declare with the "var" key word 
// Ex: var a = 10
// var name = "jhon"

// 3. What is the difference between let and const?
// With let variable we Declare, Assign, and reassign the values but the const variable not possible to reassigning because the const variable behaves like a constant nature.We can only declare and assign values using let variable.

//  4. Can you reassign a value to a variable declared with const? Explain.
// No we cannot reassign a value to a variable declared cost.When you declare a variable with const  it means that the variables reference cannot be changed. Once you assigned a value to const we cannot reassign a new value.

//  5. What will happen if you use a variable before declaring it with let
// It's thrown a error is called Reference error 

// 6. What is variable hoisting? How does it work with var?
// Variable hoisting is a JavaScript behavior where variables declared with var are 
// moved to the top of their scope, regardless of where the actual declaration is made. 
// This means that a variable can be used before it's declared, and it won't throw a ReferenceError.


//  7. Write a code snippet that shows the block scope of let.
// let x = 10; // global scope
// if (true) {
//   let x = 20; // block scope
//   console.log(x); 
// }
// console.log(x); 

// 8. Is it possible to declare multiple variables in a single line? Show how.

// Yes
// let x = 10, y = 20, z = 30;
// console.log(x); 
// console.log(y); 
// console.log(z); 

//  9. What is the default value of an uninitialized variable in JavaScript?
// Undefined


//  10. What is the difference between global and local variables? Give examples
// Global variables are variables that are declared outside of any function or block scope.
// They are accessible from anywhere in the code, including within functions and blocks.


// let globalVariable = 10;
// function myFunction() {
//     console.log(globalVariable); // 10
// }
// myFunction();
// console.log(globalVariable); // 10

// ocal variables are variables that are declared within a function
// or block scope. They are only accessible within that scope and are not accessible outside of it.

// Example:
// function myFunction() {
//   let localVariable = 10;
//   console.log(localVariable); // 10
// }

// myFunction();
// console.log(localVariable); 

1. 
let age = 20
console.log(typeof age)

2.
let price = "150"
let numPrice = Number(price)
console.log(numPrice)
console.log(typeof numPrice)

3.
let num1 = 10
let num2 = 5
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

4.
let city = "Hyderabad"
console.log(city[0] , city[1] , city[2])

5.
let a = 20
let b = "5"
let c = 2
let bNum = Number(b)
console.log(a + bNum + c)

6.
let score 
console.log(score)
console.log(typeof score)
score = 50
console.log(score)
console.log(typeof score)

7.
var d = 10
let e = 20
const f = 30

d = 100 
console.log(d) //var can be reassignable
e = 200
console.log(e) //let can be reassignable
// f = 300
console.log(f) //const canmot be reassignable it's thrown TypeError

8.
let base = 10
let height = "5"
let numHeight = Number(height)
let area = 0.5
console.log(area*base*numHeight)

// let base = 10
// let height = "5"
// let numHeight = Number(height)
// console.log(area = 0.5*base*numHeight)

9.
let marks = "85"
let numMarks = Number(marks)
let sum = numMarks + 15
console.log(sum)

// let marks = "85"
// let numMarks = Number(marks) + 15
// console.log(numMarks)

let message = "Hello, World!"
message = 42
console.log(message)
console.log(typeof message)

let text = "123abc"
let numText = Number(text)
console.log(numText)
console.log(typeof numText)

