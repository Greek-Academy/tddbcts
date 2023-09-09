import { vendingMachine } from '../vendingMachine';
describe('vendingMachine', () => {
  it('10円を投入して合計値を取る', () => {
    const vm = new vendingMachine();
    vm.send(10);
    expect(vm.Sum).toBe(10);
  });
})