import { TtMainLayoutModule } from './../../components/tt-main-layout/tt-main-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { TimeControlComponent } from './time-control/time-control.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [
    UserComponent,
    TimeControlComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TtMainLayoutModule,
    ReactiveFormsModule,
    NzCalendarModule,
    NzModalModule,
    NzTimePickerModule,
    NzDatePickerModule
  ]
})
export class UserModule { }
