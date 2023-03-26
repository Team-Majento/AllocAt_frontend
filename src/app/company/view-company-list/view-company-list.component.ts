import {Component, Output} from '@angular/core';
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {Router} from "@angular/router";
import {Company} from "../../../models/company";
import {CompanyService} from "../../service/company.service";

@Component({
  selector: 'app-view-company-list',
  templateUrl: './view-company-list.component.html',
  styleUrls: ['./view-company-list.component.scss']
})
export class ViewCompanyListComponent {
  @Output()
  companyList:any=[]; //***

  selectedCompany!:Company;
  constructor(private companyService:CompanyService,private router:Router) {
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


  // displayResourceDetails(id:number) {
  //   // this.resourceService.getResourceById(id).subscribe(
  //   //   (resource) => {
  //   //     console.log(resource);
  //   //     this.selectedResource=<Resource>resource;
  //   //   }
  //   //   ,(error) => {
  //   //     console.log(error)
  //   //   });
  //   this.resourceService.setSelectedResource(id);
  //   this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${id}`]));
  //
  //
  // }
  displayCompanyDetails(id:number) {
    this.companyService.setSelectedCompany(id);
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/companies/${id}`]));

  }
}


