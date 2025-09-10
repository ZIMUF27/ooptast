import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem {
  constructor(
    id: string,
    title: string,
    public author: string,
    public pages: number
  ) {
    super(id, title);
  }
}