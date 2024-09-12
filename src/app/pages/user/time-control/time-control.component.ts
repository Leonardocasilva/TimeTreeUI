import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.scss']
})
export class TimeControlComponent {
  isModalVisible = false;
  timeTrackingForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.timeTrackingForm = this.fb.group({
      selectedDate: [null, [Validators.required]],
      startJourney: [null, [Validators.required]],
      startInterval: [null, [Validators.required]],
      endInterval: [null, [Validators.required]],
      endJourney: [null, [Validators.required]],
      description: [null, []]
    });
  }

  onDateSelect(date: Date): void {
    this.timeTrackingForm.patchValue({
      selectedDate: date
    });

    this.timeTrackingForm.get('selectedDate')?.disable();

    this.isModalVisible = true;
  }

  handleOk(): void {
    debugger
    if (this.timeTrackingForm.valid) {
      this.timeTrackingForm.patchValue({
        startJourney: this.dateCombine(this.timeTrackingForm.get('selectedDate')?.value),
        startInterval: this.dateCombine(this.timeTrackingForm.get('startInterval')?.value),
        endInterval: this.dateCombine(this.timeTrackingForm.get('endInterval')?.value),
        endJourney: this.dateCombine(this.timeTrackingForm.get('endJourney')?.value),
      });

      const formData = this.timeTrackingForm.value;

      console.log('Apontamento de horas:', formData);
      // Aqui você pode adicionar a lógica para salvar o apontamento de horas
      this.isModalVisible = false;
      this.timeTrackingForm.reset();
    }
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

  dateCombine(time: Date): Date {
    const selectedDateTime = new Date(this.timeTrackingForm.get('selectedDate')?.value);

    selectedDateTime.setHours(time.getHours());
    selectedDateTime.setMinutes(time.getMinutes());

    return selectedDateTime;
  }
}
