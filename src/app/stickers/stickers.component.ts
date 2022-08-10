import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})
export class StickersComponent implements OnInit {

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
