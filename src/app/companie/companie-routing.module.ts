import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanieComponent } from './companie.component';

const routes: Routes = [
  {
    path: '',
    component: CompanieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniehRoutingModule { }
