import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { checkPasswords } from 'src/app/utils/validation';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { UserInfo } from 'src/app/model/UserInfo';

export class AppErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registerForm: FormGroup;
  matcher = new AppErrorStateMatcher();
  submitting = false;
  message: String;

  constructor(private fb: FormBuilder, private router: Router,
              private auth: AuthService) {
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    }, {updateOn: 'change', validators: [checkPasswords]})
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.submitting = true;
      let userInfo: UserInfo = {
        email: this.email.value,
        password: this.password.value
      };
      this.auth.register(userInfo).subscribe(
        res => {
          this.router.navigate(['/confirm-registration']);
        },
        err => {
          this.message = 'Error registring, please try again.';
          this.submitting = false;
        }
      )
    }
  }

  get email() { return this.registerForm.get('email') };

  get password() { return this.registerForm.get('password') };
}
