import {Juice} from "./juice";

export class vendingMachine
{
  private sum:number = 0;
  private saleAmount:number = 0;
  private juices:Juice[] = [{name:"コーラ", price:120},{name:"コーラ", price:120},{name:"コーラ", price:120},{name:"コーラ", price:120},{name:"コーラ", price:120}];

  public send(num:number):number{
    if(num == 10 || num == 50 || num == 100 || num == 500 || num == 1000){
      this.sum+=num;
      return 0;
    }else{
      return num;
    }
  }

  public get sumMoney():number
  {
    return this.sum;
  }

  public get saleMoney():number
  {
    return this.saleAmount;
  }

  //TODO:juiceNumはジュースの数でコーラの数ではない
  public get juiceNum():number
  {
    return this.juices.length;
  }

  public getJuiceNum(name:string):number
  {
    let num = 0;
    for(const juice of this.juices){
      if(juice.name == name){
        num++;
      }
    }
    return num;
  }

  public getJuice(index:number):Juice
  {
    return this.juices[index];
  }

  private first(name:string):Juice | null
  {
    for(const juice of this.juices){
      if(juice.name == name){
        return juice;
      }
    }
    return null;
  }

  private remove(name:string)
  {
    for(let index = 0; index < this.juices.length; index++){
      if(this.juices[index].name == name){
        this.juices.splice(index, 1);
        break;
      }
    }
  }

  public refund():number
  {
    const change = this.sum;
    this.sum = 0;
    return change;
  }

  public isPurchase(name:string):boolean
  {
    if(this.getJuiceNum(name) <= 0) return false;

    const juice:Juice|null = this.first(name);
    if(juice === null) return false;

    if(juice.name == name && juice.price <= this.sumMoney){
      return true;
    }else{
      return false;
    }
  }

  public purchase(name:string):number
  {
    if(!this.isPurchase(name)) return 0;
    
    this.saleAmount += this.first(name)?.price ?? 0;
    this.remove(name);
    const change = this.sum - (this.first(name)?.price ?? 0);
    return change;
  }
}