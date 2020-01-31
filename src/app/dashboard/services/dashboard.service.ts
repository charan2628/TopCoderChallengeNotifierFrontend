import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '../models/Config';

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
    console.log(config);
    return this.httpClient.post<Config>(`${apiUrl}/config`, config);
  }
  
  checkServerResponse() {
    return this.httpClient.get(`${apiUrl}`);
  }
}
