import {MoneyTypes, VendingMachine} from '../vendingMachine';

describe('vendingMachine', () => {
  let vm!: VendingMachine;
  beforeEach(() => {
    // テスト前にVendingMachineのインスタンスを作成する
    vm = new VendingMachine(0);
  });

  it('10円を投入して合計値を取る', () => {
    vm.insert(MoneyTypes.TEN);
    expect(vm.balance).toBe(10);
  });

  it('50円を投入して合計値を取る', () => {
    vm.insert(MoneyTypes.FIFTY);
    expect(vm.balance).toBe(50);
  });

  it('100円を投入して合計値を取る', () => {
    vm.insert(MoneyTypes.HUNDRED);
    expect(vm.balance).toBe(100);
  });

  it('500円を投入して合計値を取る', () => {
    vm.insert(MoneyTypes.FIVE_HUNDRED);
    expect(vm.balance).toBe(500);
  });

  it('1000円札を投入して合計値を取る', () => {
    vm.insert(MoneyTypes.THOUSAND);
    expect(vm.balance).toBe(1000);
  });

  it('投入は複数回できる', () => {
    vm.insert(MoneyTypes.TEN);
    expect(vm.balance).toBe(10);

    vm.insert(MoneyTypes.FIFTY);
    expect(vm.balance).toBe(60);

    vm.insert(MoneyTypes.HUNDRED);
    expect(vm.balance).toBe(160);

    vm.insert(MoneyTypes.FIVE_HUNDRED);
    expect(vm.balance).toBe(660);

    vm.insert(MoneyTypes.THOUSAND);
    expect(vm.balance).toBe(1660);
  });

  it('払い戻し操作を行うと、投入金額の総計を釣り銭として出力する', () => {
    vm.insert(MoneyTypes.HUNDRED);
    vm.insert(MoneyTypes.THOUSAND);
    vm.insert(MoneyTypes.THOUSAND);
    vm.insert(MoneyTypes.TEN);
    vm.insert(MoneyTypes.FIFTY);
    vm.insert(MoneyTypes.FIVE_HUNDRED);
    expect(vm.balance).toBe(2660);

    const returnedAmount = vm.cancel();
    expect(returnedAmount).toBe(2660);
    expect(vm.balance).toBe(0);
  });

  it('1円を入れると投入金額に加算されず返金される', () => {
    const retunedAmount = vm.insert(MoneyTypes.ONE);
    expect(retunedAmount).toBe(1);
    expect(vm.balance).toBe(0);
  });

  it('5円を入れると投入金額に加算されず返金される', () => {
    const retunedAmount = vm.insert(MoneyTypes.FIVE);
    expect(retunedAmount).toBe(5);
    expect(vm.balance).toBe(0);
  });
});
