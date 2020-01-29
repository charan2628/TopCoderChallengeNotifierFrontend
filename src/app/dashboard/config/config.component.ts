import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { 
    this.tags.add("Node.Js");
    this.tags.add("Java");
    this.tags.add("Angular");
    this.tagsForm = this.fb.group({
      tag: [null]
    });
    this.emails.add("s.charan@gmail.com");
    this.emails.add("saber@gmail.com");
    this.emailsForm = this.fb.group({
      email: [null]
    });
  }

  ngOnInit() {
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
