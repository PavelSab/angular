import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SharedModules} from './modules/shared/shared.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule )
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
