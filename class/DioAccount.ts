

export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  
  getName = (): string => {
    return this.name;
  };
  

  deposit = (depositMoney: number): void => {
    
    if (this.validateStatus() && depositMoney > 0) {
      this.balance = this.balance + depositMoney;
      console.log(`Seu novo saldo na conta bancaria é ${this.balance}`);
    } else {
      console.log("Impossivel informar valor negativo");
    }
  };

  withdraw = (withdrawMoney: number): void => {
    if (this.validateStatus() && this.balance > withdrawMoney) {
      this.balance = this.balance - withdrawMoney;
      console.log(`Seu novo saldo na conta bancaria é ${this.balance}`);
    } else {
      console.log("Saldo insuficiente para realizar o saque!");
    }
  };

  showBalance = (): void => {
    console.log(`Seu saldo é de ${this.balance} reais`);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
