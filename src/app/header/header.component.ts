import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  phoneNumber:string= "+966 50 660 4507";
  email:string="info@AshbalAlfan.com";

  mainLinks:any = ["الرئيسية" , "المطبوعات الورقية" , "اللوحات والإستيكرات"  , "المنتجات الإعلانية"  , "المدونة"];

  ngOnInit(): void {
  }

}
