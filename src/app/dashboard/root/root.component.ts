import { Component, OnInit } from '@angular/core';

import { Status } from '../models/Status';
import { DashboardService } from '../services/dashboard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  serverStatus: Status;
  errorMessages: String[];
  displayLogs = true;
  notifyForm: FormGroup;
  message: String;

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder) {
      this.notifyForm = this.fb.group({
        'tempMail': [null, Validators.required]
      });
      this.loadStatus();
  }

  ngOnInit() {
  }

  loadStatus() {
    this.dashboardService.getStatus().subscribe(
      status => this.serverStatus = status
    );
  }

  notifyNew() {
    if(this.notifyForm.valid) {
      let tempMail = this.tempMail.value;
      this.dashboardService.scheduleNowNew(tempMail).subscribe(
        res => {
          this.message = 'Successfully notified';
        }
      )
    }
  }

  notifyAll() {
    if(this.notifyForm.valid) {
      let tempMail = this.tempMail.value;
      this.dashboardService.scheduleNowAll(tempMail).subscribe(
        res => {
          this.message = 'Successfully notified';
        }
      )
    }
  }

  showLog() {
    this.dashboardService.getErrorMessages().subscribe(
      messages => {
        this.errorMessages = messages
        this.displayLogs = true;
      }
    );
  }

  hideLog() {
    this.displayLogs = false;
  }

  get tempMail() { return this.notifyForm.get('tempMail'); }
}
