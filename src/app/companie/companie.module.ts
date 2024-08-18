import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanieComponent } from './companie.component';
import { CompaniehRoutingModule } from './companie-routing.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    CompanieComponent
  ],
  imports: [
    CommonModule,
    CompaniehRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class CompanieModule { }
