import { Component, OnInit, NgModule } from '@angular/core';
import { HealthService } from './services/health.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  template: `<h1>{{ message }}</h1>`,
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private healthService: HealthService) {}

  ngOnInit() {
    this.healthService.getHealth().subscribe({
      next: (res) => (this.message = res),
      error: (err) => {
        console.error('Backend not reachable', err);
        this.message = 'Backend not reachable';
      },
    });
  }
}
