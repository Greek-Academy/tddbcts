import { VendingMachine } from '../vendingMachine';
describe('vendingMachine', () => {
  it('10円を投入して合計値を取る', () => {
    const vm = new VendingMachine();
    vm.send(10);
    expect(vm.sum).toBe(10);
  });
})