export class VendingMachine
{
  public sum:number = 0;
  
  send(num:number)
  {
    this.sum += num;
  }
}