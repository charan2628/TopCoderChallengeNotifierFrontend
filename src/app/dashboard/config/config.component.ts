import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DashboardService } from '../dashboard.service';
import { config } from 'rxjs';

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

  savingConfig: false;

  constructor(private fb: FormBuilder,
              private dashboardService: DashboardService) { 
    this.tagsForm = this.fb.group({
      tag: [null]
    });
    this.emailsForm = this.fb.group({
      email: [null]
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
    console.log('saving config');
    this.dashboardService.updateConfig({
      emails: Array.from(this.emails),
      tags: Array.from(this.tags)
    }).subscribe(() => {
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

  get tag() { return this.tagsForm.get('tag'); }

  get email() { return this.emailsForm.get('email'); }
}
