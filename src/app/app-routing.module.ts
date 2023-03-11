import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component'
import{HomeComponent} from './home/home.component'
import {AddCompanyComponent} from "./company/add-company/add-company.component";
import {AddResourceComponent} from "./resource/add-resource/add-resource.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {AddResourceRequestComponent} from "./resourceRequest/add-resource-request/add-resource-request.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  //{  path:"",component :HomeComponent },
  {
    path:"",
    component : LayoutComponent,
    children:[
      {
        path:"",
        component :HomeComponent
      },
      {
        path:"add",
        // component :AddCompanyComponent
        children:[
          {
            path:"",
           component :AddCompanyComponent,  //--addComponent
          }  ,
          {
            path:"company",
            component :AddCompanyComponent,
          }  ,
        ]
      },
      {
        path:"resource",
        component :AddResourceComponent
      }

      ]
  },

  {path:"login",component :LoginComponent },
  {  path:"company",component :AddCompanyComponent },
  {  path:"resource",component :AddResourceComponent },
  {  path:"user",component :AddUserComponent },
  {  path:"resource-request",component :AddResourceRequestComponent},
  //{  path:"lay",component :LayoutComponent},

   {  path:"lay",component :LayoutComponent,children:[ {  path:"company",component :AddCompanyComponent }]},
  {  path:"lay",component :LayoutComponent,children:[ {  path:"resource",component :AddResourceComponent }]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
