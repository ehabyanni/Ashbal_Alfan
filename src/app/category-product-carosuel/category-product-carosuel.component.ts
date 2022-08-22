import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category-product-carosuel',
  templateUrl: './category-product-carosuel.component.html',
  styleUrls: ['./category-product-carosuel.component.scss']
})
export class CategoryProductCarosuelComponent implements OnInit {

  constructor(private productService:ProductsService) { }
  CategoriesNames:any = ["المطبوعات الورقية" , "اللوحات والإستيكرات"  , "المنتجات الإعلانية"];

  stickerProducts:IProduct[]=[];
  paperPrintingsProducts:IProduct[]=[];
  advertisingProducts:IProduct[]=[];
  products:IProduct[]=[];

  ngOnInit(): void {
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
 
}
