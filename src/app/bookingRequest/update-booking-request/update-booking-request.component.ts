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
export class UpdateBookingRequestComponent
{
  selectedBooking!: BookingRequest;

  bookingId!: string;

  // constructor(private bookingrequestService: BookingRequestService, private route: ActivatedRoute) {
  //   route.params.subscribe(bookingId => {
  //     this.bookingId = bookingId["bookingId"];
  //     console.log(this.bookingId)
  //     if (this.bookingId == null) {
  //
  //     } else {
  //       this.bookingrequestService.getBookingRequestById(this.bookingId).subscribe(
  //         (booking) => {
  //           console.log(booking);
  //           this.selectedBooking = <BookingRequest>booking;
  //         }
  //         , (error) => {
  //           console.log(error)
  //         });
  //     }
  //   })
  //
  // }
}

