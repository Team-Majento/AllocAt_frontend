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
    UpdateUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
