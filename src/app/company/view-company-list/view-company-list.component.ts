import {Component, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Company} from "../../../models/company";
import {CompanyService} from "../../service/company.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-company-list',
  templateUrl: './view-company-list.component.html',
  styleUrls: ['./view-company-list.component.scss']
})
export class ViewCompanyListComponent {
  @Output()
  companyList:any=[]; //***

  selectedCompany!:Company;
  constructor(private companyService:CompanyService,private router:Router,private location:Location) {
  }

  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      (compileResults) => {


        // @ts-ignore
        const content = compileResults;
        console.log(content);
        this.companyList=content;
      }
      , error => {
        console.log(error)
      });

  }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  displayCompanyDetails(id:number) {
    this.companyService.setSelectedCompany(id);
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/companies/${id}`]));

  }

  goBack() {
    this.location.back();
  }
}


