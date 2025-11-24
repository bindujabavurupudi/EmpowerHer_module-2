const isEven = n => n % 2 === 0

let marks = 45
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result)


const greet = (name) => `Hello, ${name ? name : "Guest"}`;
console.log(greet("Munni"))