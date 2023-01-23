"use strict";
let user1;
user1 = {
    name: "Shuvam",
    age: 24,
    greet(message) {
        console.log(message + ' ' + this.name);
    }
};
user1.greet('Welcome : ');
