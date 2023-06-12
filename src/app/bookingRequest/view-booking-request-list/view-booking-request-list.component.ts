import {Component, OnInit} from '@angular/core';
import {BookingRequestService} from "../../service/booking-request.service";
import { Location } from '@angular/common';
import {Router} from "@angular/router";
import {BookingRequest} from "../../../models/bookingRequest";

@Component({
  selector: 'app-view-booking-request-list',
  templateUrl: './view-booking-request-list.component.html',
  styleUrls: ['./view-booking-request-list.component.scss']
})
export class ViewBookingRequestListComponent implements OnInit{
  myBookingReqList:BookingRequest[]=[];
  bookingReqList:any=[]; //***
  bookingId!: string;
  userType!:string;

  constructor(private bookingReqService:BookingRequestService,private location:Location,private router: Router) {
    this.userType= localStorage.getItem("userType") + "";
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
   updateBookingRequest() {
   this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/booking-requests/myBookings/update`]))
  }

  ngOnInit(): void {
    // console.log(1111)
    this.getMyBookingRequests();
    this.getAllBookingRequests();

  }
  goBack() {
    this.location.back();
  }
}
