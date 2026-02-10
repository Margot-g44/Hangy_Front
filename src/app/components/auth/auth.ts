import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class AuthComponent {
  username = '';
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http
      .post<any>('http://localhost:8080/api/auth/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res) => (this.message = res),
        error: (err) => (this.message = err.error),
      });
  }

  register() {
    this.http
      .post<any>('http://localhost:8080/api/auth/register', {
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res) => (this.message = res),
        error: (err) => (this.message = err.error),
      });
  }
}
