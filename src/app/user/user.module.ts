import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { TimeControlComponent } from './time-control/time-control.component';



@NgModule({
  declarations: [
    UserComponent,
    TimeControlComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class UserModule { }
