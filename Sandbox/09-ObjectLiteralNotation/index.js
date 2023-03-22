// let user = {
//     name: 'Crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'Berlin',
//     blogs: [
//         {title:'My happy place', likes:67 },
//         {title:'Cheese is great', likes:88 }
//     ],
//     login: function(){
//         console.log('The user logged in');
//     },
//     logout(){
//         console.log('The user logged out');
//     },
//     logblogs: function(){
//         console.log("The User has Written");
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes)
//         })
//     }
// };

// user.login()
// user.logout()
//user.logblogs()

//console.log(user)#
//dot notation
// console.log(user.name);
// user.age = 32;
// console.log(user);

//square bracket
// console.log(user['name'])

// user['name'] = 'Dave';
// console.log(user['name'])
// // console.log(user);

// const key = 'location';
// console.log(user[key])

// console.log(typeof user)

// let classroom = [
//     { name:'Bill', id:1234, code:'JS'},
//     { name:'Dave', id:2345, code:'JS'}

// ]
// console.log(classroom)

//merge and assign objects

// let obj1 = {
//     a: 1
// }

// let obj2 = {
//     b: 2
// }

// let obj3 = {
//     c: 3
// }

// Object.assign(obj1,obj2,obj3)
// console.log(obj1)
// console.dir(obj1)

//deconstructing objects

// let first,second,third;
// [first,second,third] = ["I", "Love", "JS"];
// console.log(first)

let myObject = {first: "Salt", second: "Pepper"};
let {first,second} = myObject;
document.write(first)