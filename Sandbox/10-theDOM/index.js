// const para = document.querySelector('body > p:nth-child(5)');
// console.log(para)

// const paraClass = document.querySelector('.error');
// console.log(paraClass)

// const paras = document.querySelectorAll('p');
// //console.log(paras)
// //console.log(paras[2])
// paras.forEach(para =>{
//     console.log(para)
// })

//id
// const title = document.getElementById('page-title')
// console.log(title)

// const errors = document.getElementsByClassName('error');
// console.log(errors)
// console.log(errors[1])

// errors.forEach(error => {
//     console.log(error)
// });

//tagnames

// const parasTag = document.getElementsByTagName('p') 
// console.log(parasTag)

// const para = document.querySelector('p');
// //console.log(para.innerText)
// para.innerText = 'New Overwritten text'

// const paras = document.querySelectorAll('p')
// paras.forEach(para =>{
//     para.innerText += 'New Text'
// })

const content = document.querySelector('.content')
// //console.log(content.innerHTML)
// content.innerHTML += '<h2>Now a header</h2>'

// const people = ['Mike', 'Mary','Katie']

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// })

//create element and create textnodes

let el = document.createElement('p')
let text = document.createTextNode(`try some backticks Again`)
el.appendChild(text);
document.querySelector('#newtext').appendChild(el);