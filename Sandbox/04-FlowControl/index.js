// let score = prompt("Enter your Score")

// if (score > 100 || score < 0){
//     console.log("Out of bounds, score is between 0 and 100")
// } else {
//     if (score > 90){
//         console.log(`Your score of ${score} is an A*`)
//     } else if (score > 80){
//         console.log(`Your score of ${score} is an A`)
//     } else if (score < 70){
//         console.log(`Your score of ${score} is a Fail`)
//     } 
// }

// let now = new Date();
// //let greeting = "Good";

// if (now.getHours() > 17){
//     greeting += " evening";
// } else {
//     greeting += " day";
// }


// let greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.")
// console.log(greeting)

// let day = 8
// switch (day){
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday"
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
// }

// console.log(`Today is ${day}`)


// let weekDay = "Thur";
//  switch(weekDay){
//     case "Mon" || "Tue":
//     case "Tue":
//     case "Wed":
//     case "Thur":
//     case "Fri":
//         console.log("Get to work");
//         break;
//     case "Sat":
//     case "Sun":
//         console.log("Stay at home");
//         break;
//     default:
//         console.log("Not a day");
//         break;
//  }

// While - Conditional

// let i = 1;

// while ( i < 10){
//     if (i % 2 !== 0){
//     console.log(`this loop is ${i}`)
//     }  
//     i++
// }

// let loops = 8;

// do {
//     console.log(`This is loop ${loops}`);
//     loops++;
// } while (loops < 5)

// For - unconditional

// for ( let i = 0; i < 11; i++){
//     console.log(`This is loop ${i}`);
// }

let people = ['bob', 'ted','lisa']

people.forEach(person =>{
    console.log(person)
})