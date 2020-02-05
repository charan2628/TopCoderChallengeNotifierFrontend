import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/app/model/UserInfo';
import { Token } from 'src/app/model/Token';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    register(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/register`, userInfo);
    }

    confirmRegistration(email: String, code: String) {
        return this.http.get(`${apiUrl}/register/confirm?email=${email}&code=${code}`, {observe: 'response'});
    }

    login(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/login`, userInfo);
    }

    adminLogin(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/admin/login`, userInfo);
    }
}