import {Component, OnInit} from '@angular/core';
import {BookingRequestService} from "../../service/booking-request.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-booking-request-list',
  templateUrl: './view-booking-request-list.component.html',
  styleUrls: ['./view-booking-request-list.component.scss']
})
export class ViewBookingRequestListComponent implements OnInit{

  bookingReqList:any=[]; //***
  constructor(private bookingReqService:BookingRequestService,private location:Location) {
  }
  getAllBookingRequests() {
    this.bookingReqService.getAllBookingRequests().subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;
        console.log(compileResults);
        this.bookingReqList=content;
      }
      , error => {
        console.log(error)
      });

  }

  ngOnInit(): void {
    this.getAllBookingRequests();
  }
  goBack() {
    this.location.back();
  }
}
