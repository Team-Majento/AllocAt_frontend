import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-booking-request-form',
  templateUrl: './booking-request-form.component.html',
  styleUrls: ['./booking-request-form.component.scss']
})
export class BookingRequestFormComponent {
  @Input()
  formTitle = "Form";
  minDate = new Date();
  myTimePicker1:String ="";
  myTimePicker2:String ="";
  userid="";
  resourceid="";
  //selectedTime: any;
  selectedTimeStart: any;
  selectedTimeEnd: any;
}
