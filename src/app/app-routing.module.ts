import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {AddCompanyComponent} from "./company/add-company/add-company.component";
import {AddResourceComponent} from "./resource/add-resource/add-resource.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {LayoutComponent} from "./layout/layout.component";
import {AddMenuComponent} from "./menu/add-menu/add-menu.component";
import {DashboardMenuComponent} from "./menu/dashboard-menu/dashboard-menu.component";
import {ViewMenuComponent} from "./menu/view-menu/view-menu.component";
import {ReportMenuComponent} from "./menu/report-menu/report-menu.component";
import {ViewCompanyListComponent} from "./company/view-company-list/view-company-list.component";
import {ViewResourceListComponent} from "./resource/view-resource-list/view-resource-list.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {UpdateUserComponent} from "./user/update-user/update-user.component";
import {ResourceProfileComponent} from "./resource/resource-profile/resource-profile.component";
import {ReviewRatingFormComponent} from "./review-rating/review-rating-form/review-rating-form.component";
import {AddBookingRequestComponent} from "./bookingRequest/add-booking-request/add-booking-request.component";
import {UpdateResourceComponent} from "./resource/update-resource/update-resource.component";
import {
  ViewBookingRequestListComponent
} from "./bookingRequest/view-booking-request-list/view-booking-request-list.component";
import {
  AcceptRejectBookingRequestComponent
} from "./resourceAllocation/accept-reject-booking-request/accept-reject-booking-request.component";
import {CompanyProfileComponent} from "./company/company-profile/company-profile.component";
import {UpdateCompanyComponent} from "./company/update-company/update-company.component";
import {ResourceSchedulerComponent} from "./resource/resource-scheduler/resource-scheduler.component";
import {SelectBookingsComponent} from "./bookingRequest/select-bookings/select-bookings.component";
import {RoleFormComponent} from "./role/role-form/role-form.component";
import {EmpDashboardComponent} from "./menu/emp-dashboard/emp-dashboard.component";
import {RmDashboardComponent} from "./menu/rm-dashboard/rm-dashboard.component";
import {UpdateBookingRequestComponent} from "./bookingRequest/update-booking-request/update-booking-request.component";


const routes: Routes = [
  {  path:"",component :HomeComponent },
  {path: "login", component: LoginComponent},
  {
    path: "dashboard",
    component: LayoutComponent,
    children: [
      {
        path: "main",
        children: [
          {
            path: "admin",
            component: DashboardMenuComponent,
          },
          {
            path: "resource-manager",
            component: RmDashboardComponent,
          },
          {
            path: "employee",
            component: EmpDashboardComponent,
          }
      ]


      },
      {
        path: "add",
        children: [
          {
            path: "",
            component: AddMenuComponent,
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
          {
            path:"role",
            component: RoleFormComponent,
          }
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
            path: "booking-requests",
            children:[
              {
                path:"",
                component:SelectBookingsComponent ,
              },
              {
                path:"myBookings",
                component:ViewBookingRequestListComponent,
              },
              {
                path:"myBookings/update",
                component:UpdateBookingRequestComponent,
              },
              {
                path:"mySubBookings",
                component:ViewBookingRequestListComponent,
              },

            ]

          },
          {
            path: "companies",
            children:[
              {
                path:"",
              component: ViewCompanyListComponent,
              },
              {
                path:":companyId",
                component:CompanyProfileComponent,
              },
              {
                path: ":companyId/update",
                component:UpdateCompanyComponent,
              }
            ],

          },
          {
            path: "resources",
            children:[
              {
                path:"",
                component: ViewResourceListComponent,
              },
              {
                path: ":resourceId",
                component: ResourceProfileComponent,
              },
              {
                path: ":resourceId/booking-request",
                component: AddBookingRequestComponent,
              },
              {
                path: ":resourceId/update",
                component:UpdateResourceComponent,
              },
              {
                path: ":resourceId/view-booking-schedule",
                component:ResourceSchedulerComponent,
              },

            ]

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

      {
        path: "review-rating",
        component:ReviewRatingFormComponent,
      },


      {path: "user-profile", component: UserProfileComponent},

      {path: "accept-reject-booking-request", component: AcceptRejectBookingRequestComponent},

      {path: "update-user", component:  UpdateUserComponent},


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
