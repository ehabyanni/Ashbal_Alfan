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
      image1:"/assets/images/letterheads.jpg",
      image2:"/assets/images/letterheads.jpg",
      categoryName:this.category,
      productName:"أوراق المراسلات - الأوراق الرسمية",
      priceFrom:"350",
      priceTo:"750",
      hint:"الاسعار تشمل الضريبة"
    },
    {
      id:2,
      image1:"/assets/images/كارت1.png",
      image2:"/assets/images/كارت2.png",
      categoryName:this.category,
      productName:"كارت شخصي",
      priceFrom:"100",
      priceTo:"260",
      hint:"أحصل علي عرض مميز"
    },
    {
      id:3,
      image1:"/assets/images/envelope1.jpg",
      image2:"/assets/images/envelope2.jpg",
      categoryName:this.category,
      productName:"أظرف طباعة ألوان متعددة",
      priceFrom:"400",
      priceTo:"1200",
      hint:"احصل علي تسعيرة مخصصة"
    },
    {
      id:4,
      image1:"/assets/images/certificate2.jpg",
      image2:"/assets/images/certificate1.jpg",
      categoryName:this.category,
      productName:"شهادات بأنواعها",
      priceFrom:"50",
      priceTo:"170",
      hint:"الاسعار تشمل الضريبة"
    },
    {
      id:5,
      image1:"/assets/images/food.jpeg",
      image2:"/assets/images/food.jpeg",
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
