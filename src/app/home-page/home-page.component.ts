import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  counting: any = [
    {
      number: 5,
      title: "سنوات خبرة"
    },
    {
      number: 225,
      title: "عميل إستضافه"
    },
    {
      number: 2250,
      title: "تصميم"
    },
    {
      number: 395,
      title: "عميل أشبال الفن"
    }
  ]

  information: any = [
    {
      title: "المقر الرئيسي",
      desc: " شارع الملك خالد تقاطع 28 (المزارع) - قريب من ماكدونالدز - مقابل محطة النفط - الدمام - السعودية"
    },
    {
      title: "البريد الإلكتروني",
      desc: "contact@raya-adv.com"
    },
    {
      title: "الهاتف",
      desc: "00966-0138408585"
    },
    {
      title: "ساعات العمل",
      desc: "من السبت الي الخميس - من الساعة 8:30 صاحاً إلي 9:00 مساءً"
    }
  ]

  ngOnInit(): void {
  }

}
