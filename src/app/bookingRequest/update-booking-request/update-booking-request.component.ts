import {Component, OnInit} from '@angular/core';
import {Resource} from "../../../models/resource";
import {BookingRequest} from "../../../models/bookingRequest";
import {ActivatedRoute} from "@angular/router";
import {BookingRequestService} from "../../service/booking-request.service";

@Component({
  selector: 'app-update-booking-request',
  templateUrl: './update-booking-request.component.html',
  styleUrls: ['./update-booking-request.component.scss']
})
export class UpdateBookingRequestComponent {
  selectedBooking!: BookingRequest;
  reqId!: string;
  bookingId!: string;


  constructor(private bookingrequestService: BookingRequestService, private route: ActivatedRoute) {
    route.params.subscribe(reqId => {
      this.reqId = reqId["reqId"];
      console.log("+**************"+this.reqId)
      if (this.reqId == null) {

      } else {

        this.bookingrequestService.getBookingRequestById(this.reqId).subscribe(
          (results) => {
            console.log("top");

            console.log(results);
            console.log("bottom");

            this.selectedBooking = <BookingRequest>results;
          }
          , (error) => {
            console.log(error)
          });
      }
    })


  }



}

