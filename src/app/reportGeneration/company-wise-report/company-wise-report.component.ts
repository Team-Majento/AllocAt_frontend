import {Component, Input, ViewChild} from '@angular/core';
import {CompanyWiseReportGeneration} from "../../../models/companyWiseReportGeneration";
import {NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {GenerateReportService} from "../../service/generate-report.service";

@Component({
  selector: 'app-company-wise-report',
  templateUrl: './company-wise-report.component.html',
  styleUrls: ['./company-wise-report.component.scss']
})
export class CompanyWiseReportComponent {
  @Input()
  formTitle = "Form";
  @Input()
  companyWiseReportGeneration = {} as CompanyWiseReportGeneration;

  @ViewChild('InputForm')
  inputForm!: NgForm;

  constructor(private generateReportService: GenerateReportService) {
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
    this.generateReportService.generateCompanyWiseReport(this.companyWiseReportGeneration.companyId, this.companyWiseReportGeneration.fromDate, this.companyWiseReportGeneration.toDate)
      .subscribe((compileResults) => {
        console.log(compileResults);
      }, error => {
        console.log(error)
      });

  }
}
