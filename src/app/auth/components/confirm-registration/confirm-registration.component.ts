import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent implements OnInit {

  confirmForm: FormGroup;
  submitting = false;
  message: String;

  constructor(private fb: FormBuilder, private router: Router,
              private auth: AuthService, private route: ActivatedRoute) {
    this.confirmForm = this.fb.group({
      'email': [null, Validators.required],
      "confirm-code": [null, Validators.required]
    });
   }

   ngOnInit() {
    this.email.setValue(this.route.snapshot.queryParams['email']);
   }

   onSubmit() {
     if(this.confirmForm.valid) {
       this.submitting = true;
        this.auth.confirmRegistration(this.email.value, this.confirmCode.value).subscribe(
          res => {
            this.router.navigate(['/login'], {queryParams: {email: this.email.value}});
          },
          err => {
            this.message = "Invalid code"
            this.submitting = false;
          }
        )
     }
   }

   get email() { return this.confirmForm.get('email'); }

   get confirmCode() { return this.confirmForm.get('confirm-code'); }
}
