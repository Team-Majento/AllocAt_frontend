import {Component, OnInit} from '@angular/core';
import {Company} from "../../../models/company";
import {CompanyService} from "../../service/company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit
{

  selectedCompany!: Company;

  CompanyId!: string;


  constructor(private companyService: CompanyService, private route: ActivatedRoute) {
    route.params.subscribe(companyId => {
      // @ts-ignore
      this.CompanyId = companyId["companyId"];
      console.log(this.CompanyId)
      if (this.CompanyId == null) {

      } else {
        this.companyService.getCompanyById(this.CompanyId).subscribe(
          (company) => {
            console.log(company);
            this.selectedCompany = <Company>company;
          }
          , (error: any) => {
            console.log(error)
          });
      }
    })

  }

  ngOnInit(): void {

  }











}



