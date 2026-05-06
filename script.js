// String Concatenation
//var string = "Hello";
//string = string + " World";
//string = string += " World";
//console.log(string);

// Regular math operators:+, -, *, /, %
// console.log((5 + 4) / 3); // 3
// console.log(undefined / 5); // NaN
// function test1 (a) {
//     console.log(a / 5);
// }
// test1(); // NaN

//Equality
// var x = 4; y = 4;
// if (x==y) {
//     console.log("x is equal to y");
// }
// x = "4"; 
// if (x==y) {
//     console.log("x is equal to y");
// }

// // Strict Equality
// if (x === y) {
//     console.log("strict: x is equal to y"); 
// }
// else {
//     console.log("strict: x is NOT equal to y");

//If statements (all false)
// if (false||null||undefined||""||0||NaN) {
//     console.log("This line won't ever execute");
// }
// else {   
//      console.log("All false");
// }   
// // If statements (all true)
// if (true&&"hello"&&1&&-1&&"false") {
//     console.log("All true");
// }

// Best practice for{} style
// Curly braces on the same or next line as the statement
// is it just a style?
// function a() 
// {
//     return //undefined
//     {
//         name: "Yaakov"
//     };  
// }

// function b() 
// {
//     return {
//         name: "Yaakov"
//     };  
// }

// console.log(a());
// console.log(b());   


// For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//     sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// Default values
// function orderChickenWith(sideDish) {
//     if(sideDish === undefined) { //sidedish = sideDish || "whatever!";
//         sideDish = "whatever!";
//     }
//     console.log("Chicken with " + sideDish);
// }
// orderChickenWith("noodles");
// orderChickenWith();





// Objects creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log("company CEO name is " + company.ceo.firstName);

// Object literal syntax
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "red",
//      },
//      "stock of company": 110

//     };
// console.log(facebook.ceo.firstName);
// console.log(facebook["stock of company"]);



//Function are Fisrt-Class Data
// Function are objects
// function multiply(x,y) {
//     return x*y;
// }
// console.log(multiply(5,3));
// multiply.version = "v.1.0.0";
// console.log(multiply);
// console.log(multiply.toString());
// console.log(multiply.version);

// Function Factory
// function makeMultiplier(multiplier) {
//     var myFunc = function(x) {
//         return multiplier *x; 
//     };
//     return myFunc;
// };

// let multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// let doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// copy by reference vs by value
// let a = 2;
// let b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update");
// console.log("a: " + a);
// console.log("b: " + b);

// let a = { x: 4};
// let b = a;
// console.log(a);
// console.log(b);

// b.x = 1;
// console.log("after b.x update");
// console.log(a);
// console.log(b);
