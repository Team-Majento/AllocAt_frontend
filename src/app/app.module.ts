import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { ResourceFormComponent } from './resource/resource-form/resource-form.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import {HttpClientModule} from "@angular/common/http";
import { AddResourceComponent } from './resource/add-resource/add-resource.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { ResourceRequestFormComponent } from './resourceRequest/resource-request-form/resource-request-form.component';
import { AddResourceRequestComponent } from './resourceRequest/add-resource-request/add-resource-request.component';
import { UpdateResourceRequestComponent } from './resourceRequest/update-resource-request/update-resource-request.component';
import { UpdateResourceComponent } from './resource/update-resource/update-resource.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DisplayMessageComponent } from './message/display-message/display-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { DashboardMenuComponent } from './menu/dashboard-menu/dashboard-menu.component';
import { ViewMenuComponent } from './menu/view-menu/view-menu.component';
import { ReportMenuComponent } from './menu/report-menu/report-menu.component';
import { ViewCompanyListComponent } from './company/view-company-list/view-company-list.component';
import { ViewResourceListComponent } from './resource/view-resource-list/view-resource-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ResourceProfileComponent } from './resource/resource-profile/resource-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent,
    CompanyFormComponent,
    ResourceFormComponent,
    AddCompanyComponent,
    AddResourceComponent,
    UpdateCompanyComponent,
    ResourceRequestFormComponent,
    AddResourceRequestComponent,
    UpdateResourceRequestComponent,
    UpdateResourceComponent,
    UserFormComponent,
    AddUserComponent,
    UpdateUserComponent,
    MessageComponent,
    DisplayMessageComponent,
    AddMenuComponent,
    DashboardMenuComponent,
    ViewMenuComponent,
    ReportMenuComponent,
    ViewCompanyListComponent,
    ViewResourceListComponent,
    UserProfileComponent,
    ResourceProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatDialogModule,
      FontAwesomeModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
