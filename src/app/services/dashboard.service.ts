import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserConfig } from '../model/UserConfig';
import { Status } from '../model/Status';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) { }

    getUserConfig() {
        return this.http.get<UserConfig>(`${apiUrl}/config`);
    }

    updateTags(tags: String[]) {
        return this.http.post(`${apiUrl}/config/tags`, tags, {observe: 'response'});
    }

    updateSchedule(time: String) {
        return this.http.post(`${apiUrl}/config/schedule`, time, {observe: 'response'});
    }

    getStatus() {
        return this.http.get<Status>(`${apiUrl}/admin/status`);
    }

    getErrorLog() {
        return this.http.get<String[]>(`${apiUrl}/admin/status/errors`);
    }
}