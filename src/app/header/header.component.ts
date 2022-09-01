import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogin:Boolean=false;
  UserName!:string|null;
  constructor(private cart:CartService,private productService:ProductsService, private tokenStorage: TokenService) { }

  phoneNumber:string= "+966 053 478 1615";
  email:string="info@AshbalAlfan.com";
  stickerProducts:IProduct[]=[];
  paperPrintingsProducts:IProduct[]=[];
  advertisingProducts:IProduct[]=[];
  products:IProduct[]=[];
  mainLinks:any = ["الرئيسية" ,"المطبوعات الورقية" , "اللوحات والإستيكرات"  , "المنتجات الإعلانية"  , "المدونة"];
  
   ngOnInit(): void {
    window.scrollTo(0, 0)
    //Cheak user Login
    // this.isUserLogin=(this.tokenStorage.getToken()==null)?false:true;
    // if(this.isUserLogin)
    //   this.UserName= this.tokenStorage.getUser();

    
    
    //Get All Products
    console.log( this.UserName);
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

  logout(){
    this.tokenStorage.signOut();
    this.isUserLogin=false;
  }

  toggle(){
   var menu= document.getElementById("collapsibleNavbar");
   if(menu){
   if(menu.classList.contains("show")){
    menu.classList.remove("show");
    menu.classList.add("hide");
   }else {
    menu.classList.remove("hide");
    menu.classList.add("show");
   }
  }
  }
  

}
