import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'company',
    loadChildren: () => import('src/app/company/companie.module').then(m => m.CompanyModule)
  },
  {
    path: 'consultant',
    loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
