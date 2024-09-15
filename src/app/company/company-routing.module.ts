import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { SettingsComponent } from './settings/settings.component';
import { CompanyDataComponent } from './company-data/company-data.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'company-data', component: CompanyDataComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
