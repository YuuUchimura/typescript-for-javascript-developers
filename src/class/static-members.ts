export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = "Yuu";
  static lastName: string = "Ushimura";

  static work() {
    // return "Hey, guys! Are you interestid in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName} Are you interestid in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(Me.isProgramer);
console.log(Me.work());
