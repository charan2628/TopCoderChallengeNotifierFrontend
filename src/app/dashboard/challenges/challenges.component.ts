import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/Challenge';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  challenges: Challenge[] = [];
  tableColumns: String[] = ["position", "name", "link"]

  constructor() {
    this.challenges = [
      {
        "id": {
            "timestamp": 1580552891,
            "counter": 8224927,
            "time": 1580552891000,
            "date": "2020-02-01T10:28:11.000+0000",
            "processIdentifier": 6201,
            "machineIdentifier": 6760459,
            "timeSecond": 1580552891
        },
        "name": "Poseidon LPC Payment API - Code Climate Fixes",
        "description": "<p>Welcome to “<strong>Poseidon LPC Payment Code Climate Fixes</strong>”.  In this challenge, we would like to continue building the LPC Payment Backend API.<br />\n <br />\n\n<strong>PROJECT BACKGROUND</strong>\n\n<p>The project objective is to build an SDK for the Loyalty Payment Card (LPC) for our client. This SDK will be used by LPC’s clients to build the LPC mobile app.<br />\n<br />\nSo the SDK will provide all required functionalities from authentication to payment processing, reward management, etc. <br />\n <br />\n\n<strong>FRAMEWORK</strong>\n\n<ul>\n\t<li>\n\t<p>Node.js 12+</p>\n\t</li>\n\t<li>\n\t<p>NestJS</p>\n\t</li>\n\t<li>\n\t<p>Sequelize</p>\n...</li></ul><br /><div>Platforms: Other</div><div>Technologies: Node.js / TypeScript</div><div>Prize: 150 (150)</div><div>Registration Period: 2020-01-30 12:47 +00:00 - 2020-02-08 09:47 +00:00</div><div>Open for registration: Yes</div><div>Submissions Due: 2020-02-08 11:25 +00:00</div><div>Type: First2Finish / develop</div>",
        "link": "https://www.topcoder.com/challenge-details/30113681/?type=develop"
    },
    {
      "id": {
          "timestamp": 1580552891,
          "counter": 8224928,
          "time": 1580552891000,
          "date": "2020-02-01T10:28:11.000+0000",
          "processIdentifier": 6201,
          "machineIdentifier": 6760459,
          "timeSecond": 1580552891
      },
      "name": "Poseidon Customer Auth0 Authorisation server",
      "description": "\n<p><strong>Challenge Overview</strong></p>\n\n<p>In this challenge we would like to validate the OAuth flow with our backend.</p>\n \n\n<p><strong>Project Overview</strong></p>\n\n<p>The project objective is to build an SDK for the Loyalty Payment Card (LPC) for our client. This SDK will be used by LPC’s clients to build the LPC mobile app.</p>\n \n\n<p>So, the SDK will provide all required functionalities, from authentication to payment processing, reward management, etc. </p>\n \n\n<p><strong>Framework</strong></p>\n\n<ol>\n\t<li>\n\t<p>AWS</p>\n\t</li>\n\t<li>\n\t<p>OAuth</p>\n\t</li>\n\t<li>\n\t<p>Node JS</p>\n\t</li>\n\t<li>\n\t<p>Typescript </p>\n\t</li>\n\t<li>\n\t<p>Nginx ingress controller to...</p></li></ol><br /><div>Platforms: AWS</div><div>Technologies: AWS / NGINX / Node.js / Oauth / PostgreSQL / TypeScript</div><div>Prize: 2400 (1600)</div><div>Registration Period: 2020-01-25 05:04 +00:00 - 2020-01-29 16:03 +00:00</div><div>Open for registration: No </div><div>Submissions Due: 2020-01-31 05:14 +00:00</div><div>Type: Code / develop</div>",
      "link": "https://www.topcoder.com/challenge-details/30113482/?type=develop"
  }
    ]
   }

  ngOnInit() {
  }

}
