import {Component} from '@angular/core';
import {Company} from "../../../models/company";
import {CompanyService} from "../../service/company.service";
import {ActivatedRoute} from "@angular/router";
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent {

  selectedCompany!: Company;

  companyId!: string;


  constructor(private companyService: CompanyService, private route: ActivatedRoute) {
    route.params.subscribe(companyId => {
      this.companyId = companyId["companyId"];
      console.log(this.companyId)
      if (this.companyId == null) {

      } else {
        this.companyService.getCompanyById(this.companyId).subscribe(
          (company) => {
            console.log(company);
            this.selectedCompany = <Company>company;
          }
          , (error) => {
            console.log(error)
          });
      }
    })

  }

}
