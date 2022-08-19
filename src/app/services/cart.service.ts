import { Injectable } from '@angular/core';
const CartItemsKey="76C71B31F761FAD83527A619857E6";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
    
public getCartItems():any[]{
    var CartItems=localStorage.getItem(CartItemsKey);
    return (CartItems==null)?[]:JSON.parse(CartItems);
}

public clearCart() {
localStorage.setItem(CartItemsKey,JSON.stringify([]));
}


public deleteItemFromCart(value:any) {
var CartItems=this.getCartItems();
const index=CartItems.findIndex(i=>i.product.id==value.id);
if(index!=-1){
  CartItems.splice(index,1);
  localStorage.setItem(CartItemsKey,JSON.stringify(CartItems));
}

}

public addItemToCart(value:any,price:number,quantity:number,) {
var CartItems=this.getCartItems();
const index=CartItems.findIndex(i=>i.product.title==value.title);
if(index!=-1){
  CartItems[index].quantity+=quantity;
}
else{
  CartItems.push({product:value,price:price,quantity:quantity});
}

localStorage.setItem(CartItemsKey,JSON.stringify(CartItems));
}
}
