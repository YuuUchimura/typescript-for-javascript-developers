export {};

const kansu = (): number => {
  return 43;
};

let numberAny: any = kansu();

let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown); 
// let sumUnknown = numberUnknown + 10;
