import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DashboardService } from '../services/dashboard.service';
import { toEpochMillis } from '../util/epochTime';
import { ScheduleTime } from '../models/ScheduleTime';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  tags: Set<String> = new Set();
  tagsForm: FormGroup;

  emails: Set<String> = new Set();
  emailsForm: FormGroup;

  scheduleForm: FormGroup;
  scheduling = false;
  savingConfig = false;

  constructor(private fb: FormBuilder,
              private dashboardService: DashboardService) { 
    this.tagsForm = this.fb.group({
      tag: [null]
    });
    this.emailsForm = this.fb.group({
      email: [null]
    });
    this.scheduleForm = this.fb.group({
      time: [null]
    });
  }

  ngOnInit() {
    this.dashboardService.getConfig().subscribe(config => {
      config.emails.forEach(email => this.emails.add(email));
      config.tags.forEach(tag => this.tags.add(tag));
    });
  }

  getConfig() {
    this.dashboardService.getConfig().subscribe(config => {
      config.emails.forEach(email => this.emails.add(email));
      config.tags.forEach(tag => this.tags.add(tag));
    });
  }

  saveConfig() {
    this.savingConfig = true;
    this.dashboardService.updateConfig({
      emails: Array.from(this.emails),
      tags: Array.from(this.tags)
    }).subscribe(() => {
      this.savingConfig = false;
      this.getConfig();
    });
  }

  addTag() {
    if(this.tag.value) {
      this.tags.add(this.tag.value);
      this.tag.setValue(null);
    }
  }

  removeTag(tag: String) {
    this.tags.delete(tag);
  }

  addEmail() {
    if(this.email.value) {
      this.emails.add(this.email.value);
      this.email.setValue(null);
    }
  }

  removeEmail(email: String) {
    this.emails.delete(email);
  }

  schedule() {
    if(this.time.value !== null) {
      this.scheduling = true;
      let scheduleTime: ScheduleTime = {
        epochMilli: toEpochMillis(this.time.value)
      };
      this.dashboardService.schedule(scheduleTime).subscribe(
        res => {
          this.scheduling = false;
        }
      );
    }
  }

  get tag() { return this.tagsForm.get('tag'); }

  get email() { return this.emailsForm.get('email'); }

  get time() { return this.scheduleForm.get('time'); }
}
