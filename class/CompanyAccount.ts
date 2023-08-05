import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(loanAmount: number): void {
    if (loanAmount > 0) {
      this.balance += loanAmount;
      console.log(
        `Empréstimo de ${loanAmount} realizado com sucesso! Seu novo saldo na conta bancária é ${this.balance}`
      );
    } else {
      console.log(
        "Impossível realizar empréstimo com valor negativo ou zero ou conta inválida."
      );
    }
  }
}
