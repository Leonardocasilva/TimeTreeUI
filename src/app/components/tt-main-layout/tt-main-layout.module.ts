import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TtMainLayoutComponent } from './tt-main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TtMainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  exports: [
    TtMainLayoutComponent
  ]
})
export class TtMainLayoutModule { }
