import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminCanActivateGuardService } from './service/admin-can-activate-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { NewUserComponent } from './user-management/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserManagementComponent,
    EventManagementComponent,
    UserViewComponent,
    EditUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AdminCanActivateGuardService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
