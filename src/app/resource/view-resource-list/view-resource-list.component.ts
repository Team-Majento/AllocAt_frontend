import {Component, OnInit, Output} from '@angular/core';
import {ResourceService} from "../../service/resource.service";


@Component({
  selector: 'app-view-resource-list',
  templateUrl: './view-resource-list.component.html',
  styleUrls: ['./view-resource-list.component.scss']
})
export class ViewResourceListComponent implements OnInit {
  @Output()
  resourceList:any={};
  constructor(private resourceService:ResourceService) {
  }

  getAllResources() {
      this.resourceService.getAllResources().subscribe(
        (compileResults) => {
          // @ts-ignore
          const content = compileResults['content'];
          console.log(content);
          this.resourceList=content;
        }
        , error => {
          console.log(error)
        });

  }

  ngOnInit(): void {
    this.getAllResources();
  }


}
