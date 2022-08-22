export {};

class Mohotsukai {}
class Souryo {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kogeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kogeki(): void {
    console.log("kogeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kogeki();
