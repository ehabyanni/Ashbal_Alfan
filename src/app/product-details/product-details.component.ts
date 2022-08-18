import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorPageNotFoundComponent } from '../error-page-not-found/error-page-not-found.component';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
const categoryArabicNames: any = ["المطبوعات الورقية", "اللوحات والإستيكرات", "المنتجات الإعلانية"];
const mainLinks: any = ["paper_printings", "stickers", "advertising"];

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
    private cart: CartService,
    private formbuilder: FormBuilder
  ) { }

  product_id: any;
  product: any = {};

  product_kind: any = ["كوشيه 350 جم سولفان مطفي/لامع", "ايس جولد", "مغمش"];
  product_quantity: any = ["100", "500", "1000"];

  Kind: any = false;
  Quantity: any = false;


  ngOnInit(): void {
    this.product_id = this.activeroute.snapshot.paramMap.get('id');
    this.productService.GetAllProducts().subscribe(
      data => {
        this.product = data.find(x => x.id == this.product_id);
        this.Kind = this.product.KindISExist;
        this.Quantity = this.product.QuantityIsExist;
        console.log(this.product);
        console.log(this.Kind);
        console.log(this.Quantity);
        if (this.product === (null || undefined)) {
          console.log(this.product);
          this.router.navigate(['/page-not-found/page']);
        }
      }
    )
    console.log(this.Kind);
    console.log(this.Quantity);
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
    var CartItems = this.cart.getCartItems("76C71B31F761FAD83527A619857E6");
    var counter = document.getElementById("lblCartCount");
    if (counter != null)
      counter.innerText = "" + CartItems.length;
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

  getCategoryRoute(name: string): string {
    switch (name) {
      case categoryArabicNames[0]:
        return mainLinks[0];
        break;
      case categoryArabicNames[1]:
        return mainLinks[1];
        break;
      case categoryArabicNames[2]:
        return mainLinks[2];
        break;
      default:
        return "";
        break;
    }
  }



  selectForm = this.formbuilder.group({
    kindselect: ['', [Validators.required]],
    qntselect: ['', [Validators.required]]
  })

  //kindselect property
  get KINDSELECT() {
    return this.selectForm.get('kindselect');
  }

  //qntselect preperty
  get QNTSELECT() {
    return this.selectForm.get('qntselect');
  }

  //<!--في حالة وجود الكمية والخامه-->
  getPrice1() {
    if (this.KINDSELECT != null && this.QNTSELECT != null) {
      var product_price = {
        prod_kind: this.KINDSELECT.value,
        prod_qnt: this.QNTSELECT.value,
      }

      console.log(product_price.prod_kind);
      console.log(product_price.prod_qnt);

      var ppp = document.getElementById('price-value') as HTMLElement;
      var vvv:string = "500";

      ppp.innerText = vvv + "  ر.س  ";

    }
  }

  //<!--في حالة وجود الخامه فقط-->
  getPrice2() {
    if (this.KINDSELECT != null) {
      var product_price = {
        prod_kind: this.KINDSELECT.value,
      }

      console.log(product_price.prod_kind);

      var ppp = document.getElementById('price-value') as HTMLElement;
      var vvv:string = "350";

      ppp.innerText = vvv + "  ر.س  ";

    }
  }



}
