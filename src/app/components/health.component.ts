import { Component, OnInit } from '@angular/core';
import { HealthService } from '../services/health.service';

@Component({
  selector: 'app-root',
  template: ` <h1>{{ message }}</h1> `,
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private healthService: HealthService) {}

  ngOnInit() {
    this.healthService.getHealth().subscribe({
      next: (res) => (this.message = res),
      error: (err) => {
        console.error(err);
        this.message = 'Backend not reachable';
      },
    });
  }
}
