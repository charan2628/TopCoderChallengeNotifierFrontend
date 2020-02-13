import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { toSeconds, toEpochMillis } from '../utils/Util';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  time: Number;
  message: String;

  tag: String = null;
  tags = new Set<String>();
  schdeuleTime: String;
  updatingTags = false;
  updatingSchedule = false;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getUserConfig();
  }

  getUserConfig() {
    this.dashboardService.getUserConfig().subscribe(
      config => {
        if(config) {
          config.tags.forEach(tag => this.tags.add(tag));
          this.time = config.scheduleTime;
        }
      }
    )
  }

  addTag() {
    if(this.tag) {
      this.tags.add(this.tag);
      this.tag = null;
    }
  }

  removeTag(tag: String) {
    this.tags.delete(tag);
  }

  updateTags() {
    this.updatingTags = true;
    this.dashboardService.updateTags([...this.tags]).subscribe(
      res => {
        this.message = "Successfully updated tags"
        this.updatingTags = false;
      },
      err => {
        this.message = "Error updating tags";
        this.updatingTags = false;
      }
    )
  }

  schdeule() {
    if(this.schdeuleTime) {
      this.updatingSchedule = true;
      this.dashboardService.updateSchedule(toSeconds(this.schdeuleTime) + "").subscribe(
        res => {
          this.message = "Successfully updated schedule";
          this.updatingSchedule = false;
          this.time = toEpochMillis(this.schdeuleTime);
        },
        err => {
          this.message = "Error updating schedule";
          this.updatingSchedule = false;
        }
      )
    }
  }
}
