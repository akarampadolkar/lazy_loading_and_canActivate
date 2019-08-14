import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  checkusernamepassword(uname:string, pwd: string){
    if(uname == 'admin' && pwd =='ak'){
      localStorage.setItem('username','admin');
      return true;
    }else{
      return false;
    }
  }
}
