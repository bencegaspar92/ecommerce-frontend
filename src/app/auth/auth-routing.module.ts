import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
