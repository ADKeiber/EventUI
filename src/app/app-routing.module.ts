import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuardService } from './service/can-activate-guard.service';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { NewUserComponent } from './user-management/new-user/new-user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "dashboard", component: DashboardComponent,
    canActivate: [CanActivateGuardService],
    // canActivateChild: [CanActivateGuardService],
    children: [
      { path: "eventManager", component: EventManagementComponent },
      { path: "userManagement", component: UserManagementComponent },
      { path: "userView", component: UserViewComponent },
      { path: "userManagement/edit/:id", component: EditUserComponent },
      { path: "userManagement/new", component: NewUserComponent}
    ],
  },
  { path:"login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
