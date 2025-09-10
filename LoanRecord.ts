import { LibraryItem } from "./LibraryItem";

export class LoanRecord {
  constructor(
    public item: LibraryItem,
    public memberId: string,
    public memberName: string,
    public loanDate: Date = new Date(), // เวลาที่สร้าง record
    public returnDate?: Date
  ) {}

  markReturned(): void {
    this.returnDate = new Date();
  }

  isReturned(): boolean {
    return this.returnDate !== undefined;
  }

  getLoanInfo(): string {
    const loanTime = this.loanDate.toLocaleString();
    const returnTime = this.returnDate
      ? this.returnDate.toLocaleString()
      : "ยังไม่คืน";
    return `${this.item.title} โดย ${this.memberName} (ยืมเมื่อ: ${loanTime}, คืนเมื่อ: ${returnTime})`;
  }
}