import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartService) { }
  
  CartItems:any[]=[];
  isEmpty:Boolean=true;

  ngOnInit(): void {
    this.CartItems=this.cart.getCartItems();
    this.isEmpty=(this.CartItems.length>0)?false:true;
  }
  deleteItem(item:any){
    this.cart.deleteItemFromCart(item);
    this.CartItems=this.cart.getCartItems();
    this.isEmpty=(this.CartItems.length>0)?false:true;
    var counter=document.getElementById("lblCartCount");
    if(counter!=null)
    counter.innerText = ""+this.CartItems.length;
  }
  changeQuantity(item:any,quantity:number){
    if(this.CartItems.find(c=>c.product.title==item.title).quantity==1 && quantity==-1)return;
    this.cart.addItemToCart(item,this.CartItems.find(c=>c.product.title==item.title).price,quantity);
    this.CartItems=this.cart.getCartItems();
  }
  getTotalPrice():number{
    var totalPrice=0;
    for(var item of this.CartItems){
      totalPrice+=(item.price*item.quantity)
    }
    return totalPrice;
  }

}
