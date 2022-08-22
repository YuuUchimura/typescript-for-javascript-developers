export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("yu");
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person("yuchan");
console.log(meOsaka.name);

const michal = new English.Person("Michal", "Joseph", "Jacson");
console.log(michal);
