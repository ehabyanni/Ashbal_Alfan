import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pricing-request',
  templateUrl: './pricing-request.component.html',
  styleUrls: ['./pricing-request.component.scss']
})
export class PricingRequestComponent implements OnInit {

  constructor(private fornmbuilder: FormBuilder) { }

  messagForm = this.fornmbuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    email: ['', Validators.pattern("^[^\s]([a-zA-Z0-9_\.-]+)@([a-zA-Z\.]+)\.(com|net|edu|org)$")],
    subject: ['', Validators.minLength(10)],
    messageBody: ['', [Validators.required, Validators.minLength(20)]]
  })

  //name property
  get NAME() {
    return this.messagForm.get('name');
  }

  //subject preperty
  get SUBJECT() {
    return this.messagForm.get('subject');
  }

  //email preperty
  get EMAIL() {
    return this.messagForm.get('email');
  }

  //phone preperty
  get PHONE() {
    return this.messagForm.get('phone');
  }

  //message preperty
  get MESSAGE() {
    return this.messagForm.get('messageBody');
  }



  ngOnInit(): void {
  }

  WhatsAPI: string = "https://wa.me/";
  PhoneNumber: string = "201097309648"
  textMessage: any = "";

  onSubmit() {
    console.log("Hi");
    this.textMessage = `الاسم : ${this.messagForm.controls.name.value}%0A`;
    this.textMessage += `رقم الهاتف : ${this.messagForm.controls.phone.value}%0A`;

    if (this.messagForm.controls.email.value != "")
      this.textMessage += `البريد الإلكتروني : ${this.messagForm.controls.email.value}%0A`;

    if (this.messagForm.controls.subject.value != "")
      this.textMessage += `الموضوع : ${this.messagForm.controls.subject.value}%0A`;

    this.textMessage += `الرسالة : ${this.messagForm.controls.messageBody.value}`;

    var url = this.WhatsAPI + this.PhoneNumber + "?text=" + this.textMessage;
    window.open(url);
  }

}
