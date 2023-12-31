function checkMin(a,b) {
    return (a > b) ? a : b;
}
console.log(checkMin(15,10));

function add7(nb) {
    return nb + 10;
}
console.log(add7(7))

// Arrow function
let sum = (a,b) => a + b;
console.log(sum(5,20));

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    "Do you agree?",
    () => console.log("You agreed"),
    () => console.log("You interrupted the execution"),
);

//function multiply(nb1,nb2) {
//    return nb1 * nb2;
//}
//let result = multiply(20,4);
//alert(result)

function capitalize(str) {
    return str.charAt(0).toUpperCase();
}
console.log(capitalize("hello, World"))

function lastLetter(str) {
    return str.slice(-1);
}
console.log(lastLetter("Hello, World!"))

function pow(x,n) {
    return x ** n
}
console.log(pow(3,3));