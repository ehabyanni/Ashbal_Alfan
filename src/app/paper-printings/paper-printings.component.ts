import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-printings',
  templateUrl: './paper-printings.component.html',
  styleUrls: ['./paper-printings.component.scss']
})
export class PaperPrintingsComponent implements OnInit {

  constructor() { }

  category:string="المطبوعات الورقية"

  products:any = [
    {
      id:1,
      image1:"/assets/images/stickers-300x300.jpg",
      image2:"/assets/images/26-300x300.jpg",
      categoryName:this.category,
      productName:"ستيكرات ورقية",
      priceFrom:"500",
      priceTo:"1600",
      hint:"الاسعار تشمل الضريبة"
    },
    {
      id:1,
      image1:"/assets/images/stickers-300x300.jpg",
      image2:"/assets/images/26-300x300.jpg",
      categoryName:this.category,
      productName:"ستيكرات ورقية",
      priceFrom:"500",
      priceTo:"1600",
      hint:"الاسعار تشمل الضريبة"
    },
    {
      id:1,
      image1:"/assets/images/stickers-300x300.jpg",
      image2:"/assets/images/26-300x300.jpg",
      categoryName:this.category,
      productName:"ستيكرات ورقية",
      priceFrom:"500",
      priceTo:"1600",
      hint:"الاسعار تشمل الضريبة"
    },
    {
      id:1,
      image1:"/assets/images/الطباعة-801x600.jpg",
      categoryName:this.category,
      productName:"أظرف طباعة ألوان متعددة",
      priceFrom:"50",
      priceTo:"170"
    },
    {
      id:1,
      image1:"/assets/images/stickers-300x300.jpg",
      image2:"/assets/images/26-300x300.jpg",
      categoryName:this.category,
      productName:"ستيكرات ورقية",
      priceFrom:"500",
      priceTo:"1600",
      hint:"الاسعار تشمل الضريبة"
    }
  ]

  ngOnInit(): void {
  }

}
