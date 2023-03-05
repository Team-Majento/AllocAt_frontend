import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent {
 @Input()
  formTitle = "Form"
}

