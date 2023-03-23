// console.log(1)
// console.log(2)

// //Some kind of network request
// setTimeout(() =>{
//     console.log("Timeout Data")
// },2000)

// console.log(3)
// console.log(4)


// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//         } else if (request.readyState === 4) {
//             reject("Error getting Resources")
//         }
//     });
// request.open('GET', resource);
// request.send()
//   })
// }

// getTodos('todos.json').then(data =>{
//     console.log("Promise 1 Resolved", data)
//     return getTodos('todos2.json').then(data => 
//         {
//         console.log("Promise 2 Resolved", data)
//         return getTodos('todos3.json').then(data => {
//             console.log("Promise 3 Resolved", data)
//         })
//     })
//     }).catch((err) => {
//         console.log("Promise Rejected",err)
// })



// const getSomething = () =>{
//     return new Promise ((resolve, reject) =>{
//             resolve("some Data")
//             //reject("Some Error")
//     })
// }

// getSomething().then(data => {
//     console.log(data)
// }).catch(err =>{
//     console.log(err)
// })






//fetch 

// fetch('todos.json').then((response) => {
//     return response.json();
// }).then(data => {
//     data.forEach(element => {
//         document.write(`<p> ${element.text} by ${element.author} </p>`)
//     });
// }).catch((err) => {
//     console.log('rejected', err);
// })

const getTodos = async () => { //returns a promise
    const response = await fetch('http://localhost:8000/todos')
    if (response.status !== 200) {
        throw new Error("Cannot get Data")
    } 
    const data = await response.json();
    return data
}

getTodos()
  .then(data => console.log('Resolved', data))
  .catch(err => console.log('Rejected', err))