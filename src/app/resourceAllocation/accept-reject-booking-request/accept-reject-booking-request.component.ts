import {Component, OnInit, Output} from '@angular/core';
import {AcceptRejectBookingRequestService} from "../../service/accept-reject-booking-request.service";

@Component({
  selector: 'app-accept-reject-booking-request',
  templateUrl: './accept-reject-booking-request.component.html',
  styleUrls: ['./accept-reject-booking-request.component.scss']
})
export class AcceptRejectBookingRequestComponent implements OnInit {


  @Output()
  bookingRequestList: any = [];

  constructor(private acceptRejectBookingRequestService: AcceptRejectBookingRequestService) {

  }

  ngOnInit(): void {
    this.getAllBookingRequests();
  }

  getAllBookingRequests() {
    this.acceptRejectBookingRequestService.getAllBookingRequests().subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;

        this.bookingRequestList = content;

        this.bookingRequestList = this.bookingRequestList.filter(this.isPending);
        console.log(this.bookingRequestList);
      }
      , error => {
        console.log(error)
      });

  }

  accept(bookingRequestId: BigInt) {
    console.log(bookingRequestId);
    this.acceptRejectBookingRequestService.acceptBookingRequest(bookingRequestId).subscribe(
      (compileResults) => {
        console.log(compileResults);
      }
      , error => {
        console.log(error)
      });
    let index = this.bookingRequestList.findIndex((e: any) => e.id === bookingRequestId);
    this.bookingRequestList.splice(index, 1);

  }

  isPending(element: any) {
    return (element.status === "pending"|| element.status === "Pending");
  }

  reject(bookingRequestId: BigInt) {
    let index = this.bookingRequestList.findIndex((e: any) => e.id === bookingRequestId);
    this.bookingRequestList.splice(index, 1);
    //Not completed
  }
}
