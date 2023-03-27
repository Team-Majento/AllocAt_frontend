import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  CompanyWiseReportComponent
} from "../../reportGeneration/company-wise-report/company-wise-report.component";
import {GeneralReportComponent} from "../../reportGeneration/general-report/general-report.component";

@Component({
  selector: 'app-report-menu',
  templateUrl: './report-menu.component.html',
  styleUrls: ['./report-menu.component.scss']
})
export class ReportMenuComponent {

  constructor(private dialogRef:MatDialog) {
  }
  openCompanyWiseReport() {
       this.dialogRef.open(CompanyWiseReportComponent);
  }
  openGeneralReport() {
    this.dialogRef.open(GeneralReportComponent);
  }


}
