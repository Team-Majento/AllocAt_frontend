import {Component, OnInit} from '@angular/core';
import {Resource} from "../../../models/resource";

@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent implements OnInit{
  selectedResource!:Resource;
  ngOnInit(): void {

  }

}
