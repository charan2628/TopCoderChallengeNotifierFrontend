import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/app/model/UserInfo';
import { Token } from 'src/app/model/Token';
import { tap } from 'rxjs/operators';

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
        return this.http.post<Token>(`${apiUrl}/login`, userInfo)
            .pipe(
                tap(token => this.setAccessToken(token))
            );
    }

    adminLogin(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/admin/login`, userInfo)
            .pipe(
                tap(token => this.setAccessToken(token))
            );
    }

    setAccessToken(data: Token): void {
        localStorage.setItem('access_token', JSON.stringify(data));
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('access_token') !== null;
    }

    getAccessToken(): Token {
        return JSON.parse(localStorage.getItem('access_token'));
    }

    logOut() {
        localStorage.setItem('access_token', null);
    }
}