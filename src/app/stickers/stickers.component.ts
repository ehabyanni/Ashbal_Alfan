import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})
export class StickersComponent implements OnInit {

  constructor(private productService:ProductsService , private router:Router) { }

  products:any = [];

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data =>{
        this.products = data.filter(x=> x.category_Id == "af855c6e-aafc-40b2-a920-08da7f5660f3");
      }
    )
  }

  goToProductDetails(id:any){
    this.router.navigate(['', id]);
  }

}
