//const check = obj => obj.value.length < 1 ? obj.classList.add('error') : obj.classList.remove('error');

const formSubmit = event => {
 
    event.preventDefault();
    alert("Form Was Submitted")
    for (let i = 0; i < 3; i++){
        console.log(event.target[i].value);
        event.target[i].value = '';
    }
}

document.querySelector('form').addEventListener('submit', formSubmit)

