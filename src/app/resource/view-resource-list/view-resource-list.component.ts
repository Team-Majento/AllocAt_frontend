import {Component, OnInit, Output} from '@angular/core';
import {ResourceService} from "../../service/resource.service";


@Component({
  selector: 'app-view-resource-list',
  templateUrl: './view-resource-list.component.html',
  styleUrls: ['./view-resource-list.component.scss']
})
export class ViewResourceListComponent implements OnInit {
  @Output()
  resourceList: object ={}
  constructor(private resourceService:ResourceService) {
  }

  getAllResources() {
      this.resourceService.getAllResources().subscribe(
        (compileResults) => {
          console.log("*****");
          console.log(compileResults);
          this.resourceList=compileResults;
        }
        , error => {
          console.log(error)
        });

  }

  ngOnInit(): void {
    this.getAllResources();
  }


}
