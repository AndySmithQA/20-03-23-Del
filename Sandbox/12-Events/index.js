// // function changeText(id){
// //     id.innerHTML = "This one works too"
// // }

// // const $ = () => {
// //     document.getElementById('demo').innerHTML = Date()
// // }

// // const mOver = obj => obj.innerHTML = "Thank you";

// // function mOut(obj) {
// //     obj.innerHTML = "Mouse Over Me";
// // }

// //prevent default

// document.getElementById('myAnch').addEventListener("click", function(event){
//     event.preventDefault();
// })

// // const myPara = document.querySelector('p');
// // myPara.onclick = () => {
// //     alert("hi")
// // }
// const para = document.querySelector('p')
// para.addEventListener('mouseover', makeRed);
// para.addEventListener('mouseout', makeBlack);


// function makeRed() {
//     para.style.color = 'red';
// }

// function makeBlack() {
//     para.style.color = '';
// }

// document.getElementById('b').addEventListener('mousedown', mouseEvent, true)
// function mouseEvent(e){
//     //console.log(`${e.pageX} ${e.pageY}`)
//     document.getElementById('out').innerHTML = `${e.pageX} ${e.pageY}`
// }

// const anon = document.getElementById('anon')
// const arrow = document.getElementById('arrow')

// anon.addEventListener('click', function(){
//     let out = (this)
//     document.getElementById('anonOut').innerHTML = out
// })

// arrow.addEventListener('click', () =>{
//     let out = (this)
//     document.getElementById('arrowOut').innerHTML = out
// })



const myArrow = () =>{
    console.log("This has been moved")
}
document.getElementById('myButton').addEventListener('click', myArrow)