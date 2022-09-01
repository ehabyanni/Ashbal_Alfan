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
      desc: "من السبت الي الخميس  الساعة 9 ص : 12 ص",
      desc2:"الجمعة من الساعة 12:00 م إلي 12:00 ص",
      icon: "fa-solid fa-clock-rotate-left"
    }
  ]

   ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
