import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-un-schedule',
  templateUrl: './un-schedule.component.html',
  styleUrls: ['./un-schedule.component.css']
})
export class UnScheduleComponent implements OnInit {

  confirm: String;

  constructor(private router: Router, private dashboardSevice: DashboardService) { }

  ngOnInit() {
  }

  unSchedule() {
    console.log(this.confirm);
    if(this.confirm === 'CONFIRM') {
      this.dashboardSevice.unSchedule().subscribe(
        res => {
          this.router.navigate(['user-dashboard']);
        }
      )
    }
  }
}
