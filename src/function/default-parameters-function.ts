export {};

const nextYearSarary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

console.log(nextYearSarary(1000))
