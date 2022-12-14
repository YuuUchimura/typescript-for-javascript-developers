export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない

class MynumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}

  get owner(): string {
    return this._owner;
  }

  set secretNumber(value: number) {
    this._secretNumber = value;
  }

  debagPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MynumberCard("yu", 1234567890);
// card.owner = "tanaka"
console.log(card.debagPrint());
card.secretNumber = 1111111111;
console.log(card.debagPrint());
// console.log(card.owner);
