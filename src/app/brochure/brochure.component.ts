import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  products:any = [];

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
