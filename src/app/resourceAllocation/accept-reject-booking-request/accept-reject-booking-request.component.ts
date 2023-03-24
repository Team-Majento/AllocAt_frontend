import {Component, OnInit, Output} from '@angular/core';
import {AcceptRejectBookingRequestService} from "../../service/accept-reject-booking-request.service";

@Component({
  selector: 'app-accept-reject-booking-request',
  templateUrl: './accept-reject-booking-request.component.html',
  styleUrls: ['./accept-reject-booking-request.component.scss']
})
export class AcceptRejectBookingRequestComponent implements OnInit{


  @Output()
  bookingRequestList:any=[];
  constructor(private acceptRejectBookingRequestService:AcceptRejectBookingRequestService) {

  }

  ngOnInit(): void {
    this.getAllBookingRequests();
  }

  getAllBookingRequests() {
    this.acceptRejectBookingRequestService.getAllBookingRequests().subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;
        console.log(content+"ss");
        this.bookingRequestList=content;
      }
      , error => {
        console.log(error)
      });

  }

}
