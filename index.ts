import { Library } from "./Library";
import { Book } from "./Book";
import { DVD } from "./DVD";
import { LibraryMember } from "./LibraryMember";

const library = new Library();

const book1 = new Book("b1", "The Hobbit", "J.R.R. Tolkien", 310);
const dvd1 = new DVD("d1", "Inception", 148);
const member1 = new LibraryMember("m1", "Alice");
const member2 = new LibraryMember("m2", "Bob");

library.addItem(book1);
library.addItem(dvd1);
library.addMember(member1);
library.addMember(member2);

// Alice และ Bob ยืมของ
library.borrowItem("b1", "m1");
library.borrowItem("d1", "m2");

console.log("📚 รายการยืมทั้งหมด:");
library.listLoans().forEach(r => {
  console.log(r.getLoanInfo());
});

// Alice คืนหนังสือ
setTimeout(() => {
  library.returnItem("b1", "m1");

  console.log("\n📚 รายการหลังจาก Alice คืน:");
  library.listLoans().forEach(r => {
    console.log(r.getLoanInfo());
  });
}, 2000); // จำลองดีเลย์ 2 วิ