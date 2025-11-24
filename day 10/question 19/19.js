// 1

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// 2

// a)
const square = n => n * n;

// b) Explanation:
// Arrow functions DO NOT bind their own "this". 
// So "this.value" refers to global or undefined, not obj.
const obj = {
  value: 50,
  test: () => console.log(this.value) // undefined
};
obj.test();

// c) Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// 3

// a)
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b)
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 10, 2));


// 4

// a)
const arr = [10, 20, 30];
const [a1, a2] = arr;
console.log(a1, a2);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info?.data?.value); // undefined


// 5/

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// c) Explanation:
// const prevents reassignment,  value stays fixed and safe.


// 6

// a)
let speed;
speed = kmph > 60 ? "Fast" : "Normal";

// b)
const status1 = age >= 18 ? "Adult" : "Minor";

// c)
const check = n =>
  n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";


// 7

// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const aa = ["x", "y"];
const bb = ["z"];
const combinedArr = [...aa, ...bb];
console.log(combinedArr);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// 8

// a)
const user = { id: 101, status: "active" };
const { id, status } = user;

// b)
const id1 = 101;
const role = "admin";
const userShort = { id1, role };
console.log(userShort);

// c)
const person = {
  name: "Sam",
  age: 22,
  greet() {
    console.log("Hello!");
  }
};
person.greet();


// 9

// a)
console.log(`Today's date is: ${new Date().toDateString()}`);

// b)
const NAME = "Alex";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10

// a)
const add = (x, y) => x + y;

// b)
const isAdult = age => age >= 18;

// c)
const double = n => n * 2;


// 11

// a)
const arrClone = [...nums];

// b)
const newArr = [100, ...nums];

// c)
const objA = { name: "A", age: 20 };
const objB = { age: 99, city: "Bangalore" };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj);


// 12

const userOC = {
  name: "Alex",
  address: { city: "Bangalore" }
};

// a)
console.log(userOC?.address?.city);

// b)
console.log(userOC?.job?.title);

// c)
const demo = {};
console.log(demo?.something?.inside); 

