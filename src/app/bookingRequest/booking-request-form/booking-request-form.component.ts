import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-booking-request-form',
  templateUrl: './booking-request-form.component.html',
  styleUrls: ['./booking-request-form.component.scss']
})
export class BookingRequestFormComponent {
  @Input()
  formTitle = "Form"
}
