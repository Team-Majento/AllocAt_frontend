import {Component} from '@angular/core';
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent {
  selectedResource!: Resource;

  resourceId!: string;

  constructor(private resourceService: ResourceService, private route: ActivatedRoute,private router:Router,private location:Location) {
    route.params.subscribe(resourceId => {
      this.resourceId = resourceId["resourceId"];
      console.log(this.resourceId)
      if (this.resourceId == null) {

      } else {
        this.resourceService.getResourceById(this.resourceId).subscribe(
          (resource) => {
            console.log(resource);
            this.selectedResource = <Resource>resource;
          }
          , (error) => {
            console.log(error)
          });
      }
    })

  }


  addRequest() {
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${this.resourceId}/booking-request`]))
  }

  updateResource() {
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${this.resourceId}/update`]))
  }

  goBack() {
    this.location.back();
  }
}
