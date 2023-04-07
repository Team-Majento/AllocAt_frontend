import {Component, OnInit, Output} from '@angular/core';
import {ResourceService} from "../../service/resource.service";
import {Resource} from "../../../models/resource";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {CompanyService} from "../../service/company.service";


@Component({
  selector: 'app-view-resource-list',
  templateUrl: './view-resource-list.component.html',
  styleUrls: ['./view-resource-list.component.scss']
})
export class ViewResourceListComponent implements OnInit {
  @Output()
  resourceList: any = []; //***
  page:number=1;
  allResources!: number;
  selectedResource!: Resource;
 companyId!: number;

  companies!: any[];
  constructor(private resourceService: ResourceService, private router: Router, private location: Location,private companyService :CompanyService) {
  }

  getAllResources() {
    this.resourceService.getAllResources(this.page).subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults['content'];
        // @ts-ignore
          this.allResources= compileResults['totalElements'];

        this.resourceList = content;
      }
      , error => {
        console.log(error)
      });

  }

  ngOnInit(): void {
    this.getAllResources();
    this.companyService.getCompanyNames().subscribe(
      companies => {
        this.companies = companies;
        //  this.resource.companyId= this.companies[0].id; // set default selection
      },
      error => console.error(error)
    );
  }

  displayResourceDetails(id: number) {
    this.resourceService.setSelectedResource(id);
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${id}`]));


  }

  goBack() {
    this.location.back();
  }

  renderPage(event: number) {
    this.page=event;
    this.getAllResources()
  }

  onCompanySelectionChange(selectedCompany: any): void {
    // Update the selected company object based on the selected company ID
    console.log("Selected company:", selectedCompany);
    this.companyId = selectedCompany;
  }


  search() {
    console.log("**"+this.companyId)
    this.resourceService.getAllFilteredResources(this.page,this.companyId).subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults['content'];
        // @ts-ignore
        this.allResources= compileResults['totalElements'];

        this.resourceList = content;
      }
      , error => {
        console.log(error)
      });
  }


}
