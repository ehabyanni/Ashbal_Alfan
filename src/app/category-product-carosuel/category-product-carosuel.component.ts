import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category-product-carosuel',
  templateUrl: './category-product-carosuel.component.html',
  styleUrls: ['./category-product-carosuel.component.scss']
})
export class CategoryProductCarosuelComponent implements OnInit {

  constructor(private productService:ProductsService) { }


  products:any = [];

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data=>{
        this.products = data.filter(x => x.categoryName == "مطبوعات ورقية");
        console.log(this.products);
      }
    )
  }

}
