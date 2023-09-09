export const enum MoneyTypes {
  TEN = 10,
  FIFTY = 50,
  HUNDRED = 100,
  FIVE_HUNDRED = 500,
  THOUSAND = 1000,
}

export class VendingMachine {
  constructor(private internalBalance: number = 0) {}

  insert(money: MoneyTypes) {
    this.internalBalance += money;
  }

  get balance() {
    return this.internalBalance;
  }

  cancel(): number {
    const amount = this.internalBalance;
    this.internalBalance = 0;
    return amount;
  }
}
