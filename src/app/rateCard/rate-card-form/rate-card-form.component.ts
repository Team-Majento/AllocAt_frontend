import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-rate-card-form',
  templateUrl: './rate-card-form.component.html',
  styleUrls: ['./rate-card-form.component.scss']
})
export class RateCardFormComponent {
  @ViewChild('InputForm')
  inputForm!: NgForm;

  submit(InputForm: NgForm) {

  }
}
