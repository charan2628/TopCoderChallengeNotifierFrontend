import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/Challenge';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  challenges: Challenge[] = [];
  tableColumns: String[] = ["position", "name", "link"]

  constructor(private dashboardService: DashboardService) {
    this.getChallenges();
  }

  ngOnInit() {
  }

  getChallenges() {
    this.dashboardService.getChallenges().subscribe(
      res => {
        this.challenges = res;
      }
    )
  }
}
