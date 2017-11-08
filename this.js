/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/global score. This points to that object.
* 2.  Object before the dot becomes this.
* 3.  the object where the new keyword called. new binds this to the new object
* 4.  .call .apply
*
* write out a code example of each explanation above
*/

// Principle 1
// function sayName(name) {
//     console.log(this);
// }
// console.log(this);
// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} ${name}`);
        console.log(this);
    },
};
// myObj.sayHello('Ryan')
// const sayNameFunc = (obj) => {
//     obj.sayName = function()
//  {
//      console.log(`Hello my name is ${this.name}`)
//  }
// }
// const me = { name: "Aaron"};
// const you = { name: 'Freddy' };
// sayNameFunc(me);
// sayNameFunc(you);
// console.log(me);
// me.sayName();
//you.sayName();
// code example for Implicit Binding

// Principle 3
function CordiaPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const jerry = new CordiaPerson('Newman');
const newman = new CordiaPerson('Jerry');
jerry.speak();
// code example for New Binding

// Principle 4

// code example for Explicit Binding
