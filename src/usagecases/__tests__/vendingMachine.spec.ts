import { vendingMachine } from '../vendingMachine';
describe('vendingMachine', () => {
  it('10円を投入すると合計が10円になる', () => {
    const vm = new vendingMachine();
    vm.send(10);
    expect(vm.sumMoney).toBe(10);
  });

  it('10円と100円を投入すると合計が110円になる', () => {
    const vm = new vendingMachine();
    vm.send(10);
    vm.send(100);
    expect(vm.sumMoney).toBe(110);
  });

  it('10円と100円を投入して払い戻しをすると釣銭が110円返ってくる', () => {
    const vm = new vendingMachine();
    vm.send(10);
    vm.send(100);
    let change = vm.refund();
    expect(change).toBe(110);
    expect(vm.sumMoney).toBe(0);
  });

  it('1円を投入すると1円が釣銭として返ってくる', () => {
    const vm = new vendingMachine();
    let change = vm.send(1);
    expect(change).toBe(1);
    expect(vm.sumMoney).toBe(0);
  });

  it('ジュースの数を取得する', () => {
    const vm = new vendingMachine();
    expect(vm.juiceNum).toBe(5);
  });

  it('ジュースの1個目の情報を取得する', () => {
    const vm = new vendingMachine();
    const juice = vm.getJuice(1);
    expect(juice.name).toBe("コーラ");
    expect(juice.price).toBe(120);
  });

  it('コーラが120円で買えるか', () => {
    const vm = new vendingMachine();
    vm.send(100);
    vm.send(10);
    vm.send(10);
    expect(vm.isPurchase("コーラ")).toBe(true);
  });

  it('コーラを120円で買う', () => {
    const vm = new vendingMachine();
    vm.send(100);
    vm.send(10);
    vm.send(10);
    vm.purchase("コーラ");
    expect(vm.getJuiceNum("コーラ")).toBe(4);
  });

  it('コーラを110円で買うが買えず', () => {
    const vm = new vendingMachine();
    vm.send(100);
    vm.send(10);
    vm.purchase("コーラ");
    expect(vm.getJuiceNum("コーラ")).toBe(5);
  });

  it('コーラを120円で買って売上金を取得する', () => {
    const vm = new vendingMachine();
    vm.send(100);
    vm.send(10);
    vm.send(10);
    vm.purchase("コーラ");
    expect(vm.getJuiceNum("コーラ")).toBe(4);
    expect(vm.saleMoney).toBe(120);
  });

  it('コーラを140円で買ってお釣りを20円取得する', () => {
    const vm = new vendingMachine();
    vm.send(100);
    vm.send(10);
    vm.send(10);
    vm.send(10);
    vm.send(10);
    const change = vm.purchase("コーラ");
    expect(vm.getJuiceNum("コーラ")).toBe(4);
    expect(change).toBe(20);
  });
})