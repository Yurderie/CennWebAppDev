export function iterateVar() {
    for(var i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);
 }
 
 export function iterateLet() {
    for(let i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);
 }

 
const me = 1;
me = 2; //cannot reinitialize
