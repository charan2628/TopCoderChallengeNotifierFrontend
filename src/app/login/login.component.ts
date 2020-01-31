import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: String;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService) { 
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.submitting = true;
      this.loginService.login(this.loginForm.getRawValue()).subscribe(
        res => {
          this.authService.setAccessToken(res.body);
          this.router.navigate(['dashboard']);
          this.submitting = false;
        },
        err => {
          this.submitting = false;
          this.message = err.message;
        }
      )
    }
  }
}
