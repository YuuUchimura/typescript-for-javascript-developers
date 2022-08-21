export {};

let bmi: (height: number, weight: number, bool?: boolean) => number = (
  height: number,
  weight: number,
  bool?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (bool) {
    console.log(`true:${bmi}`);
  } else if(bool == false) {
    console.log(`false:${bmi}`);
  }
  return bmi;
};

bmi(1.72, 60);
