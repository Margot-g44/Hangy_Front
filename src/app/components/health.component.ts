import { Component, OnInit } from '@angular/core';
import { HealthService } from '../services/health.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  template: ` <h1>{{ message }}</h1> `,
})
export class HealthComponent implements OnInit {
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
