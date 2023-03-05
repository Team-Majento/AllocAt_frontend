import { Component } from '@angular/core';
import {Resource} from "../../../models/resource";

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent {
  resource= {} as Resource

}
