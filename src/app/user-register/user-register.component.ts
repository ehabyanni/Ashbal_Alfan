import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidators } from '../customValidators/ConfirmPasswordValidators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  registerForm = this.formbuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  },
    { validator: [ConfirmPasswordValidators] }
  )


  //username property
  get NAME() {
    return this.registerForm.get('username');
  }

  //password
  get PASS() {
    return this.registerForm.get('password');
  }

  //conirm password
  get CONFIRMPASS() {
    return this.registerForm.get('confirmPassword');
  }

  signUp(): void {
    this.http.post<any>("http://localhost:3000/signupUsers", this.registerForm.value)
      .subscribe(res => {
        alert("signup Successfull");
        this.registerForm.reset();
        this.router.navigate(['user-login']);
      }, err => {
        alert("something went wrong!")
      })
  }
}