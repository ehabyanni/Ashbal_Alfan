import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cart:CartService,private productService:ProductsService) { }

  phoneNumber:string= "+966 50 660 4507";
  email:string="info@AshbalAlfan.com";
  stickerProducts:IProduct[]=[];
  paperPrintingsProducts:IProduct[]=[];
  advertisingProducts:IProduct[]=[];
  products:IProduct[]=[];
  mainLinks:any = ["الرئيسية" ,"المطبوعات الورقية" , "اللوحات والإستيكرات"  , "المنتجات الإعلانية"  , "المدونة"];

  ngOnInit(): void {
    //Get All Products
    console.log("Hi");
    this.productService.GetAllProducts().subscribe(
      data=>{
        console.log("Hi");
        this.products=data;
         //Fill Categories With Products
        this.paperPrintingsProducts=this.products.filter(p=>p.category_Name==this.mainLinks[1]);
        this.stickerProducts=this.products.filter(p=>p.category_Name==this.mainLinks[2]);
        this.advertisingProducts=this.products.filter(p=>p.category_Name==this.mainLinks[3]);
      }
     );
     //Fill Categories With Products

   // Cart
    var CartItems=this.cart.getCartItems();
    var counter=document.getElementById("lblCartCount");
    if(counter!=null)
    counter.innerText = ""+CartItems.length;
  }
  

}
