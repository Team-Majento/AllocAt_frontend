import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../service/user.service";
import {FormControlUtil} from "../../utility/form-control-util";
import {GeneralReportGeneration} from "../../models/generalReportGeneration";
import {Condition} from "../../models/Condition";
import {ConditionService} from "../service/condition.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {DisplayMessageService} from "../service/display-message.service";



@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent extends FormControlUtil implements OnInit{
  @Input()
  condition = {} as Condition;
  constructor(private service: UserService,private conditionService:ConditionService,private dialogRef: MatDialog,private messageService:DisplayMessageService) {
    super();

  }
  ngOnInit() {
  }

  @ViewChild('InputForm')
  inputForm!: NgForm;
  submit(InputForm: any) {
    const result = window.confirm('Are you sure you want to add this condition?');

    if (result){
      if (this.isFormValid(InputForm)) {
        this.conditionService.addCondition(this.condition).subscribe(
          (compileResults) => {
            console.log(compileResults);
          }
          , error => {
            console.log(error)
          });;
        this.inputForm.resetForm();
        this.dialogRef.closeAll();
        this.messageService.showSucessMessage("The condition has been successfully added");
      }
    }

  }

  updateDate() {
    const datePipe = new DatePipe('en-US');
    this.condition.date = <string>datePipe.transform(this.condition.date, 'yyyy-MM-dd');
  }

}

