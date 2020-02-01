import { Component, OnInit } from '@angular/core';
import { Status } from '../models/Status';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  serverStatus: Status;

  constructor() {
    this.serverStatus = {
      successfullTasks: 2,
      failedTasks: 0,
      errors: 3
    }
  }

  ngOnInit() {
  }

}
