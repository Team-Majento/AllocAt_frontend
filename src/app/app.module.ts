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
import { ReviewRatingFormComponent } from './review-rating/review-rating-form/review-rating-form.component';
import {MatIconModule} from "@angular/material/icon";
import {ChangePasswordComponent} from "./user/change-password/change-password.component";
import { BookingRequestFormComponent } from './bookingRequest/booking-request-form/booking-request-form.component';
import { AddBookingRequestComponent } from './bookingRequest/add-booking-request/add-booking-request.component';
import { UpdateBookingRequestComponent } from './bookingRequest/update-booking-request/update-booking-request.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
 import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewBookingRequestListComponent } from './bookingRequest/view-booking-request-list/view-booking-request-list.component';
import { AcceptRejectBookingRequestComponent } from './resourceAllocation/accept-reject-booking-request/accept-reject-booking-request.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { RateCardFormComponent } from './rateCard/rate-card-form/rate-card-form.component';
import { UpdateRateCardComponent } from './rateCard/update-rate-card/update-rate-card.component';
import { AddRateCardardComponent } from './rateCard/add-rate-cardard/add-rate-cardard.component';
import { CompanyWiseReportComponent } from './reportGeneration/company-wise-report/company-wise-report.component';
import { GeneralReportComponent } from './reportGeneration/general-report/general-report.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ResourceSchedulerComponent } from './resource/resource-scheduler/resource-scheduler.component';
import { SelectBookingsComponent } from './bookingRequest/select-bookings/select-bookings.component';

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
    ResourceProfileComponent,
    ReviewRatingFormComponent,
    ChangePasswordComponent,
    BookingRequestFormComponent,
    AddBookingRequestComponent,
    UpdateBookingRequestComponent,
    ViewBookingRequestListComponent,
    AcceptRejectBookingRequestComponent,
    CompanyProfileComponent,
    RateCardFormComponent,
    UpdateRateCardComponent,
    AddRateCardardComponent,
    CompanyWiseReportComponent,
    GeneralReportComponent,
    ResourceSchedulerComponent,
    SelectBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FontAwesomeModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    NgxMatTimepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
