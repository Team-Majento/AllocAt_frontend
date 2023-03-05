import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component'
import{HomeComponent} from './home/home.component'
import {AddCompanyComponent} from "./company/add-company/add-company.component";
import {AddResourceComponent} from "./resource/add-resource/add-resource.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {AddResourceRequestComponent} from "./resourceRequest/add-resource-request/add-resource-request.component";

const routes: Routes = [
  {  path:"",component :HomeComponent },
  {  path:"login",component :LoginComponent },
  {  path:"company",component :AddCompanyComponent },
  {  path:"resource",component :AddResourceComponent },
  {  path:"user",component :AddUserComponent },
  {  path:"resource-request",component :AddResourceRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
