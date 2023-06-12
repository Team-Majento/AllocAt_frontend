import {Component, Input, ViewChild} from '@angular/core';
import {CompanyWiseReportGeneration} from "../../../models/companyWiseReportGeneration";
import {NgForm} from "@angular/forms";
import {GenerateReportService} from "../../service/generate-report.service";
import {DatePipe} from "@angular/common";
import {GeneralReportGeneration} from "../../../models/generalReportGeneration";
import {MatDialog} from "@angular/material/dialog";
import {DisplayMessageService} from "../../service/display-message.service";

@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.scss']
})
export class GeneralReportComponent {

  @Input()
  formTitle = "Form";
  @Input()
  generalReportGeneration = {} as GeneralReportGeneration;

  @ViewChild('InputForm')
  inputForm!: NgForm;

  constructor(private generateReportService: GenerateReportService,private dialogRef: MatDialog,private messageService:DisplayMessageService) {
  }

  updateFromDate() {
    const datePipe = new DatePipe('en-US');
    this.generalReportGeneration.fromDate = <string>datePipe.transform(this.generalReportGeneration.fromDate, 'yyyy-MM-dd');
  }

  updateToDate() {
    const datePipe = new DatePipe('en-US');
    this.generalReportGeneration.toDate = <string>datePipe.transform(this.generalReportGeneration.toDate, 'yyyy-MM-dd');
  }


  generateReport() {
    this.generateReportService.generateGeneralReport(this.generalReportGeneration.fromDate, this.generalReportGeneration.toDate)
      .subscribe((compileResults) => {
        console.log(compileResults);
      }, error => {
        console.log(error)
      });
    this.inputForm.resetForm();
    this.dialogRef.closeAll();
    this.messageService.showSucessMessage("Report Generated Successfully");


  }

}
