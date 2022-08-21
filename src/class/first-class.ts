export {};

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * profile
   */
  public profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person("taro", 24);

console.log(taro.profile());
