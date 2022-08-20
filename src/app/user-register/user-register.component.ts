import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidators } from '../customValidators/ConfirmPasswordValidators';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router,
    private authService:AuthService , private tokenStorage: TokenService)  { }

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
  isLoggedIn = false;
  errorMessage = '';

 
  register() {
    if (this.NAME != null && this.PASS != null) {
      this.authService.register(this.NAME.value,this.PASS.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data.username);
          console.log("Register Success")
          this.isLoggedIn = true;
          this.router.navigate(['home']);
        },
        err => {
          this.errorMessage = "المستخدم موجود بالفعل";
        }

      );
    }
  }
}