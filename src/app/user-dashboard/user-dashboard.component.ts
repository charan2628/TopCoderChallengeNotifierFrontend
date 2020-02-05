import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  time = Date.now();

  tag: String = null;
  tags = new Set<String>();
  schdeuleTime: String;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
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

  schdeule() {
    if(this.schdeuleTime) {
      
    }
  }
}
