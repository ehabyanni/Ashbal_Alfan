import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  phoneNumber:number= 966581906689;
  email:string="contact@raya-adv.com";

  mainLinks:any = ["الرئيسية" , "المطبوعات الورقية" , "اللوحات والإستيكرات"  , "المنتجات الإعلانية" , "بروشور "  , "المدونة"];

  ngOnInit(): void {
  }

}
