import { Component } from '@angular/core';
import {BookingRequest} from "../../../models/bookingRequest";
import {BookingRequestService} from "../../service/booking-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-subordinate-bookings-rm',
  templateUrl: './view-subordinate-bookings-rm.component.html',
  styleUrls: ['./view-subordinate-bookings-rm.component.scss']
})
export class ViewSubordinateBookingsRmComponent {
  subBookingReqList!:BookingRequest[];
  constructor(private bookingReqService:BookingRequestService,private router: Router) {
    console.log("+-+")
    this.getSubBookingRequests();
  }


  getSubBookingRequests(){
    var userId = localStorage.getItem("userId") + ""
    this.bookingReqService.getSubBookingRequest().subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;
        console.log(compileResults);
        this.subBookingReqList=<BookingRequest[]>content;
      }
      , error => {
        console.log(error)
      });

  }

}
