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
    AddResourceComponent
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
