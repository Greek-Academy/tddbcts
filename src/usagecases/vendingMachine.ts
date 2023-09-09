export const enum MoneyTypes {
  ONE = 1,
  FIVE = 5,
  TEN = 10,
  FIFTY = 50,
  HUNDRED = 100,
  FIVE_HUNDRED = 500,
  THOUSAND = 1000,
  TWO_THOUSAND = 2000,
  FIVE_THOUSAND = 5000,
  TEN_THOUSAND = 10000,
}

const AcceptedMoneys = [
  MoneyTypes.TEN,
  MoneyTypes.FIFTY,
  MoneyTypes.HUNDRED,
  MoneyTypes.FIVE_HUNDRED,
  MoneyTypes.THOUSAND,
];

export class VendingMachine {
  constructor(private internalBalance: number = 0) {}

  isAcceptableMoney(money: MoneyTypes): boolean {
    return AcceptedMoneys.includes(money);
  }

  insert(money: MoneyTypes): number {
    if (!this.isAcceptableMoney(money)) return money;

    this.internalBalance += money;
    return 0;
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
