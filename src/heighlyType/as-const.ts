export {};

let name = "yu";
name = "uchimura";
let a: any = "R";
let nickName = "YU" as const;
nickName = a;
console.log(nickName);

let profile = {
  name: "YU",
  height: 172,
} as const;

// profile.name = "yu";
// profile.height = 123;
