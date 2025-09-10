export interface IBorrowable {
  borrow(memberId: string): void;
  returnItem(): void;
  isAvailable(): boolean;
  
}

export abstract class LibraryItem implements IBorrowable {
  constructor(
    public id: string,
    public title: string,
    protected available: boolean = true
  ) {}

  borrow(memberId: string): void {
    if (!this.available) {
      throw new Error(`Item "${this.title}" is not available`);
    }
    this.available = false;
  }

  returnItem(): void {
    this.available = true;
  }

  isAvailable(): boolean {
    return this.available;
  }
}

