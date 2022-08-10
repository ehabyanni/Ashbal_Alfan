import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../interfaces/IblogItem';

@Injectable({
  providedIn: 'root'
})
export class BlogitemsService {

  constructor(private http:HttpClient) { }

  public _url = "/assets/data/blogitems.json";

  blog:any = [];

  //all blog items
  GetAllItems():Observable<IBlog[]>{
    this.blog =  this.http.get<IBlog[]>(this._url);
    return this.blog;
  }

  //blog by ID
  // GetOneItemById(blog_id:number):Observable<IBlog>{
  //   return  this.http.get<IBlog>(`${this._url}/${blog_id}`);
  // }
}
