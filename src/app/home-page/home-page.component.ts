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


  products:any = [];

   ngOnInit(): void {
    window.scrollTo(0, 0)
    this.productService.GetAllProducts().subscribe(
      data=>{
        this.products = data.filter(x => x.category_Id == "d31edd00-bcea-403d-a91f-08da7f5660f3");
      }
    )
  }

}
