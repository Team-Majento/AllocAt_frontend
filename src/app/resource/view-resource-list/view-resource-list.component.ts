import {Component, OnInit, Output} from '@angular/core';
import {ResourceService} from "../../service/resource.service";
import {Resource} from "../../../models/resource";
import {Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-view-resource-list',
  templateUrl: './view-resource-list.component.html',
  styleUrls: ['./view-resource-list.component.scss']
})
export class ViewResourceListComponent implements OnInit {
  @Output()
  resourceList: any = []; //***
  page:number=0;
  allResources!: number;
  selectedResource!: Resource;


  constructor(private resourceService: ResourceService, private router: Router, private location: Location) {
  }

  getAllResources(page:number) {
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
    this.getAllResources(0);
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
    this.getAllResources(this.page)
  }


}
