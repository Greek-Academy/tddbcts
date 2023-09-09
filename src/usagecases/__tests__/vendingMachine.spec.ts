import {VendingMachine} from '../vendingMachine';
describe('vendingMachine', () => {
  it('10円を投入して合計値を取る', () => {
    const vm = new VendingMachine();
    vm.insert(10);
    expect(vm.balance).toBe(10);
  });

  it('50円を投入して合計値を取る', () => {
    const vm = new VendingMachine();
    vm.insert(50);
    expect(vm.balance).toBe(50);
  });

  it('100円を投入して合計値を取る', () => {
    const vm = new VendingMachine();
    vm.insert(100);
    expect(vm.balance).toBe(100);
  });

  it('500円を投入して合計値を取る', () => {
    const vm = new VendingMachine();
    vm.insert(500);
    expect(vm.balance).toBe(500);
  });

  it('1000円札を投入して合計値を取る', () => {
    const vm = new VendingMachine();
    vm.insert(1000);
    expect(vm.balance).toBe(1000);
  });

  it('投入は複数回できる', () => {
    const vm = new VendingMachine();
    vm.insert(10);
    expect(vm.balance).toBe(10);

    vm.insert(50);
    expect(vm.balance).toBe(60);

    vm.insert(100);
    expect(vm.balance).toBe(160);

    vm.insert(500);
    expect(vm.balance).toBe(660);

    vm.insert(1000);
    expect(vm.balance).toBe(1660);
    
  });

  it('払い戻し操作を行うと、投入金額の総計を釣り銭として出力する。', () => {
    
    const vm = new VendingMachine();
    vm.insert(100);
    vm.insert(1000);
    vm.insert(1000);
    vm.insert(10);
    vm.insert(50);
    vm.insert(500);
    expect(vm.balance).toBe(2660);

    const returnedAmount = vm.cancel();
    expect(returnedAmount).toBe(2660);
    expect(vm.balance).toBe(0);
  })
});
