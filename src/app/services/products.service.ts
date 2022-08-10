import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  products:any = [];

  public _url = "/assets/data/products.json";

  //all products
  GetAllProducts():Observable<IProduct[]>{
    this.products =  this.http.get<IProduct[]>(this._url);
    return this.products;
  }

}
