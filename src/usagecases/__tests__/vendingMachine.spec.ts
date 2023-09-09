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
});
