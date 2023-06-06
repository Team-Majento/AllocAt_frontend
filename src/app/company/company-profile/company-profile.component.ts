import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../../models/company";
import {CompanyService} from "../../service/company.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent {

  selectedCompany!: Company;

  companyId!: string;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router, private location: Location) {
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

    updateCompany() {
      this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/companies/${this.companyId}/update`]))
    }

    goBack()
    {
      this.location.back();
    }

}
