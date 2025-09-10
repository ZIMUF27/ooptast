import { LibraryItem } from "./LibraryItem";
import { LibraryMember } from "./LibraryMember";
import { LoanRecord } from "./LoanRecord";

export class Library {
  private items: Map<string, LibraryItem> = new Map();
  private members: Map<string, LibraryMember> = new Map();
  private loans: LoanRecord[] = [];

  addItem(item: LibraryItem): void {
    if (this.items.has(item.id)) {
      throw new Error("Duplicate item ID");
    }
    this.items.set(item.id, item);
  }

  addMember(member: LibraryMember): void {
    if (this.members.has(member.id)) {
      throw new Error("Duplicate member ID");
    }
    this.members.set(member.id, member);
  }

  borrowItem(itemId: string, memberId: string): void {
    const item = this.items.get(itemId);
    const member = this.members.get(memberId);

    if (!item) throw new Error("Item not found");
    if (!member) throw new Error("Member not found");
    if (!item.isAvailable()) throw new Error("Item unavailable");

    item.borrow(memberId);
    const record = new LoanRecord(item, member.id, member.name);
    this.loans.push(record);
    member.addLoan(record);
  }

  returnItem(itemId: string, memberId: string): void {
    const item = this.items.get(itemId);
    const member = this.members.get(memberId);

    if (!item || !member) throw new Error("Invalid return");

    const record = this.loans.find(
      r => r.item.id === itemId && r.memberId === memberId && !r.isReturned()
    );
    if (!record) throw new Error("Loan record not found");

    item.returnItem();
    record.markReturned();
    member.returnLoan(record);
  }

  listAvailableItems(): LibraryItem[] {
    return Array.from(this.items.values()).filter(i => i.isAvailable());
  }

  listLoans(): LoanRecord[] {
    return this.loans;
  }
}