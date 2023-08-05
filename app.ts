import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { HackerAccount} from "./class/HackerAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100); 
peopleAccount.withdraw(50);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(5000); 
companyAccount.getLoan(2000);

const hackerAccount: HackerAccount = new HackerAccount('Hacker', 11)
hackerAccount.deposit(1000)
hackerAccount.showBalance()
