import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/app/model/UserInfo';
import { Token } from 'src/app/model/Token';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Message } from 'src/app/utils/Messages';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    register(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/register`, userInfo, {observe : 'response'})
            .pipe(
                catchError(this.handleError)
            );
    }

    confirmRegistration(email: String, code: String) {
        return this.http.get(`${apiUrl}/register/confirm?email=${email}&code=${code}`, {observe: 'response'})
            .pipe(
                catchError(this.handleError)
            );
    }

    login(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/login`, userInfo, {observe: 'response'})
            .pipe(
                tap(res => this.setAccessToken(res.body)),
                catchError(this.handleError)
            );
    }

    adminLogin(userInfo: UserInfo) {
        return this.http.post<Token>(`${apiUrl}/admin/login`, userInfo)
            .pipe(
                tap(token => this.setAccessToken(token)),
                catchError(this.handleError)
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

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ProgressEvent) {
            return throwError({message: Message.CHECK_YOUR_CONNECTION});
        }
        const errormsg = error.error.message;
        if (errormsg === Message.USER_ALREADY_PRESENT) {
            return throwError({message: Message.USER_ALREADY_PRESENT});
        } else if (errormsg === Message.INVALID_CONFIRMATION_CODE) {
            return throwError({message: Message.INVALID_CONFIRMATION_CODE});
        } else if (errormsg === Message.INVALID_EMAIL_OR_PASSWORD) {
            return throwError({message: Message.INVALID_EMAIL_OR_PASSWORD});
        } else if (errormsg === Message.UNCOFIRMED_REGISTRATION) {
            return throwError({message: Message.UNCOFIRMED_REGISTRATION});
        } else {
            return throwError({message: Message.ERROR_OCCURED});    
        }
    }
}