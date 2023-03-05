import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component'
import{HomeComponent} from './home/home.component'
import {AddCompanyComponent} from "./company/add-company/add-company.component";
import {AddResourceComponent} from "./resource/add-resource/add-resource.component";

const routes: Routes = [
  {  path:"",component :HomeComponent },
  {  path:"login",component :LoginComponent },
  {  path:"company",component :AddCompanyComponent },
  {  path:"resource",component :AddResourceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
