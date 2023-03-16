import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {FormControlUtil} from "../../../utility/form-control-util";

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent  extends FormControlUtil implements OnInit{
 @Input()
  formTitle = "Form"

  @Input()
  resource = {} as Resource

  @ViewChild('InputForm')
  inputForm!: NgForm;
constructor(private resourceService:ResourceService) {
  super();
}

  addResource() {
    if (this.isFormValid(this.inputForm)) {
      this.resourceService.addResource(this.resource).subscribe(
        (compileResults) => {
          console.log(compileResults);
        }
        , error => {
          console.log(error)
        });
    }
  }

  ngOnInit(): void {
  this.resource.description='hbhahagvgacgacgaccag';
  }

}

