for(let i = 1;i < 10; i++) {
    console.log(i);
}

// let x = 2;
let loopCounter = 0;

while(x < 10000) {
    x *= x;
    loopCounter++;
    console.log(`x is ${x}`);
    console.log(`loopCounter is ${loopCounter}`);
}

let x =2;
while (x < 1000) {
  console.log(Math.pow(x, 2));
  x++;
  
}