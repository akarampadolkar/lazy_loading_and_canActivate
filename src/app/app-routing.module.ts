import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    canActivate : [AuthGuard],
    component: DashboardComponent,    
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'lazy',    
    loadChildren:'./../app/lazy/lazy.module#LazyModule'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
