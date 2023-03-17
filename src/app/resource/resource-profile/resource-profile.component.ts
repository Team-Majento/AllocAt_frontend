import {Component, OnInit} from '@angular/core';
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent {
  selectedResourceId!: number | null;
  selectedResource!: Resource;

  resourceId!: string;

  constructor(private resourceService: ResourceService, private route: ActivatedRoute) {
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

  // ngOnInit() {
  //   // Subscribe to the selected resource using the ResourceService
  //   this.resourceService.selectedResource$.subscribe((resourceId) => {
  //     this.selectedResourceId = resourceId;
  //
  //     // this.resourceService.getResourceById(<number>resourceId).subscribe(
  //     //   (resource) => {
  //     //     console.log(resource);
  //     //     this.selectedResource=<Resource>resource;
  //     //   }
  //     //   ,(error) => {
  //     //     console.log(error)
  //     //   });
  //   });
  // }

}
