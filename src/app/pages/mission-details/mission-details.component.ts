import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
})
export class MissionDetailsComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
