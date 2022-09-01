import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  // <i class="fa-solid fa-paper-plane"></i>
  // <i class="fa-solid fa-clock"></i>
  // <i class="fa-solid fa-phone"></i>

  information: any = [
    {
      title: "المقر الرئيسي",
      desc: "خميس مشيط - الخالدية - شارع البريد",
      icon: "fa-solid fa-house"
    },
    {
      title: "البريد الإلكتروني",
      desc: "info@AshbalAlfan.com",
      icon: "fa-solid fa-paper-plane"
    },
    {
      title: "الهاتف",
      desc: "+966 50 660 4507",
      desc2: "+966 53 478 1615",
      icon: "fa-solid fa-phone"
    },
    {
      title: "ساعات العمل",
      desc: "من السبت الي الخميس  الساعة 8 ص : 1 م ، الساعة 4 م : 10 م",
      desc2:"الجمعة مغلق",
      icon: "fa-solid fa-clock-rotate-left"
    }
  ]

  ngOnInit(): void {
  }

}
