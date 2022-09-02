import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent implements OnInit {

  constructor(private productService:ProductsService , private router:Router) { }

  category:string="الهدايا الدعائية"

  products:any = [];

   ngOnInit(): void {
    window.scrollTo(0, 0)
    this.productService.GetAllProducts().subscribe(
      data => {
        this.products = data.filter(x=> x.category_Id == "3fa85f64-5717-4562-b3fc-2c963f66afa6");
        console.log(this.products);
      }
    )
  }

  goToProductDetails(id:any){
    this.router.navigate(['products', id]);
  }
}
