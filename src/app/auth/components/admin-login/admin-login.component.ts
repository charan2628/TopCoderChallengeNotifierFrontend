import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
       this.auth.adminLogin(this.loginForm.getRawValue()).subscribe(
         res => this.router.navigate(['admin-dashboard']),
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
