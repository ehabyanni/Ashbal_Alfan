import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
const   categoryArabicNames:any = ["المطبوعات الورقية" , "اللوحات والإستيكرات"  , "المنتجات الإعلانية" ];
const   mainLinks:any = ["paper_printings","stickers","advertising"];

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
    private cart:CartService
  ) { }

  product_id: any;
  product: any = {};


  ngOnInit(): void {
    this.product_id = this.activeroute.snapshot.paramMap.get('id');
    console.log("Hi");
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
  addToCart() {
    this.cart.addItemToCart("76C71B31F761FAD83527A619857E6", this.product, 1);
    this.popUpSuccess();
    var CartItems=this.cart.getCartItems("76C71B31F761FAD83527A619857E6");
    var counter=document.getElementById("lblCartCount");
    if(counter!=null)
    counter.innerText = ""+CartItems.length;
  }

  popUpSuccess() {
    var popup = document.getElementById("myPopup");
    if (popup != null) {
      popup.classList.add("show");
      setTimeout(function () {
        if (popup != null) {
          popup.classList.remove("show")
        }
      }, 1000);
    }
  }

  getCategoryRoute(name:string):string{
    switch(name){
      case categoryArabicNames[0]:
        return mainLinks[0];
      break;
      case categoryArabicNames[1]:
        return mainLinks[1];
      break;
      case categoryArabicNames[2]:
        return mainLinks[2];
      break;
      default : 
       return "";
       break;
    }
  }
}
