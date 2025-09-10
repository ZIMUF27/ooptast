import { LoanRecord } from "./LoanRecord";

export class LibraryMember {
  private loans: LoanRecord[] = [];

  constructor(
    public id: string,
    public name: string
  ) {}

  addLoan(record: LoanRecord): void {
    this.loans.push(record);
  }

  returnLoan(record: LoanRecord): void {
    record.markReturned();
  }

  getLoans(): LoanRecord[] {
    return this.loans;
  }
}