import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pricing-request',
  templateUrl: './pricing-request.component.html',
  styleUrls: ['./pricing-request.component.scss']
})
export class PricingRequestComponent implements OnInit {

  constructor(private fornmilder: FormBuilder) { }

  messagForm = this.fornmilder.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    email: ['' , Validators.pattern("^[^\s]([a-zA-Z0-9_\.-]+)@([a-zA-Z\.]+)\.(com|net|edu|org)$")],
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

  sendMessage(){
    console.log(this.messagForm.value);
  }

}