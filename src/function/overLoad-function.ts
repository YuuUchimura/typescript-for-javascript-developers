export {};

function double(value: number | string): number | string;
// function double(value: string): string;

function double(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(1000));
