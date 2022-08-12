import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  counting: any = [
    {
      number: 5,
      title: "سنوات خبرة"
    },
    {
      number: 225,
      title: "عميل إستضافه"
    },
    {
      number: 2250,
      title: "تصميم"
    },
    {
      number: 395,
      title: "عميل أشبال الفن"
    }
  ]

  information: any = [
    {
      title: "المقر الرئيسي",
      desc: "خميس مشيط - الخالدية - شارع البريد"
    },
    {
      title: "البريد الإلكتروني",
      desc: "info@AshbalAlfan.com"
    },
    {
      title: "الهاتف",
      desc: "+966 50 660 4507",
      desc2: "+966 53 478 1615"
    },
    {
      title: "ساعات العمل",
      desc: "من السبت الي الخميس  الساعة 9 ص : 12 ص",
      desc2:"الجمعة من الساعة 12:00 م إلي 12:00 ص"
    }
  ]

  products:any = [];

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data=>{
        this.products = data.filter(x => x.categoryName == "المنتجات الورقية");
      }
    )
  }

}
