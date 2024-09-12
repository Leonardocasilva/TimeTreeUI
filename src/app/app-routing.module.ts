import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'company',
    loadChildren: () => import('src/app/pages/companie/companie.module').then(m => m.CompanieModule)
  },
  {
    path: 'collaborator',
    loadChildren: () => import('src/app/pages/user/user.module').then(m => m.UserModule)
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
