export class VendingMachine {
  public sum: number = 0;

  insert(num: 10 | 50 | 100 | 500 | 1000) {
    this.sum += num;
  }
}
