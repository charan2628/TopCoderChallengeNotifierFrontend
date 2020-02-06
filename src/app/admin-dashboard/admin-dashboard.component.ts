import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';
import { Status } from '../model/Status';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  serverStatus: Status;
  errorMessages: String[];
  displayLogs = false;
  gettingLogs = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.dashboardService.getStatus().subscribe(
      res => this.serverStatus = res
    );
  }

  loadStatus() {
    this.getStatus();
  }

  showLog() {
    this.displayLogs = true;
    this.gettingLogs = true;
    this.dashboardService.getErrorLog().subscribe(
      res => {
        this.errorMessages = res;
        this.gettingLogs = false;
      }
    )
  }

  hideLog() {
    this.displayLogs = false;
  }
}
