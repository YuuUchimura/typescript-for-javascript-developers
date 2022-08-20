export {};

type Mojiretu = string;

const fooString: Mojiretu = "Hello";

type Profile = {
  name: string;
  age: number;
};

const exsample: Profile = {
  name: "Yu",
  age: 26,
};

type Profiile2 = typeof exsample;
