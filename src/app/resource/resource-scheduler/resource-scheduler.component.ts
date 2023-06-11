import { Component } from '@angular/core';
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute} from "@angular/router";
import {ResourceAllocation} from "../../../models/resourceAllocation";

@Component({
  selector: 'app-resource-scheduler',
  templateUrl: './resource-scheduler.component.html',
  styleUrls: ['./resource-scheduler.component.scss']
})
export class ResourceSchedulerComponent {
  resourceId!: string;

  resourceWiseAllocationList: ResourceAllocation[] = [];
  constructor(private resourceService: ResourceService,private route: ActivatedRoute) {
    route.params.subscribe(resourceId => {
      this.resourceId = resourceId["resourceId"];
    });

    this.getAllAllocationsByResourceId();
  }



  getAllAllocationsByResourceId() {
    this.resourceService.getAllAllocationsByResourceId(this.resourceId) .subscribe(
      response => {
        this.resourceWiseAllocationList=response;
        //this.companies = companies;
        //  this.resource.companyId= this.companies[0].id; // set default selection
      },
      error => console.error(error)
    );
  }


}
