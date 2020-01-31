import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Token } from '../model/Token';
import { LoginInfo } from '../model/LoginInfo';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}

    login(loginInfo: LoginInfo) {
        return this.http.post<Token>(`${apiUrl}/login`, loginInfo, {observe: 'response'});
    }
}