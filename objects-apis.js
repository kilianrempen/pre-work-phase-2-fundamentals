// Objects contain 2 things: data and related functionality

let dog = {
    name: "Fido",
    color: "brown",
    breed: "Lab",
    size: "medium",
    bark: function() {
        console.log("woof!")
    },
}
dog.bark();

// API = application programming interface - basically lets you use another program's objects.

/*Passing by Value & Passing by Reference
By value = copies the values over from the source
Reference = links directly to the source and can edit it
 */

function newFunction(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 5,
}
newFunction(y);
console.log(y);