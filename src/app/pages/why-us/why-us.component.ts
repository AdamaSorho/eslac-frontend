import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent {
  constructor(private router: Router) {}

  navigateToSchedule() {
    // Implement navigation to schedule page
    this.router.navigate(['/schedule']);
  }
}
