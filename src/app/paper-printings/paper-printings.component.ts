import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-paper-printings',
  templateUrl: './paper-printings.component.html',
  styleUrls: ['./paper-printings.component.scss']
})
export class PaperPrintingsComponent implements OnInit {

  constructor(private productService:ProductsService , private router:Router) { }

  category:string="المطبوعات الورقية"

  products:any = [];

   ngOnInit(): void {
    window.scrollTo(0, 0)
    this.productService.GetAllProducts().subscribe(
      data => {
        this.products = data.filter(x=> x.category_Id == "d31edd00-bcea-403d-a91f-08da7f5660f3");
        console.log(this.products);
      }
    )
  }

  goToProductDetails(id:any){
    this.router.navigate(['products', id]);
  }

}
