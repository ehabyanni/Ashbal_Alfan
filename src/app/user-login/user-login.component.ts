import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, 
              private http: HttpClient, private router: Router , 
              private authService:AuthService , private tokenStorage: TokenService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  //username preperty
  get USERNAME() {
    return this.loginForm.get('username');
  }

  //password property
  get PASS() {
    return this.loginForm.get('pass');
  }

  // login() {
  //   this.http.get<any>("http://localhost:3000/signupUsers")
  //     .subscribe((res: any[]) => {
  //       const user = res.find((a: any) => {
  //         return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
  //       });
  //       if (user) {
  //         alert("Login Success");
  //         this.loginForm.reset();
  //         this.router.navigate(['home']);
  //       } else {
  //         alert("User not found");
  //         var element = document.getElementById('accountError') as HTMLElement;
  //         element.style.display = 'block';
  //       }
  //     }, err => {
  //       alert("something went wrong!!")
  //     })
  // }
  
  isLoggedIn = false;
  errorMessage = '';

  login() {
    if (this.USERNAME != null && this.PASS != null) {
      this.authService.login(this.USERNAME.value,this.PASS.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.isLoggedIn = true;
          this.router.navigate(['home/dashboard']);
        },
        err => {
          this.errorMessage = "خطأ في اسم المستخدم او كلمة سر";
        }

      );
    }
  }

}
