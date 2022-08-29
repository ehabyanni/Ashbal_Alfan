import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  products:any = [];

  public _url = "http://backend.ashbalalfan.com/api/Product";
  // public _url = "assets/data/products.json"

  //all products
  GetAllProducts():Observable<IProduct[]>{
    this.products =  this.http.get<IProduct[]>(this._url);
    return this.products;
  }

  GetAllTypes(id:string):Observable<string[]>{
    return    this.http.get<string[]>(this._url+"/types/"+id);
  }

  GetAllAmounts(id:string):Observable<number[]>{
    return  this.http.get<number[]>(this._url+"/amounts/"+id);
  }
  GetPrice(id:string,type:string|null,amount:number|null=-1){
    console.log({id,type,amount})
    return  this.http.post<number>(this._url+"/price",{id,type,amount});

  }
}
