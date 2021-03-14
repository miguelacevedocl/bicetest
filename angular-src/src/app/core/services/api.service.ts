import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Indicators } from '../../../../../shared/models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpClient) {}

  get serverUrl(): string {
    return environment.apiServer;
  }

  get apiUrl(): string {
    return `${this.serverUrl}/api`;
  }

  getApiEndpoint(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }

  getIndicators() {
    const url = this.getApiEndpoint(`test`);
    return this.httpService.get(url)
  }
}
