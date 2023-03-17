import {Component, OnInit} from '@angular/core';
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";

@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent implements OnInit{
  selectedResourceId!: number | null;
  selectedResource!:Resource;

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    // Subscribe to the selected resource using the ResourceService
    this.resourceService.selectedResource$.subscribe((resourceId) => {
      this.selectedResourceId = resourceId;
      this.resourceService.getResourceById(<number>resourceId).subscribe(
        (resource) => {
          console.log(resource);
          this.selectedResource=<Resource>resource;
        }
        ,(error) => {
          console.log(error)
        });
    });
  }

}
