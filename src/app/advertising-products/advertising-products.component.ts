import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-advertising-products',
  templateUrl: './advertising-products.component.html',
  styleUrls: ['./advertising-products.component.scss']
})
export class AdvertisingProductsComponent implements OnInit {

  constructor(private productService:ProductsService , private router:Router) { }

  products:any = [];

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data =>{
        this.products = data.filter(x=> x.categoryName == "المنتجات الإعلانية");
      }
    )
  }

  goToProductDetails(id:any){
    this.router.navigate(['', id]);
  }

}
