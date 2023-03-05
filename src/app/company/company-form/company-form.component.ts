import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from "../../service/company.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent extends FormControlUtil implements OnInit {
  @Input()
  formTitle = "Form"
  @Input()
  company = {} as Company
  @ViewChild('InputForm')
  inputForm!: NgForm;

  constructor(private companyService: CompanyService) {
    super();
  }

  ngOnInit(): void {

  }

  addCompany() {
    if (this.isFormValid(this.inputForm)) {
      this.companyService.addCompany(this.company).subscribe(
        (compileResults) => {
          console.log(compileResults);
        }
      , error => {
        console.log(error)
      });
    }
  }

}
