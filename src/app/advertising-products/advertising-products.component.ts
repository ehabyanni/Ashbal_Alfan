import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-advertising-products',
  templateUrl: './advertising-products.component.html',
  styleUrls: ['./advertising-products.component.scss']
})
export class AdvertisingProductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  products:any = [];

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data =>{
        this.products = data;
      }
    )
  }

}
