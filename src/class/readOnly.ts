export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("yu");
console.log(myVisaCard.owner);

// myVisaCard.owner = "uchimura";
