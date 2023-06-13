import { Component } from '@angular/core';
import {BookingRequest} from "../../../models/bookingRequest";
import {BookingRequestService} from "../../service/booking-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-requests-rm',
  templateUrl: './view-requests-rm.component.html',
  styleUrls: ['./view-requests-rm.component.scss']
})
export class ViewRequestsRmComponent {
  myBookingReqList:BookingRequest[]=[];
  constructor(private bookingReqService:BookingRequestService,private router: Router) {
    this.getMyBookingRequests();
  }

  getMyBookingRequests(){
    var userId = localStorage.getItem("userId") + ""
    this.bookingReqService.getAllBookingRequestsByRequestersUserId(userId).subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;
        console.log(compileResults);
        this.myBookingReqList=<BookingRequest[]>content;
      }
      , error => {
        console.log(error)
      });

  }


  updateBookingRequestRM(reqId: number) {
    this.router.navigateByUrl(
      this.router.createUrlTree([`dashboard/view/booking-requests/myBookings/update`, reqId])
    );

  }


}
