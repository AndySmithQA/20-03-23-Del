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

let now = new Date();
// let greeting = "Good";

// if (now.getHours() > 17){
//     greeting += " evening";
// } else {
//     greeting += " day";
// }


// let greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.")
// console.log(greeting)
weekDay = "Mon"
switch(weekDay){
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        document.write("Go to work");
        break;
    case "Sat":
    case "Sun":
        document.write("Stay at home");
        break;
    default:
        document.write("Which planet are you on?");
        break;
}

