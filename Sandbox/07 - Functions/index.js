// // function myFunction(user, age){
// //     return `Hello ${user}, so you are ${age} years old`
// // }

// // // const myFunction = function(){

// // // }

// // // console.log(typeof myFunction)

// // console.log(myFunction("Jim", 46))

// // const calcArea = function(radius){
// //     let area = 3.14159 * radius**2;
// //     return area;
// // }

// // // console.log(`The area was ${calcArea(8)}`)

// // let area = calcArea(4);
// // // console.log(area)

// // //With less code

// // const area2 = function(radius){
// //     return 3.142 * radius**2
// // }

// // const calcArrow = radius => {
// //     return 3.142 * radius**2
// // }

// // //console.log(calcArrow(5))
// // //implied return
// // const calcArrow2 = () => "Hi"
// // const calcArrow3 = radius => 3.142 * radius**2
// // const calcArrow4 = (names, age) => `${names}, ${age}`

// // console.log(calcArrow3("Bill", 55))

// function doSomething(arg1, arg2, arg3){
//     return arg1 + arg2 +arg3
// }

// //console.log(doSomething(4,5,6))

// function charge(price, vat=20){
//     return price * (vat/100)
// }

// //console.log(charge(67))
// //rest parameter ...
// function multiply(arg1, ...args){
//     args.forEach((arg,i,array) => array[i] = arg*arg1);
//     return args;
// }

// console.log(multiply(5,5,10,12))

// var a = 7;
// let b = "Hi";



// const myFunct = callBackFuntion => {
//     let value = 70;
//     callBackFuntion(value);
// };

//this is the call
// myFunct(function(value){
//     console.log(`The value was ${value}`)
// })

// let newVal = myFunct(value => `value was ${value}`)
// console.log(newVal)

