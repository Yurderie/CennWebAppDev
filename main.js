/*import { halfOf, multiply } from './lib.js';
console.log(halfOf(84));
console.log(multiply(21,2));
*/

/*
import doSomething from "./doSomething.js";
doSomething();
*/

/*
import { flag, touch } from './validator.js';
console.log(flag);
touch()
console.log(flag);
*/

/*
import {Vehicle, Car} from './vehicle.js';
let car = new Car('blue');
//console.log(car.toString());
console.log(car instanceof Car);
console.log(car instanceof Vehicle);
*/

/*Arrow Function
const author = {
    fullName: ["Stephen King"],
    books: ["Dark Tower", "Pet Cemetary", "Billy Summers"],
    printBooks() {
      this.books.forEach(book => console.log(book + ' by ' +
         this.fullName));
    }
 };
console.log(author.printBooks());
*/

/*
import {printAuthors} from "./arrow.js";
printAuthors();
*/

/*
import { iterateLet, iterateVar } from "./letvarconst.js";
iterateLet();
iterateVar();
*/

/*
import { add } from "./default.js";
console.log(add(1));
console.log(add(1,10));
*/

/*
import { userFriends } from "./rest.js";
userFriends("Emre", "Bob", "Jack", "Tim");
*/

/*
import { userTopFriends } from "./spread.js";
userTopFriends(...['Gizem', 'Kerim','Ali']);
*/

/*
import {parent} from "./closure.js";
parent()
*/

import {parent} from "./closure.js";
const childFN = parent();
childFN;