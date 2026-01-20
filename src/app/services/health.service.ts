import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getHealth() {
    return this.http.get(this.apiUrl + '/health', { responseType: 'text' });
  }
}
