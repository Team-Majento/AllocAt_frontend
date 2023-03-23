import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute} from "@angular/router";
import {Resource} from "../../../models/resource";

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.scss']
})
export class UpdateResourceComponent implements OnInit {

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

  ngOnInit(): void {


  }











}
