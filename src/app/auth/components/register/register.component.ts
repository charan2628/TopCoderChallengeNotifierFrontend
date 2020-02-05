import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { checkPasswords } from 'src/app/utils/validation';
import {ErrorStateMatcher} from '@angular/material/core';

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

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    }, {updateOn: 'change', validators: [checkPasswords]})
  }

  onSubmit() {
    console.log(this.registerForm.valid);
  }
}
