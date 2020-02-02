import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '../models/Config';
import { Status } from '../models/Status';
import { ScheduleTime } from '../models/ScheduleTime';

const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getStatus() {
    return this.httpClient.get<Status>(`${apiUrl}/status`);
  }

  getErrorMessages() {
    return this.httpClient.get<String[]>(`${apiUrl}/status/errors`);
  }

  getConfig() {
    return this.httpClient.get<Config>(`${apiUrl}/config`);
  }

  updateConfig(config: Config) {
    return this.httpClient.post<Config>(`${apiUrl}/config`, config);
  }
  
  scheduleNowAll(tempMail?: String) {
    if(tempMail !== null) {
      return this.httpClient.post<String>(`${apiUrl}/schedule/all`, tempMail);
    } else {
      return this.httpClient.get(`${apiUrl}/schedule/all`);
    }
  }

  scheduleNowNew(tempMail?: String) {
    if(tempMail !== null) {
      return this.httpClient.post<String>(`${apiUrl}/schedule/new`, tempMail);
    } else {
      return this.httpClient.get(`${apiUrl}/schedule/new`);
    }
  }

  schedule(scheduleTime: ScheduleTime) {
    return this.httpClient.post<ScheduleTime>(`${apiUrl}/schedule`, scheduleTime);
  }

  checkServerResponse() {
    return this.httpClient.get(`${apiUrl}`);
  }
}
