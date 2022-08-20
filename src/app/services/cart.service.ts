import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getCartItems(name: string): any[] {
    var CartItems = localStorage.getItem(name);
    return (CartItems == null) ? [] : JSON.parse(CartItems);
  }

  public clearCart(key: string) {
    localStorage.setItem(key, JSON.stringify([]));
  }


  public deleteItemFromCart(key: string, value: any) {
    var CartItems = this.getCartItems(key);
    const index = CartItems.findIndex(i => i.product.id == value.id);
    if (index != -1) {
      CartItems.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(CartItems));
    }

  }

  public addItemToCart(key: string, value: any, quantity: number) {
    var CartItems = this.getCartItems(key);
    const index = CartItems.findIndex(i => i.product.id == value.id);
    if (index != -1) {
      CartItems[index].quantity += quantity;
    }
    else {
      CartItems.push({ product: value, quantity: quantity });
    }

    localStorage.setItem(key, JSON.stringify(CartItems));
  }
}
