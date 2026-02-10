// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, AuthComponent],
  template: `
    <h1>Hangy Frontend</h1>
    <app-auth></app-auth>
  `,
})
export class App {}
