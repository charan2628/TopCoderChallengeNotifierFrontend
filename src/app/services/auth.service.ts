import { Injectable } from '@angular/core';

import { Token } from '../model/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setAccessToken(data: Token): void {
    localStorage.setItem('access_token', JSON.stringify(data));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  getAccessToken(): Token {
    return JSON.parse(localStorage.getItem('access_token'));
  }
}
