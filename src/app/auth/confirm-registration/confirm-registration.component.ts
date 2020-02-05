import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent {

  confirmForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.confirmForm = this.fb.group({
      "confirm-code": [null, Validators.required]
    });
   }
}
