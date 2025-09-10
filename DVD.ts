import { LibraryItem } from "./LibraryItem";

export class DVD extends LibraryItem {
  constructor(
    id: string,
    title: string,
    public duration: number // minutes
  ) {
    super(id, title);
  }
}