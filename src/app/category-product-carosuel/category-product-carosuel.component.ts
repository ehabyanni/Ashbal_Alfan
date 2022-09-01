import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { ProductsService } from '../services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-product-carosuel',
  templateUrl: './category-product-carosuel.component.html',
  styleUrls: ['./category-product-carosuel.component.scss']
})
export class CategoryProductCarosuelComponent implements OnInit {

  constructor(private productService:ProductsService) { }
  CategoriesNames:any = ["المطبوعات الورقية" ,  "اللوحات والإستيكرات","المنتجات الإعلانية"];

  stickerProducts:IProduct[]=[];
  paperPrintingsProducts:IProduct[]=[];
  advertisingProducts:IProduct[]=[];
  products:IProduct[]=[];

   ngOnInit(): void {
    window.scrollTo(0, 0)
    this.productService.GetAllProducts().subscribe(
      data=>{
        console.log("Hi");
        this.products=data;
         //Fill Categories With Products
        this.paperPrintingsProducts=this.products.filter(p=>p.category_Name==this.CategoriesNames[0]);
        this.stickerProducts=this.products.filter(p=>p.category_Name==this.CategoriesNames[1]);
        this.advertisingProducts=this.products.filter(p=>p.category_Name==this.CategoriesNames[2]);
      }
     );
  }


  customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:5000,
    margin:5,
    rtl:true,
    loop: true,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: false,
     dots: false,
     navSpeed: 700,
     navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      676: {
        items: 2
      },
      740: {
        items: 3
      },
      900: {
        items: 3
      }
    },
    nav: true
  }



}
