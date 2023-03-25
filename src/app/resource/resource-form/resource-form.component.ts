import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {CompanyService} from "../../service/company.service";


@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent  extends FormControlUtil implements OnInit{
 @Input()
  formTitle = "Form"

  @Input()
  resource = {} as Resource

  @ViewChild('InputForm')
  inputForm!: NgForm;

  companies!: any[];

constructor(private resourceService:ResourceService,private companyService: CompanyService) {
  super();
}

  addResource() {
    if (this.isFormValid(this.inputForm)) {
      this.resourceService.addResource(this.resource).subscribe(
        (compileResults) => {
          console.log(compileResults);
        }
        , error => {
          console.log(error)
        });
    }
  }

  ngOnInit(): void {
    this.companyService.getCompanyNames().subscribe(

      companies => {
        this.companies = companies;
        this.resource.companyId= this.companies[0].id; // set default selection
      },
      error => console.error(error)
    );
  }


  onCompanySelectionChange(selectedCompany: any): void {
    // Update the selected company object based on the selected company ID
    console.log("Selected company:", selectedCompany);
    this.resource.companyId=selectedCompany;
}

}

