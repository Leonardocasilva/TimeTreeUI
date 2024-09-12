import { TtMainLayoutModule } from './../../components/tt-main-layout/tt-main-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanieComponent } from './companie.component';
import { CompaniehRoutingModule } from './companie-routing.module';

@NgModule({
  declarations: [
    CompanieComponent
  ],
  imports: [
    CommonModule,
    CompaniehRoutingModule,
    TtMainLayoutModule,
  ]
})
export class CompanieModule { }
