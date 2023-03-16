import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {AddCompanyComponent} from "./company/add-company/add-company.component";
import {AddResourceComponent} from "./resource/add-resource/add-resource.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {AddResourceRequestComponent} from "./resourceRequest/add-resource-request/add-resource-request.component";
import {LayoutComponent} from "./layout/layout.component";
import {AddMenuComponent} from "./menu/add-menu/add-menu.component";
import {DashboardMenuComponent} from "./menu/dashboard-menu/dashboard-menu.component";
import {ViewMenuComponent} from "./menu/view-menu/view-menu.component";
import {ReportMenuComponent} from "./menu/report-menu/report-menu.component";
import {ViewCompanyListComponent} from "./company/view-company-list/view-company-list.component";
import {ViewResourceListComponent} from "./resource/view-resource-list/view-resource-list.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {UpdateUserComponent} from "./user/update-user/update-user.component";

const routes: Routes = [
  {  path:"",component :HomeComponent },
  {path: "login", component: LoginComponent},

  {
    path: "dashboard",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: DashboardMenuComponent
      },
      {
        path: "add",
        children: [
          {
            path: "",
            component: AddMenuComponent,  //--addComponent
          },
          {
            path: "company",
            component: AddCompanyComponent,
          },
          {
            path: "resource",
            component: AddResourceComponent,
          },
          {
            path: "user",
            component: AddUserComponent,
          },
        ]
      },
      {
        path: "view",
        children: [
          {
            path: "",
            component: ViewMenuComponent,
          },
          {
            path: "companies",
            component: ViewCompanyListComponent,
          },
          {
            path: "resources",
            component: ViewResourceListComponent,
          },
        ]
      },

      {
        path: "reports",
        children: [
          {
            path: "",
            component: ReportMenuComponent,
          },
          {
            path: "company",
            component: AddCompanyComponent,
          },
        ]
      },


      {path: "user-profile", component: UserProfileComponent},


      {path: "update-user", component:  UpdateUserComponent},







      {
        path: "resource",
        component: AddResourceComponent
      }

    ]
  },


  {path: "company", component: AddCompanyComponent},
  {path: "resource", component: AddResourceComponent},
  {path: "user", component: AddUserComponent},
  {path: "resource-request", component: AddResourceRequestComponent},
  //{  path:"lay",component :LayoutComponent},

 // {path: "lay", component: LayoutComponent, children: [{path: "company", component: AddCompanyComponent}]},
  //{path: "lay", component: LayoutComponent, children: [{path: "resource", component: AddResourceComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
