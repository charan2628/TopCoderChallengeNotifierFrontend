import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '../models/Config';
import { Status } from '../models/Status';

const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getConfig() {
    return this.httpClient.get<Config>(`${apiUrl}/config`);
  }

  updateConfig(config: Config) {
    return this.httpClient.post<Config>(`${apiUrl}/config`, config);
  }

  getStatus() {
    return this.httpClient.get<Status>(`${apiUrl}/status`);
  }
  
  checkServerResponse() {
    return this.httpClient.get(`${apiUrl}`);
  }
}
