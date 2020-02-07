import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: String = 'login-register';

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationEnd) {
          if(router.url === '/login' || router.url === '/register') {
            this.page = 'login-register';
          } else if(router.url === '/user-dashboard') {
            this.page = 'user-dashboard'
          } else if(router.url === '/admin-dashboard') {
            this.page = 'admin-dashboard'
          } else if(router.url === '/logout') {
            this.page = 'logout';
          } else if(router.url === '/un-schedule') {
            this.page = 'un-schedule';
          }
        }
      }
    )
  }
}
