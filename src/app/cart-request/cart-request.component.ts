import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-request',
  templateUrl: './cart-request.component.html',
  styleUrls: ['./cart-request.component.scss']
})
export class CartRequestComponent implements OnInit {

  constructor(private fornmbuilder: FormBuilder,private cart:CartService,private router:Router) { }
  CartItems:any[]=[];
  messagForm = this.fornmbuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    phone: ['', [Validators.required, Validators.pattern("[0-9]{9}")]],
    subject: ['', Validators.minLength(10)]
  })

  //name property
  get NAME() {
    return this.messagForm.get('name');
  }

  //subject preperty
  get SUBJECT() {
    return this.messagForm.get('subject');
  }


  //phone preperty
  get PHONE() {
    return this.messagForm.get('phone');
  }


   ngOnInit(): void {
    window.scrollTo(0, 0)
    this.CartItems=this.cart.getCartItems();
  }

  WhatsAPI: string = "https://wa.me/";
  PhoneNumber: string = "201097309648"
  textMessage: any = "";

  onSubmit() {
    console.log("Hi");
    this.textMessage = `الاسم : ${this.messagForm.controls.name.value}%0A`;
    this.textMessage += `رقم الهاتف : ${this.messagForm.controls.phone.value}%0A`;

    if (this.messagForm.controls.subject.value != "")
      this.textMessage += `العنوان : ${this.messagForm.controls.subject.value}%0A`;
      this.textMessage+=`المنتجات  :  %0A`;
      this.textMessage+=`%0A`;
      for(var index in this.CartItems){
        this.textMessage+=`(${parseInt(index)+1})         •المنتج   : ${this.CartItems[index].product.title}%0A`;
        this.textMessage+=`             •السعر    : ${this.CartItems[index].product.maxPrice} ر.س %0A`;
        this.textMessage+=`             •الكمية   : ${this.CartItems[index].quantity} %0A`;
        this.textMessage+=`             •المجموع  : ${this.CartItems[index].quantity*this.CartItems[index].product.maxPrice} ر.س %0A`;
        this.textMessage+=`%0A`;
      }
      this.textMessage+=`%0A%0A`;
      this.textMessage+=`الإجمالي   : ${this.getTotalPrice()} ر.س`;


    var url = this.WhatsAPI + this.PhoneNumber + "?text=" + this.textMessage;
    this.cart.clearCart();
    this.CartItems=[];
    var counter=document.getElementById("lblCartCount");
    if(counter!=null)
    counter.innerText = ""+this.CartItems.length;
    window.open(url);
    this.router.navigate(['/home']);
  
  }
  getTotalPrice():number{
    var totalPrice=0;
    for(var item of this.CartItems){
      totalPrice+=(item.product.maxPrice*item.quantity)
    }
    return totalPrice;
  }


}

