import { DioAccount } from "./DioAccount"

export class HackerAccount extends DioAccount {
  
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
    
  }
  deposit = (depositMoney: number): void => {
    
    if (depositMoney > 0) {
      this.balance = this.balance + depositMoney +10;
      console.log(`Seu novo saldo na conta bancaria é ${this.balance}`);
    } else {
      console.log("Impossivel informar valor negativo");
    }
  };
}