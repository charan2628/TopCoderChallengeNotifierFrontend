import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitting = false;
  message: String;

  constructor(private fb: FormBuilder, private router: Router,
              private auth: AuthService, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
   }

   ngOnInit() {
    this.email.setValue(this.route.snapshot.queryParams['email']);
   }

   onSubmit() {
     if(this.loginForm.valid) {
       this.submitting = true;
       this.auth.login(this.loginForm.getRawValue()).subscribe(
         res => this.router.navigate(['user-dashboard']),
         err => {
          this.message = "Invalid username or password";
          this.submitting = false;
         }
       )
     }
   }

   get email() { return this.loginForm.get('email'); }

   get password() { return this.loginForm.get('password'); }
}
