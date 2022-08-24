export {};

interface Person {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Person = { name: "YU", underTwenty: true };

profile.age = 25;
console.log(profile);
