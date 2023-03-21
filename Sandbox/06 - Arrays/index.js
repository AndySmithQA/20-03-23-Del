// let a = Array();
// console.log(a)

// let b = Array(10);
// console.log(b)

// let c = Array("Tom", "Dick", "Harry");
// console.log(c)

// let d = [1,2,3,"Tom"]
// console.log(d)

// let classRoom = new Array(5);
// classRoom[0] = "Dave";
// classRoom[4] = "Will";
// classRoom[4] = "William";
// classRoom[5] = "Andy";

// console.log(classRoom)

// for (let i = 0; i < classRoom.length; i++) {
//     document.write(`User is ${classRoom[i]}`)
// }

//reverse

let foods = ["hotdogs", "apples", "pasta"]

// let foodString = foods.join("---")
// console.log(foodString)
// console.log(foods.reverse())

// console.log(foods.push("Melon"))

//take out - pop

// let removedFood = foods.pop()
// console.log(`${removedFood} was taken from the array`)

// console.log(foods.unshift("Soup"))
// console.log(foods)

// console.log(`${foods.shift()} was removed`)

// let strings = "Howdy";
// let arr = Array.from(strings)
// console.log(arr)

// console.log(window)

// let x = ['Chris','Smith', 34].find(function(n) {return n === 'Smith'});

// console.log(x)

// console.log(['Chris','Smith', 34].fill(null))
// console.log(['Chris','Smith', 34].fill(null,1,3))

// let arrayEntries = ['Chris','Smith', 34, true].entries();
// console.log(arrayEntries.next().value);
// console.log(arrayEntries.next().value);
// console.log(arrayEntries.next().value);
// console.log(arrayEntries.next().value);

// let arrayKeys = ['Chris','Smith', 34, true].keys();
// console.log(arrayKeys.next().value);
// console.log(arrayKeys.next().value);
// console.log(arrayKeys.next().value);
// console.log(arrayKeys.next().value);

// let arrayValues = ['Chris','Smith', 34, true].values();
// console.log(arrayValues.next().value);
// console.log(arrayValues.next().value);
// console.log(arrayValues.next().value);
// console.log(arrayValues.next().value);

// for of

let myArray = [1,2,3,4];
for (el of myArray){
    if (el === 3) break;
    console.log(el)
}