import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SubSink} from "subsink";
import {BookingRequest} from "../../../models/bookingRequest";
import {BookingRequestService} from "../../service/booking-request.service";

@Component({
  selector: 'app-booking-request-form',
  templateUrl: './booking-request-form.component.html',
  styleUrls: ['./booking-request-form.component.scss']
})
export class BookingRequestFormComponent {

  @Input()
  formTitle = "Form";

  @Input()
  bookingRequest = {} as BookingRequest



  @ViewChild('InputForm')
  inputForm!: NgForm;

  private subSink=new SubSink();

  constructor(private bookingReqService:BookingRequestService) {
    this.bookingRequest.requiredDate =new Date();
  }

  addBookingRequest() {

  }


}
