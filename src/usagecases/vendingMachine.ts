type InsertType = 10 | 50 | 100 | 500 | 1000;

export class VendingMachine {
  private internalBalance: number = 0;

  insert(num: InsertType) {
    this.internalBalance += num;
  }

  get balance() {
    return this.internalBalance;
  }
}
