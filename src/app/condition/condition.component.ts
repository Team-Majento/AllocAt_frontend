import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../service/user.service";
import {FormControlUtil} from "../../utility/form-control-util";
import {GeneralReportGeneration} from "../../models/generalReportGeneration";
import {Condition} from "../../models/condition";



@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent extends FormControlUtil implements OnInit{
  @Input()
  condition = {} as Condition;
  constructor(private service: UserService) {
    super();

  }
  ngOnInit() {
  }

  @ViewChild('InputForm')
  inputForm!: NgForm;
  submit(InputForm: any) {
    if (this.isFormValid(this.inputForm)) {

    }

  }


}
