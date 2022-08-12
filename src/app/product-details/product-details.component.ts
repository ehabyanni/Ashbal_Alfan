import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
  ) { }

  product_id: any;
  product: any = {};


  ngOnInit(): void {
    this.product_id = this.activeroute.snapshot.paramMap.get('id');

    this.productService.GetAllProducts().subscribe(
      data => {
        this.product = data.find(x => x.id == this.product_id);
        if (this.product === (null || undefined)) {
          console.log(this.product);
          this.router.navigate(['/page-not-found/page']);
        }
      }
    )
  }


  changeImage1() {
    var imageSource = document.getElementById('img1') as HTMLImageElement;
    console.log(imageSource)
    var element = document.getElementById('main_product_image') as HTMLImageElement;
    element.src = imageSource.src;
  }
  changeImage2() {
    var imageSource = document.getElementById('img2') as HTMLImageElement;
    console.log(imageSource)
    var element = document.getElementById('main_product_image') as HTMLImageElement;
    element.src = imageSource.src;
  }
  changeImage3() {
    var imageSource = document.getElementById('img3') as HTMLImageElement;
    console.log(imageSource)
    var element = document.getElementById('main_product_image') as HTMLImageElement;
    element.src = imageSource.src;
  }
  changeImage4() {
    var imageSource = document.getElementById('img4') as HTMLImageElement;
    console.log(imageSource)
    var element = document.getElementById('main_product_image') as HTMLImageElement;
    element.src = imageSource.src;
  }
}
