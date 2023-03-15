import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from "../../service/company.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {NgForm} from "@angular/forms";
import {SubSink} from "subsink";
import {DisplayMessageService} from "../../service/display-message.service";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent extends FormControlUtil implements OnInit,OnDestroy {
  @Input()
  formTitle = "Form"
  @Input()
  company = {} as Company
  @ViewChild('InputForm')
  inputForm!: NgForm;

  private subSink=new SubSink();

  constructor(private companyService: CompanyService,private messageService:DisplayMessageService) {
    super();
  }

  ngOnInit(): void {

  }

  addCompany() {
    if (this.isFormValid(this.inputForm)) {
      this.subSink.add(
      this.companyService.addCompany(this.company).subscribe(
        (compileResults) => {
          console.log(compileResults);
         this.messageService.showSucessMessage("Company Added-Sucess");
        }
      , error => {
        console.log("error--",error);
          this.messageService.showErrorMessage("error");
      }),
    );
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
