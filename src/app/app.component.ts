import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Standalone component
  imports: [DashboardComponent],  // ✅ Import DashboardComponent
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

// ✅ Bootstrap directly
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
