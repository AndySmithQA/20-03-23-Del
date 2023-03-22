// const link = document.querySelector('a');
// //console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http://www.yahoo.co.uk');
// link.innerText = 'Go to Yahoo'

// const mssg = document.querySelector('p');
// //console.log(mssg.getAttribute('class'))
// mssg.setAttribute('class', 'success')
// console.log(mssg.getAttribute('class'))

// //add attributes

// mssg.setAttribute('style', 'color: red')

// const title = document.querySelector('h1');
// //title.setAttribute('style', 'margin: 50px')
// //console.log(title.style)
// title.style.margin = '50px';

// //font-size 
// title.style.fontSize = '60px'

// //remove style
// title.style.margin = ''

//Classes - Manipulating

// const content = document.querySelector('p')
// console.log(content.classList);
// content.classList.add('error')
// content.classList.add('titles')
// console.log(content.classList);
// content.classList.remove('error')
// console.log(content.classList);

const paras = document.querySelectorAll('p');

paras.forEach(p =>{
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
})