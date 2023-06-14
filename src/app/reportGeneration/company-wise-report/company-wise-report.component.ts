import {Component, Input, Output, ViewChild} from '@angular/core';
import {CompanyWiseReportGeneration} from "../../../models/companyWiseReportGeneration";
import {NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {GenerateReportService} from "../../service/generate-report.service";
import {MatDialog} from "@angular/material/dialog";
import {DisplayMessageService} from "../../service/display-message.service";
import {AcceptRejectBookingRequestService} from "../../service/accept-reject-booking-request.service";
import {FormControlUtil} from "../../../utility/form-control-util";

@Component({
  selector: 'app-company-wise-report',
  templateUrl: './company-wise-report.component.html',
  styleUrls: ['./company-wise-report.component.scss']
})
export class CompanyWiseReportComponent extends FormControlUtil{
  @Output()
  companyList:any=[]; //***

  @Output()
  companyIdList:any=[];

  @Input()
  formTitle = "Form";
  @Input()
  companyWiseReportGeneration = {} as CompanyWiseReportGeneration;

  @ViewChild('InputForm')
  inputForm!: NgForm;

  constructor(private generateReportService: GenerateReportService,private dialogRef: MatDialog,private messageService:DisplayMessageService,private accept_reject_service:AcceptRejectBookingRequestService) {
    super();
  }


  ngOnInit(): void {
    this.getAllCompanyIdOfTheResourceAllocation();
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
    if (this.isFormValid(this.inputForm)) {
      this.generateReportService.generateCompanyWiseReport(this.companyWiseReportGeneration.companyId, this.companyWiseReportGeneration.fromDate, this.companyWiseReportGeneration.toDate)
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


  getAllCompanyIdOfTheResourceAllocation() {
    this.accept_reject_service.getAllCompanyIdOfTheResourceAllocation().subscribe(
      (compileResults) => {
        const content = compileResults;
        console.log(content);

        this.companyIdList = Array.from(new Set(content));

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
