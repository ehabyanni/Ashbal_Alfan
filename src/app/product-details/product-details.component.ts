import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http: HttpClient,
    private activeroute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) { }

  product_id: any;
  product: any = {};

  ngOnInit(): void {
    this.product_id = this.activeroute.snapshot.paramMap.get('id');

    this.productService.GetAllProducts().subscribe(
      data => {
        this.product = data.find(x => x.id == this.product_id);
        if (this.product === (null || undefined)) {
          console.log("hellllllo");
          this.router.navigate(['/page-not-found/page']);
        }
      }
    )
  }


  changeImage() {
    var main_prodcut_image = document.getElementById('main_product_image');
    console.log(main_prodcut_image)
    //main_prodcut_image.src = element.src;
  }
}
