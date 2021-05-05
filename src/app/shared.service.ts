import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  islogin = new EventEmitter(false);

  constructor() { }

  changeLoginValue(value: boolean) {
    this.islogin.emit(value)
  }

}