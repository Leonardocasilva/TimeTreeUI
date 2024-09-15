import { ReceitaFederalService } from './../../assets/services/receita-federal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CompanyComponent } from './company.component';
import { SettingsComponent } from './settings/settings.component';
import { CompanyDataComponent } from './company-data/company-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyComponent,
    SettingsComponent,
    CompanyDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompanyRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule
  ],
  providers: [
    ReceitaFederalService
  ]
})
export class CompanyModule { }
