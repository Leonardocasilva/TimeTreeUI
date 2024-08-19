import { TtMainLayoutModule } from './../../components/tt-main-layout/tt-main-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { TimeControlComponent } from './time-control/time-control.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';


@NgModule({
  declarations: [
    UserComponent,
    TimeControlComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TtMainLayoutModule,
    NzCalendarModule
  ]
})
export class UserModule { }
