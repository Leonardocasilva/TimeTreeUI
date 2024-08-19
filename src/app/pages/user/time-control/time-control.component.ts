import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.scss']
})
export class TimeControlComponent {
  isModalVisible = false;
  selectedDate: Date | null = null;
  timeTrackingForm!: FormGroup;

  onDateSelect(date: Date): void {
    debugger
    this.selectedDate = date;
    this.isModalVisible = true;
  }
}
