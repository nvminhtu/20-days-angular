import { Injectable } from '@angular/core';
// khai bao 1 service
// service nay dung de lam viec voi local Storage

// cai thu vien nay de encrypt/descript text js
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  key = '123';
  constructor() {}

  // creat 4 methods: saveData, getData, removeData, clearData

  // public saveData(key: string, value: string) {
  //   localStorage.setItem(key, value);
  // }
  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  // public getData(key: string, value: string) {
  //   localStorage.getItem(key);
  // }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return this.decrypt(data);
  }

  public removeData(key: string) {
    //let data = localStorage.removeItem(key) || '';
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  // Call 2 mothods for encrypt/de
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(
      CryptoJS.enc.Utf8
    );
  }
}
