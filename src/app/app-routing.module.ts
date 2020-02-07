import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ConfirmRegistrationComponent } from './auth/components/confirm-registration/confirm-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './auth/components/admin-login/admin-login.component';
import { LogoutComponent } from './auth/components/logout/logout.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { UnScheduleComponent } from './un-schedule/un-schedule.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: IndexComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm-registration', component: ConfirmRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'user-dashboard', canActivate: [AuthGuard], component: UserDashboardComponent },
  { path: 'un-schedule', canActivate: [AuthGuard], component: UnScheduleComponent },
  { path: 'admin-dashboard', canActivate: [AuthGuard], component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
