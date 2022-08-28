export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "YU",
  age: 25,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "Shinji",
  age: 23,
};

// friend.age++;

type yomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyo = yomitoriSenyo<Profile>;
