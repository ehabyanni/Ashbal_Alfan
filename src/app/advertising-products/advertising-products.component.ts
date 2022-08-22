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
        this.products = data.filter(x=> x.category_Id == "344e00a1-7744-4388-a921-08da7f5660f3");
      }
    )
  }

  goToProductDetails(id:any){
    this.router.navigate(['products', id]);
  }

}
