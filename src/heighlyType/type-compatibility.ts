export {};

let fooCompability: any;
let barCompability: string = "TypeScript";

// console.log(typeof fooCompability);
fooCompability = barCompability;
// console.log(typeof fooCompability);

let fooInCompatible: string;
let barInCompatible: number;

// fooInCompatible = barInCompatible

let fooString: string;
let barString: string;

// fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;
fooStringLiteral = "fooStringLiteral";

let fooNumber: number;
let barNumberLiteral: 1234 = 1234;
fooNumber = barNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(25, "yu");
