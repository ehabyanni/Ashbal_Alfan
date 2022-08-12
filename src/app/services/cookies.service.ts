import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }
  
  public getCookie(name: string):any[]{
    let ca: Array<string> = document.cookie.split(';');
    console.log(document.cookie);
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return JSON.parse(c.substring(cookieName.length, c.length));
      }
    }
    return [];
  }

  public deleteCookie(cookieName:string) {
    this.setCookie(cookieName, JSON.stringify([]),-1);
  }

  
  public deleteItemFromCookie(cookieName:string,value:any) {
    var CartItms=this.getCookie(cookieName);
    const index=CartItms.findIndex(i=>i.product.id==value.id);
    if(index!=-1){
      CartItms.splice(index,1);
      document.cookie =cookieName+'=' + JSON.stringify(CartItms) +';';
    }
   
  }

  public setCookie(cookieName:string,value:any,quantity:number) {
    var CartItms=this.getCookie(cookieName);
    const index=CartItms.findIndex(i=>i.product.id==value.id);
    if(index!=-1){
      CartItms[index].quantity+=quantity;
    }
    else{
      CartItms.push({product:value,quantity:quantity});
    }
    
    document.cookie =cookieName+'=' + JSON.stringify(CartItms) +';';
  }
}
