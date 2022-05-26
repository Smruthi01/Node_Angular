import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  getDropDownText(mySelect: string, data: { name: string; id: string; }[]) {
    throw new Error('Method not implemented.');
  }
  getData() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  book(){

  }
}
