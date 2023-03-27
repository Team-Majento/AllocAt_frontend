import {Component, Input, ViewChild} from '@angular/core';
import {BookingRequest} from "../../../models/bookingRequest";
import {CompanyWiseReportGeneration} from "../../../models/companyWiseReportGeneration";
import {NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-company-wise-report',
  templateUrl: './company-wise-report.component.html',
  styleUrls: ['./company-wise-report.component.scss']
})
export class CompanyWiseReportComponent {

  @Input()
  companyWiseReportGeneration = {} as CompanyWiseReportGeneration;

  @ViewChild('InputForm')
  inputForm!: NgForm;

 constructor() {
 }
  updateFromDate() {
    const datePipe = new DatePipe('en-US');
    this.companyWiseReportGeneration.fromDate = <string>datePipe.transform(this.companyWiseReportGeneration.fromDate, 'yyyy-MM-dd');
  }
  updateToDate() {
    const datePipe = new DatePipe('en-US');
    this.companyWiseReportGeneration.toDate = <string>datePipe.transform(this.companyWiseReportGeneration.toDate, 'yyyy-MM-dd');
  }


  generateReport() {

  }
}
